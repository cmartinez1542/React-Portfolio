import React, { useState } from "react";
import {
  Activity,
  Bot,
  BrainCircuit,
  Bug,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mic,
  PhoneCall,
  Play,
  Server,
  ShieldCheck,
  Volume2,
  Waves,
  X,
} from "lucide-react";

const evidenceImages = [
  {
    src: "/React-Portfolio/voice-ai-evidence/01_fastapi_server_running.png",
    alt: "FastAPI backend server running for the AI voice test agent",
    label: "FastAPI Backend Running",
  },
  {
    src: "/React-Portfolio/voice-ai-evidence/02_twilio_call_connected.png",
    alt: "Twilio voice call connected to the AI testing system",
    label: "Twilio Call Connected",
  },
  {
    src: "/React-Portfolio/voice-ai-evidence/03_openai_realtime_websocket.png",
    alt: "OpenAI Realtime API WebSocket connection handling live audio events",
    label: "Realtime WebSocket Events",
  },
  {
    src: "/React-Portfolio/voice-ai-evidence/04_edge_case_testing_scenarios.png",
    alt: "Healthcare voice agent edge-case testing scenarios",
    label: "Edge-Case Testing Scenarios",
  },
  {
    src: "/React-Portfolio/voice-ai-evidence/05_call_logs_debugging.png",
    alt: "Call logs and debugging output from the AI voice test agent",
    label: "Call Logs and Debugging",
  },
];

const scenarios = [
  "Patient interrupts the AI while it is speaking",
  "Patient gives unclear or incomplete information",
  "Patient repeats the same question multiple times",
  "Patient gives invalid dates, names, or appointment details",
  "AI gets confused and must recover the conversation",
  "Call flow breaks because of silence, timing, or unexpected input",
];

const stack = [
  "Python",
  "FastAPI",
  "Twilio Voice",
  "WebSockets",
  "OpenAI Realtime API",
  "Prompt Engineering",
  "AI Testing",
  "Healthcare Scenarios",
];

