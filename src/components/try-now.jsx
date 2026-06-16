"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Mic,
  Play,
  Pause,
  Square,
  Waves,
  Volume2,
  Headphones,
  Loader2,
  RotateCcw,
  Check,
  Zap,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

const languages = [
  { value: "auto", label: "Auto Detect" },
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "te", label: "Telugu" },
  { value: "mr", label: "Marathi" },
  { value: "ta", label: "Tamil" },
  { value: "gu", label: "Gujarati" },
  { value: "kn", label: "Kannada" },
  { value: "ml", label: "Malayalam" },
  { value: "pa", label: "Punjabi" },
  { value: "or", label: "Odia" },
  { value: "as", label: "Assamese" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
];

const ttsLanguages = languages.filter((l) => l.value !== "auto");

const voices = [
  { id: "sarah", name: "Sarah", gender: "Female", accent: "American" },
  { id: "emma", name: "Emma", gender: "Female", accent: "British" },
  { id: "sophia", name: "Sophia", gender: "Female", accent: "Australian" },
  { id: "priya", name: "Priya", gender: "Female", accent: "Indian" },
  { id: "james", name: "James", gender: "Male", accent: "American" },
  { id: "william", name: "William", gender: "Male", accent: "British" },
  { id: "oliver", name: "Oliver", gender: "Male", accent: "Australian" },
  { id: "arjun", name: "Arjun", gender: "Male", accent: "Indian" },
];

