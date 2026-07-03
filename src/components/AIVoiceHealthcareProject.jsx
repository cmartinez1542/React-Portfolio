import React, { useState } from "react";
import {
  Bot,
  PhoneCall,
  Server,
  AudioWaveform,
  BrainCircuit,
  Stethoscope,
  Play,
  Github,
  ExternalLink,
  Activity,
  FileAudio,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

const pipelineSteps = [
  {
    title: "Twilio Call",
    text: "Places or receives the live phone call",
    icon: PhoneCall,
  },
  {
    title: "FastAPI Backend",
    text: "Controls routes, call logic, and event flow",
    icon: Server,
  },
  {
    title: "WebSocket Stream",
    text: "Moves audio events in real time",
    icon: AudioWaveform,
  },
  {
    title: "OpenAI Realtime API",
    text: "Generates and receives live voice responses",
    icon: BrainCircuit,
  },
  {
    title: "Healthcare Voice Agent Test",
    text: "Evaluates turn-taking, recovery, and conversation quality",
    icon: Stethoscope,
  },
];

const evidenceImages = [
  {
    src: "/React-Portfolio/ai-voice-agent-evidence/03_twilio_completed_call_logs.png",
    alt: "Twilio dashboard showing completed outgoing API call logs",
    label: "Twilio Completed Call Logs",
  },
  {
    src: "/React-Portfolio/ai-voice-agent-evidence/01_fastapi_backend_server_running.png",
    alt: "FastAPI backend server running for the AI voice test agent",
    label: "FastAPI Backend Server Running",
  },
  {
    src: "/React-Portfolio/ai-voice-agent-evidence/02_ngrok_public_tunnel_active.png",
    alt: "Ngrok public tunnel forwarding traffic to the local FastAPI backend",
    label: "Ngrok Public Tunnel Active",
  },

  {
    src: "/React-Portfolio/ai-voice-agent-evidence/04_live_twilio_websocket_openai_realtime_connected.png",
    alt: "Live FastAPI logs showing Twilio media stream and OpenAI Realtime connection",
    label: "Live Twilio WebSocket + OpenAI Realtime",
  },
];

export default function AIVoiceHealthcareProject() {
  const [activeEvidenceIndex, setActiveEvidenceIndex] = useState(0);
  const [isEvidenceModalOpen, setIsEvidenceModalOpen] = useState(false);

  const showPreviousEvidence = () => {
    setActiveEvidenceIndex((currentIndex) =>
      currentIndex === 0 ? evidenceImages.length - 1 : currentIndex - 1
    );
  };

  const showNextEvidence = () => {
    setActiveEvidenceIndex((currentIndex) =>
      currentIndex === evidenceImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section id="ai-voice-healthcare" className="py-14 bg-neutral-50">
      <style>{`
        @keyframes voiceLineTravel {
          from {
            height: 0%;
            opacity: 0.35;
          }
          to {
            height: 100%;
            opacity: 1;
          }
        }

        @keyframes voiceNodePulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
          45% {
            transform: scale(1.07);
            box-shadow: 0 0 0 9px rgba(37, 99, 235, 0.12);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
        }

        .voice-pipeline-card:hover .voice-step-node {
          animation: voiceNodePulse 900ms ease forwards var(--step-delay);
        }

        .voice-pipeline-card:hover .voice-connector-fill {
          animation: voiceLineTravel 900ms ease forwards var(--line-delay);
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Bot className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              AI Voice Test Agent for Healthcare
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
              A real-time voice testing system built to place phone calls,
              simulate patient-style conversations, and evaluate healthcare AI
              agents through interruptions, invalid inputs, recovery failures,
              and live call behavior.
            </p>
          </div>

          {/* Player + Evidence on left, Pipeline on right */}
          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
                <DemoRecordingCard />

                <EvidenceCard
                activeEvidenceIndex={activeEvidenceIndex}
                showPreviousEvidence={showPreviousEvidence}
                showNextEvidence={showNextEvidence}
                setIsEvidenceModalOpen={setIsEvidenceModalOpen}
                />
            </div>

            <div className="space-y-6">
                <LivePipelineCard />
                <VoiceTestCoverageCard />
            </div>
          </div>

          {/* Final outcome */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  Final outcome
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-neutral-700">
                  The project demonstrates a working AI voice testing workflow
                  that connects phone calls, backend logic, real-time audio
                  streaming, and AI response evaluation into one healthcare
                  testing system.
                </p>
              </div>

              <a
                href="https://github.com/davidmtzh/pgai-voice-challenge.git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                View Repository
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoRecordingCard() {
  return (
    <article className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
          <Play className="h-5 w-5 fill-current" />
        </div>

        <div>
          <p className="text-sm font-semibold text-neutral-950">
            Demo Call Recording
          </p>
          <p className="mt-1 text-sm leading-5 text-neutral-600">
            AI test agent evaluating a healthcare voice assistant.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-blue-700">
          <FileAudio className="h-4 w-4" />
          Recorded test call
        </div>

        <audio
          controls
          className="w-full"
          src="/React-Portfolio/ai-voice-agent-evidence/demo-call-recording.mp3"
        >
          Your browser does not support the audio element.
        </audio>

        <p className="mt-3 text-xs leading-5 text-neutral-500">
          Use a demo recording to show how the agent handles patient-style
          conversation, interruptions, and recovery behavior.
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <RecordingMetric
          title="Real call behavior"
          text="Tests timing, pauses, interruptions, and turn-taking."
        />
        <RecordingMetric
          title="Patient scenarios"
          text="Simulates edge cases and healthcare-style conversations."
        />
      </div>
    </article>
  );
}

function EvidenceCard({
  activeEvidenceIndex,
  showPreviousEvidence,
  showNextEvidence,
  setIsEvidenceModalOpen,
}) {
  const activeEvidence = evidenceImages[activeEvidenceIndex];

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
            <Images className="h-4 w-4" />
            Project Evidence
          </div>

          <h3 className="mt-2 text-lg font-semibold text-neutral-950">
            Backend, call flow, and debugging proof
          </h3>

          <p className="mt-1 text-sm leading-5 text-neutral-600">
            Screenshots showing the system behind the voice testing workflow.
          </p>
        </div>

        <p className="text-xs font-medium text-neutral-500">
          {activeEvidenceIndex + 1} of {evidenceImages.length}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
        <button
            type="button"
            onClick={() => setIsEvidenceModalOpen(true)}
            className="block aspect-square w-full overflow-hidden bg-white"
            >
            <img
                src={activeEvidence.src}
                alt={activeEvidence.alt}
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
            />
            </button>

        <div className="flex items-center justify-between gap-4 border-t border-neutral-200 bg-white px-4 py-3">
          <p className="text-sm font-semibold text-neutral-800">
            {activeEvidence.label}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={showPreviousEvidence}
              className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <button
              type="button"
              onClick={showNextEvidence}
              className="inline-flex items-center gap-1 rounded-md bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function RecordingMetric({ title, text }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 transition-colors group-hover:border-blue-100">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Activity className="h-4 w-4" />
      </div>

      <p className="text-sm font-semibold text-neutral-950">{title}</p>
      <p className="mt-2 text-xs leading-5 text-neutral-500">{text}</p>
    </div>
  );
}

function LivePipelineCard() {
  return (
    <article className="voice-pipeline-card relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-neutral-950">
            Live Call Pipeline
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            AI-to-AI voice testing flow
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Running
        </div>
      </div>

      <div className="space-y-0">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === pipelineSteps.length - 1;

          return (
            <div key={step.title} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="voice-step-node z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                  style={{
                    "--step-delay": `${index * 900}ms`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {!isLast && (
                  <div className="relative my-2 h-9 w-px overflow-hidden bg-neutral-200">
                    <span
                      className="voice-connector-fill absolute left-0 top-0 block w-full bg-blue-600"
                      style={{
                        "--line-delay": `${450 + index * 900}ms`,
                      }}
                    />
                  </div>
                )}
              </div>

              <div className={isLast ? "pb-0" : "pb-5"}>
                <p className="text-sm font-semibold text-neutral-950">
                  {step.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-neutral-500">
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-xs">
        <p className="text-blue-700">● call.connected</p>
        <p className="mt-1 text-neutral-500">→ audio.stream.started</p>
        <p className="mt-1 text-neutral-500">→ realtime.session.created</p>
        <p className="mt-1 text-neutral-500">→ testing.interruption.detected</p>
        <p className="mt-1 text-blue-700">→ recovery.behavior.logged</p>
      </div>
    </article>
  );
}

function VoiceTestCoverageCard() {
  const testItems = [
    "Interruptions and turn-taking",
    "Invalid or incomplete patient answers",
    "Latency and natural conversation flow",
    "Recovery after confusion",
    "Live call debugging through Twilio, FastAPI, WebSocket, and OpenAI logs",
  ];

  return (
    <article className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md">
      <div>
        <p className="text-sm font-semibold text-neutral-950">
          Voice Agent Test Coverage
        </p>

        <p className="mt-1 text-xs leading-5 text-neutral-500">
          Key scenarios tested during live phone-call evaluation.
        </p>
      </div>

      <ul className="mt-5 space-y-3">
        {testItems.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-neutral-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}