export default function AIVoiceTestAgentSeries() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? evidenceImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === evidenceImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section id="ai-voice-agent" className="py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-900/30 bg-gradient-to-br from-neutral-950 via-emerald-950 to-teal-950 p-4 shadow-2xl shadow-emerald-950/30 sm:p-6">
          <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-52 w-52 rounded-full bg-teal-300/10 blur-3xl" />

          <div className="relative">
            {/* Header + pipeline */}
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur sm:p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
                  <Mic className="h-4 w-4" />
                  Featured AI Voice Project
                </div>

                <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  AI Voice Test Agent for Healthcare
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100/80">
                  A real-time voice testing system built to place phone calls,
                  simulate patient-style conversations, and evaluate healthcare
                  AI agents through interruptions, invalid inputs, recovery
                  failures, and live call behavior.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatCard title="Real-time" text="voice interaction" />
                  <StatCard title="AI + QA" text="testing workflow" />
                  <StatCard title="Healthcare" text="voice scenarios" />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/davidmtzh/YOUR-REPOSITORY-NAME"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
                  >
                    View Repository
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href="#voice-agent-evidence"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
                  >
                    View Evidence
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Live Call Pipeline
                    </p>
                    <p className="text-xs text-emerald-100/60">
                      AI-to-AI voice testing flow
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Running
                  </div>
                </div>

                <div className="space-y-3">
                  <PipelineStep
                    icon={PhoneCall}
                    title="Twilio Call"
                    text="Places or receives the live phone call"
                  />
                  <PipelineStep
                    icon={Server}
                    title="FastAPI Backend"
                    text="Controls routes, call logic, and event flow"
                  />
                  <PipelineStep
                    icon={Waves}
                    title="WebSocket Stream"
                    text="Moves audio events in real time"
                  />
                  <PipelineStep
                    icon={BrainCircuit}
                    title="OpenAI Realtime API"
                    text="Generates and receives live voice responses"
                  />
                  <PipelineStep
                    icon={Bot}
                    title="Healthcare Voice Agent Test"
                    text="Evaluates failures, recovery, and conversation quality"
                    isLast
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white p-4 font-mono text-xs text-emerald-100/80">
                  <p className="text-emerald-300">● call.connected</p>
                  <p className="mt-1">→ audio.stream.started</p>
                  <p className="mt-1">→ realtime.session.created</p>
                  <p className="mt-1">→ testing.interruption.detected</p>
                  <p className="mt-1 text-lime-300">→ recovery.behavior.logged</p>
                </div>
              </div>
            </div>

            {/* Evidence row */}
            <div
              id="voice-agent-evidence"
              className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/30">
                    <Play className="h-7 w-7 fill-current" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-white">
                      Demo Call Recording
                    </p>
                    <p className="mt-1 text-sm text-emerald-100/70">
                      AI test agent evaluating a healthcare voice assistant
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-100">
                    <Volume2 className="h-4 w-4" />
                    Recorded test call
                  </div>

                  <audio
                    className="w-full"
                    controls
                    src="/React-Portfolio/voice-ai-evidence/demo-call-recording.mp3"
                  />

                  <p className="mt-4 text-xs leading-5 text-emerald-100/55">
                    Use a demo recording only. Do not upload real patient audio
                    or anything with private information.
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <MiniProofCard
                    icon={PhoneCall}
                    title="Phone-based"
                    text="Tests real call behavior, not only text prompts."
                  />
                  <MiniProofCard
                    icon={ShieldCheck}
                    title="Healthcare-style"
                    text="Simulates patient conversations and edge cases."
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                      Project Evidence
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Backend, call flow, and debugging proof
                    </h3>
                    <p className="mt-1 text-sm text-emerald-100/60">
                      Screenshots showing the system behind the voice testing workflow.
                    </p>
                  </div>

                  <p className="text-sm text-emerald-100/50">
                    {activeImageIndex + 1} of {evidenceImages.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(true)}
                  className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/95"
                >
                  <img
                    src={evidenceImages[activeImageIndex].src}
                    alt={evidenceImages[activeImageIndex].alt}
                    className="h-[260px] w-full object-contain object-top sm:h-[360px]"
                    loading="lazy"
                  />
                </button>

                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                  <p className="text-sm font-medium text-white">
                    {evidenceImages[activeImageIndex].label}
                  </p>

                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-400"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scenarios + stack */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/15 p-3 text-emerald-200">
                    <Bug className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Testing scenarios
                    </h3>
                    <p className="text-sm text-emerald-100/55">
                      Failure cases the system is designed to uncover
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {scenarios.map((scenario) => (
                    <div
                      key={scenario}
                      className="rounded-xl border border-white/10 bg-white p-4 text-sm leading-6 text-emerald-50/85"
                    >
                      {scenario}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-500/15 p-3 text-emerald-200">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Technical scope
                    </h3>
                    <p className="text-sm text-emerald-100/55">
                      Backend, AI, voice, and testing in one project
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-emerald-50/80">
                  This project combines backend engineering, realtime API
                  integration, voice streaming, AI-agent behavior testing, and
                  product-level QA thinking for healthcare voice assistants.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-300/15 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4">
          <button
            type="button"
            onClick={() => setIsImageModalOpen(false)}
            className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
          >
            <X className="h-4 w-4" />
            Close
          </button>

          <button
            type="button"
            onClick={showPreviousImage}
            className="absolute left-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition hover:bg-white"
            aria-label="Previous evidence image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={evidenceImages[activeImageIndex].src}
            alt={evidenceImages[activeImageIndex].alt}
            className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition hover:bg-white"
            aria-label="Next evidence image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-5 left-1/2 w-[90vw] max-w-3xl -translate-x-1/2 rounded-lg bg-white/95 px-4 py-3 text-center shadow-lg">
            <p className="text-sm font-semibold text-neutral-900">
              {evidenceImages[activeImageIndex].label}
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              {activeImageIndex + 1} of {evidenceImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function StatCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-2xl font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-emerald-100/65">{text}</p>
    </div>
  );
}

function PipelineStep({ icon: Icon, title, text, isLast = false }) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-300/20">
          <Icon className="h-5 w-5" />
        </div>

        {!isLast && <div className="h-8 w-px bg-emerald-300/20" />}
      </div>

      <div className="pb-3">
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-emerald-100/60">{text}</p>
      </div>
    </div>
  );
}

function MiniProofCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-4">
      <div className="mb-3 inline-flex rounded-xl bg-emerald-500/15 p-2 text-emerald-100">
        <Icon className="h-5 w-5" />
      </div>

      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm leading-5 text-emerald-100/60">{text}</p>
    </div>
  );
}