function STTSection() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState("auto");
  const [transcript, setTranscript] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordedUrl, setRecordedUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const analyserRef = useRef(null);
  const [waveformBars, setWaveformBars] = useState(Array(30).fill(4));
  const animFrameRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
  }, []);

  const animateWaveform = () => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const bars = Array(30).fill(0).map((_, i) => {
      const idx = Math.floor((i / 30) * dataArray.length);
      return Math.max(4, (dataArray[idx] / 255) * 60);
    });
    setWaveformBars(bars);
    animFrameRef.current = requestAnimationFrame(animateWaveform);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        setRecordedUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        audioContext.close();
        analyserRef.current = null;
        setWaveformBars(Array(30).fill(4));
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      animateWaveform();
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch {
      alert("Microphone access is required. Please allow microphone permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }
  };

  const processAudio = async () => {
    if (!audioBlob) return;
    setIsProcessing(true);
    setTranscript("");
    await new Promise((r) => setTimeout(r, 2000));
    const mockTranscripts = [
      "Hello, this is a demonstration of SAIVA's speech-to-text technology. The audio was recorded directly in your browser and transcribed using our advanced AI models.",
      "Welcome to SAIVA Studio. Our AI-powered transcription delivers accurate results with support for over 45 languages, including real-time processing capabilities.",
      "This is a test of the speech recognition system. The technology uses advanced neural networks for precise transcription with industry-leading accuracy.",
    ];
    setTranscript(mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)]);
    setIsProcessing(false);
  };

  const reset = () => {
    setTranscript("");
    setAudioBlob(null);
    setRecordedUrl(null);
    setRecordingTime(0);
    setWaveformBars(Array(30).fill(4));
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-border p-5 sm:p-8 md:p-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="hidden lg:block">
          <Badge variant="secondary" className="mb-4">
            <Waves className="h-3 w-3 mr-1" />
            Speech to Text
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Transcribe audio instantly
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Record audio directly in your browser and watch our AI transcribe it into
            accurate text in real-time. Supports 45+ languages with automatic language
            detection.
          </p>
          <ul className="space-y-3">
            {[
              "Real-time transcription with speaker detection",
              "Automatic punctuation and formatting",
              "Support for 45+ languages including Indian languages",
              "Export transcripts as text or SRT files",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-2 block">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col items-center py-6 bg-muted/50 rounded-2xl">
            <div className="relative mb-4">
              <Button
                size="lg"
                className={`w-20 h-20 rounded-full ${
                  isRecording
                    ? "bg-red-500 hover:bg-red-600 animate-pulse"
                    : "bg-black hover:bg-neutral-800"
                }`}
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isProcessing}
              >
                {isRecording ? <Square className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
              </Button>
              {isRecording && (
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm text-red-500 font-medium">
                  {formatTime(recordingTime)}
                </span>
              )}
            </div>

            {isRecording && (
              <div className="flex items-end gap-[3px] h-16 mt-6">
                {waveformBars.map((h, i) => (
                  <div
                    key={i}
                    className="w-[3px] bg-blue-500 rounded-full transition-all duration-75"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            )}

            {!isRecording && !audioBlob && (
              <p className="text-sm text-muted-foreground mt-2">Click the mic to start recording</p>
            )}
          </div>

          {recordedUrl && !isRecording && (
            <div>
              <label className="text-sm font-medium mb-2 block">Recorded Audio</label>
              <audio ref={(el) => { if (el) el.src = recordedUrl; }} controls className="w-full h-12 rounded-xl" />
            </div>
          )}

          {audioBlob && !isRecording && (
            <div className="flex gap-3">
              <Button
                onClick={processAudio}
                disabled={isProcessing}
                className="flex-1 bg-black text-white hover:bg-neutral-800 h-12"
              >
                {isProcessing ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                ) : (
                  <><Waves className="mr-2 h-4 w-4" />Transcribe Audio</>
                )}
              </Button>
              <Button onClick={reset} variant="outline" className="h-12">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          )}

          {transcript && (
            <div className="p-5 bg-muted rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Waves className="h-4 w-4 text-blue-500" />
                <p className="text-sm font-medium">Transcription Result</p>
              </div>
              <p className="text-sm leading-relaxed">{transcript}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TTSSection() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const [voice, setVoice] = useState("sarah");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const generateSpeech = async () => {
    if (!text.trim()) return;
    setIsGenerating(true);
    setAudioUrl(null);
    await new Promise((r) => setTimeout(r, 2500));
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const dest = ctx.createMediaStreamDestination();
    osc.connect(dest);
    osc.frequency.value = 220;
    osc.type = "sine";
    osc.start();
    const mr = new MediaRecorder(dest.stream);
    const chunks = [];
    mr.ondataavailable = (e) => chunks.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      setAudioUrl(URL.createObjectURL(blob));
      ctx.close();
    };
    mr.start();
    setTimeout(() => { osc.stop(); mr.stop(); }, 3000);
    setIsGenerating(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); }
    else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setText("");
    setAudioUrl(null);
    setIsPlaying(false);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
  };

  const selectedVoice = voices.find((v) => v.id === voice);

  return (
    <div className="bg-white rounded-3xl border border-border p-5 sm:p-8 md:p-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="hidden lg:block">
          <Badge variant="secondary" className="mb-4">
            <Volume2 className="h-3 w-3 mr-1" />
            Text to Speech
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Natural-sounding AI voices
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Transform any text into ultra-realistic speech with our advanced AI voice
            models. Choose from multiple languages, voices, and speaking styles to
            create the perfect audio.
          </p>
          <ul className="space-y-3">
            {[
              "Ultra-realistic voices with natural intonation",
              "8 expressive voices with different accents",
              "Support for 20+ languages",
              "Adjustable speed, pitch, and emphasis",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-violet-600" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-2 block">Text to convert</label>
            <Textarea
              placeholder="Type or paste text here... Try something like: 'Welcome to SAIVA, the future of voice technology.'"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground mt-1">{text.length} characters</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ttsLanguages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Voice</label>
              <Select value={voice} onValueChange={setVoice}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {voices.map((v) => (
                    <SelectItem key={v.id} value={v.id}>
                      {v.name} ({v.gender})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedVoice && (
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Volume2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">{selectedVoice.name}</p>
                <p className="text-xs text-muted-foreground">{selectedVoice.gender} • {selectedVoice.accent} accent</p>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              onClick={generateSpeech}
              disabled={!text.trim() || isGenerating}
              className="flex-1 bg-black text-white hover:bg-neutral-800 h-12"
            >
              {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating...</>
              ) : (
                <><Volume2 className="mr-2 h-4 w-4" />Generate Speech</>
              )}
            </Button>
            <Button onClick={reset} variant="outline" className="h-12">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {audioUrl && (
            <div className="p-4 bg-muted rounded-2xl space-y-3">
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePlay}
                  className="h-12 w-12 shrink-0 bg-black text-white hover:bg-neutral-800 rounded-full"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </Button>
                <audio
                  ref={audioRef}
                  src={audioUrl}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
                <div className="flex-1">
                  <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-black rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{selectedVoice?.name} • {language.toUpperCase()}</span>
                <span>0:03</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function VoiceCloningSection() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [referenceBlob, setReferenceBlob] = useState(null);
  const [referenceUrl, setReferenceUrl] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const generatedRef = useRef(null);
  const [waveformBars, setWaveformBars] = useState(Array(20).fill(4));
  const analyserRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const animateWaveform = () => {
    if (!analyserRef.current) return;
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
    analyserRef.current.getByteFrequencyData(dataArray);
    const bars = Array(20).fill(0).map((_, i) => {
      const idx = Math.floor((i / 20) * dataArray.length);
      return Math.max(4, (dataArray[idx] / 255) * 40);
    });
    setWaveformBars(bars);
    animFrameRef.current = requestAnimationFrame(animateWaveform);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;

      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setReferenceBlob(blob);
        setReferenceUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        audioContext.close();
        analyserRef.current = null;
        setWaveformBars(Array(20).fill(4));
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);
      animateWaveform();
      timerRef.current = setInterval(() => setRecordingTime((p) => p + 1), 1000);
    } catch {
      alert("Microphone access is required.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }
  };

  const generateClone = async () => {
    if (!text.trim() || !referenceBlob) return;
    setIsGenerating(true);
    setAudioUrl(null);
    await new Promise((r) => setTimeout(r, 3000));
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const dest = ctx.createMediaStreamDestination();
    osc.connect(dest);
    osc.frequency.value = 330;
    osc.type = "triangle";
    osc.start();
    const mr = new MediaRecorder(dest.stream);
    const chunks = [];
    mr.ondataavailable = (e) => chunks.push(e.data);
    mr.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      setAudioUrl(URL.createObjectURL(blob));
      ctx.close();
    };
    mr.start();
    setTimeout(() => { osc.stop(); mr.stop(); }, 3000);
    setIsGenerating(false);
  };

  const togglePlay = () => {
    if (!generatedRef.current) return;
    if (isPlaying) { generatedRef.current.pause(); }
    else { generatedRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  const reset = () => {
    setText("");
    setReferenceBlob(null);
    setReferenceUrl(null);
    setAudioUrl(null);
    setIsPlaying(false);
    setRecordingTime(0);
    setWaveformBars(Array(20).fill(4));
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-3xl border border-border p-5 sm:p-8 md:p-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="hidden lg:block">
          <Badge variant="secondary" className="mb-4">
            <Headphones className="h-3 w-3 mr-1" />
            Voice Cloning
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Clone any voice with AI
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Record a short audio sample and our AI will create a digital clone of
            that voice. Use the cloned voice to generate new speech in any language
            with the same voice characteristics.
          </p>
          <ul className="space-y-3">
            {[
              "Create a voice clone from just 10 seconds of audio",
              "Preserves voice tone, pitch, and speaking style",
              "Generate speech in multiple languages with the cloned voice",
              "Perfect for content creators and localization",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-emerald-600" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-medium mb-2 block">Text to speak with cloned voice</label>
            <Textarea
              placeholder="Enter text for the cloned voice to say..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ttsLanguages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Reference Audio (5-10 seconds)</label>
            <div className="p-5 border-2 border-dashed border-border rounded-2xl text-center">
              {!referenceUrl ? (
                <>
                  <Button
                    className={`w-16 h-16 rounded-full mb-3 ${
                      isRecording
                        ? "bg-red-500 hover:bg-red-600 animate-pulse"
                        : "bg-black hover:bg-neutral-800"
                    }`}
                    onClick={isRecording ? stopRecording : startRecording}
                  >
                    {isRecording ? <Square className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                  </Button>

                  {isRecording && (
                    <div className="flex items-end justify-center gap-[3px] h-8 mb-2">
                      {waveformBars.map((h, i) => (
                        <div
                          key={i}
                          className="w-[2px] bg-red-500 rounded-full transition-all duration-75"
                          style={{ height: `${h * 0.6}px` }}
                        />
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground">
                    {isRecording
                      ? `Recording... ${formatTime(recordingTime)} — Click to stop`
                      : "Click the mic to record a voice sample"}
                  </p>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-sm font-medium text-emerald-600">Voice sample recorded</p>
                  <audio ref={(el) => { if (el) el.src = referenceUrl; }} controls className="w-full h-10" />
                  <Button variant="ghost" size="sm" onClick={() => { setReferenceBlob(null); setReferenceUrl(null); setRecordingTime(0); }}>
                    <RotateCcw className="h-4 w-4 mr-1" /> Re-record
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={generateClone}
              disabled={!text.trim() || !referenceBlob || isGenerating}
              className="flex-1 bg-black text-white hover:bg-neutral-800 h-12"
            >
              {isGenerating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Cloning...</>
              ) : (
                <><Mic className="mr-2 h-4 w-4" />Clone Voice & Generate</>
              )}
            </Button>
            <Button onClick={reset} variant="outline" className="h-12">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {audioUrl && (
            <div className="p-4 bg-muted rounded-2xl space-y-3">
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePlay}
                  className="h-12 w-12 shrink-0 bg-black text-white hover:bg-neutral-800 rounded-full"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </Button>
                <audio
                  ref={generatedRef}
                  src={audioUrl}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                />
                <div className="flex-1">
                  <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-black rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Cloned voice output</span>
                <span>0:03</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function TryNowSection() {
  const [activeTab, setActiveTab] = useState("voice-cloning");

  const tabs = [
    { id: "speech-to-text", label: "Speech to Text", icon: Waves },
    { id: "text-to-speech", label: "Text to Speech", icon: Volume2 },
    { id: "voice-cloning", label: "Voice Cloning", icon: Headphones },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full px-5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            Interactive Demo
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Try SAIVA in your browser
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the power of our AI voice platform firsthand. Record audio,
            generate speech, and clone voices — all running directly in your browser.
          </p>
        </div>

        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex bg-white rounded-2xl p-1.5 border border-border shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-black text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden">
          {activeTab === "speech-to-text" && <STTSection />}
          {activeTab === "text-to-speech" && <TTSSection />}
          {activeTab === "voice-cloning" && <VoiceCloningSection />}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl border border-border">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">45+ Languages</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Real-time Processing</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">No Sign-up Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
