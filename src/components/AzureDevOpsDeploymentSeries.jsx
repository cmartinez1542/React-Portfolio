import React, { useState } from "react";
import {
  Cloud,
  Github,
  Workflow,
  Server,
  Wrench,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

const evidenceImages = [
  {
    src: "/React-Portfolio/azure-evidence/01_app_services_empty_before_creation.png",
    alt: "Azure App Services page before the web app was created",
    label: "Before App Creation",
  },
  {
    src: "/React-Portfolio/azure-evidence/02_azure_web_app_default_page.png",
    alt: "Default Azure Web App page showing the app is running and waiting for content",
    label: "Default Web App Page",
  },
  {
    src: "/React-Portfolio/azure-evidence/03_deployment_center_github_setup.png",
    alt: "Azure Deployment Center configured with GitHub repository and branch",
    label: "Deployment Center Setup",
  },
  {
    src: "/React-Portfolio/azure-evidence/04_github_actions_runs_started.png",
    alt: "GitHub Actions workflow runs started after Azure Deployment Center setup",
    label: "GitHub Actions Started",
  },
  {
    src: "/React-Portfolio/azure-evidence/05_build_publish_in_progress.png",
    alt: "GitHub Actions build and publish steps running",
    label: "Build and Publish",
  },
  {
    src: "/React-Portfolio/azure-evidence/06_artifact_download_failure.png",
    alt: "GitHub Actions deploy job showing artifact download failure during troubleshooting",
    label: "Artifact Troubleshooting",
  },
  {
    src: "/React-Portfolio/azure-evidence/07_workflow_success_summary.png",
    alt: "GitHub Actions workflow summary showing successful build and deploy jobs",
    label: "Workflow Success",
  },
  {
    src: "/React-Portfolio/azure-evidence/08_build_job_success_details.png",
    alt: "GitHub Actions build job details showing successful steps",
    label: "Build Job Success",
  },
  {
    src: "/React-Portfolio/azure-evidence/09_deploy_job_success_details.png",
    alt: "GitHub Actions deploy job details showing successful Azure deployment",
    label: "Deploy Job Success",
  },
  {
    src: "/React-Portfolio/azure-evidence/10_runtime_500_30_startup_error.png",
    alt: "Azure App Service HTTP 500.30 startup error before runtime configuration was fixed",
    label: "Runtime Error Debugging",
  },
  {
    src: "/React-Portfolio/azure-evidence/11_final_eshoponweb_site_running.png",
    alt: "Final eShopOnWeb storefront running successfully on Azure App Service",
    label: "Live Storefront",
  },
  {
    src: "/React-Portfolio/azure-evidence/12_azure_app_service_overview_success.png",
    alt: "Azure App Service overview showing successful deployment and GitHub project connection",
    label: "Azure Overview Success",
  },
];

const azureProjects = [
  {
    title: "GitHub Actions CI/CD to Azure App Service",
    subtitle: "eShopOnWeb .NET 8 Deployment",
    description:
      "Imported Microsoft’s eShopOnWeb project into GitHub, connected it to Azure App Service, and built a GitHub Actions workflow that automatically builds, publishes, uploads artifacts, authenticates to Azure, and deploys the application.",
    highlights: [
      "Fixed dotnet build errors caused by multiple project files",
      "Updated workflow paths to build and publish src/Web/Web.csproj",
      "Corrected artifact upload/download configuration",
      "Resolved Azure 500.30 startup errors using Kudu diagnostics",
      "Configured App Service environment variables for Development/in-memory database mode",
    ],
    evidenceSummary: [
      "Started by creating and validating the Azure App Service environment.",
      "Connected the GitHub repository to Azure through Deployment Center.",
      "Built and adjusted the GitHub Actions workflow for build, publish, artifact upload, and deployment.",
      "Troubleshot artifact failures and Azure runtime startup errors during the deployment process.",
      "Confirmed the final eShopOnWeb application was successfully deployed and running on Azure App Service.",
    ],    
    evidenceIndexes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    tools: ["Azure App Service", "GitHub Actions", ".NET 8", "Kudu", "Azure Cloud Shell"],
    icon: Github,
  },
  {
    title: "Azure DevOps Pipeline Deployment",
    subtitle: "Build Artifacts and Agent Troubleshooting",
    description:
      "Worked with Azure DevOps pipeline configuration, build artifacts, agent pools, YAML workflows, and deployment troubleshooting to understand how automated build and release pipelines are structured.",
    highlights: [
      "Reviewed YAML pipeline structure and agent configuration",
      "Troubleshot failed pipeline runs and runtime settings",
      "Analyzed build artifacts and deployment outputs",
      "Compared Azure DevOps pipelines with GitHub Actions workflows",
    ],
    evidenceSummary: [
      "Reviewed how automated pipelines separate build, publish, artifact, and deployment responsibilities.",
      "Used failed pipeline behavior to understand artifact flow and troubleshooting steps.",
      "Compared pipeline execution patterns between Azure DevOps and GitHub Actions.",
      "Confirmed successful build and deploy job behavior after fixing workflow issues.",
    ],
    evidenceIndexes: [4, 5, 6, 7, 8],
    tools: ["Azure DevOps", "YAML", "Build Artifacts", "Agent Pools", "Azure Pipelines"],
    icon: Workflow,
  },
  {
    title: "Azure Resource Management and App Hosting",
    subtitle: "Resource Groups, App Services, and Runtime Configuration",
    description:
      "Created and managed Azure resources needed to host cloud applications, including resource groups, App Service Plans, App Services, runtime stacks, deployment settings, and cleanup steps to control cost.",
    highlights: [
      "Created and configured Azure resource groups",
      "Managed App Service Plans and pricing tiers",
      "Verified runtime stack and deployment settings",
      "Used logs and deployment center to confirm application health",
      "Practiced resource cleanup to avoid unnecessary billing",
    ],
    evidenceSummary: [
      "Created and verified the Azure hosting environment before deploying application code.",
      "Reviewed App Service configuration, Deployment Center settings, and runtime behavior.",
      "Used Azure portal evidence to track the app from an empty service to a working deployment.",
      "Validated the final hosted application and confirmed successful App Service status.",
    ],
    evidenceIndexes: [0, 1, 2, 9, 11, 10],
    tools: ["Azure Portal", "Resource Groups", "App Service Plan", "Deployment Center", "Monitoring Logs"],
    icon: Server,
  },
];

export default function AzureDevOpsDeploymentSeries() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const selectedProject =
    selectedProjectIndex !== null ? azureProjects[selectedProjectIndex] : null;

  const selectedEvidence =
    selectedProject?.evidenceIndexes.map((index) => evidenceImages[index]) || [];

  const handleEvidenceClick = (projectIndex) => {
    if (selectedProjectIndex === projectIndex) {
      setSelectedProjectIndex(null);
      setActiveImageIndex(0);
      return;
    }

    setSelectedProjectIndex(projectIndex);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedEvidence.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedEvidence.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section id="azure-devops" className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
            <Cloud className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950">
            Azure Cloud & DevOps Deployment Series
          </h2>

          <p className="mt-3 max-w-3xl mx-auto text-neutral-600">
            A hands-on cloud deployment series focused on building, troubleshooting, and deploying .NET applications using Azure App Service, GitHub Actions, Azure DevOps, and Azure runtime diagnostics.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-neutral-950">
            What this demonstrates
          </h3>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="flex gap-3 text-sm text-neutral-600">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <span>CI/CD workflow configuration from source control to cloud deployment.</span>
            </div>

            <div className="flex gap-3 text-sm text-neutral-600">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <span>Deployment troubleshooting using logs, Kudu, and Azure App Settings.</span>
            </div>

            <div className="flex gap-3 text-sm text-neutral-600">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
              <span>Build artifacts, deployment jobs, and application runtime configuration.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 items-stretch">
          {azureProjects.map((project, projectIndex) => {
            const Icon = project.icon;
            const isSelected = selectedProjectIndex === projectIndex;

            return (
              <article
                key={project.title}
                className={`group flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${
                  isSelected
                    ? "border-blue-300 ring-2 ring-blue-100"
                    : "border-neutral-200 hover:border-blue-200"
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="rounded-lg bg-blue-50 p-3 text-blue-700 transition-colors duration-300 group-hover:bg-blue-100">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 ring-1 ring-green-100">
                    Completed
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-neutral-950">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-700">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                    <Wrench className="h-4 w-4 text-blue-700" />
                    Key work
                  </h4>

                  <ul className="space-y-2 text-sm text-neutral-600">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleEvidenceClick(projectIndex)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <Images className="h-4 w-4" />
                    {isSelected ? "Hide Evidence" : "View Evidence"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            selectedProject ? "mt-8 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {selectedProject && selectedEvidence.length > 0 && (
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-500/10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Evidence Gallery
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-neutral-950">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-600">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-500">
                  {activeImageIndex + 1} of {selectedEvidence.length}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.3fr] lg:items-start">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                  <h4 className="text-sm font-semibold text-neutral-950">
                    Summary
                  </h4>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                    {selectedProject.evidenceSummary.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsImageModalOpen(true)}
                      className="block w-full cursor-zoom-in bg-neutral-100"
                    >
                      <img
                        src={selectedEvidence[activeImageIndex].src}
                        alt={selectedEvidence[activeImageIndex].alt}
                        className="h-[260px] w-full object-contain object-top sm:h-[360px] lg:h-[430px]"
                        loading="lazy"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm transition hover:bg-white"
                      aria-label="Previous evidence image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-sm transition hover:bg-white"
                      aria-label="Next evidence image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-neutral-800 bg-neutral-950 px-4 py-3">
                    <p className="text-sm font-medium text-white">
                      {selectedEvidence[activeImageIndex].label}
                    </p>

                    <div className="flex gap-1">
                      {selectedEvidence.map((image, imageIndex) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setActiveImageIndex(imageIndex)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            activeImageIndex === imageIndex
                              ? "bg-white"
                              : "bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`Show evidence image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-950">
                Final outcome
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-neutral-600">
                The final eShopOnWeb deployment successfully built and deployed through GitHub Actions, ran on Azure App Service, and loaded both the storefront and admin interface after resolving CI/CD and runtime configuration issues.
              </p>
            </div>

            <a
              href="https://github.com/davidmtzh/eShopOnWeb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
            >
              View Repository
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {isImageModalOpen && selectedEvidence.length > 0 && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
    <button
      type="button"
      onClick={() => setIsImageModalOpen(false)}
      className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
    >
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
      src={selectedEvidence[activeImageIndex].src}
      alt={selectedEvidence[activeImageIndex].alt}
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
        {selectedEvidence[activeImageIndex].label}
      </p>
      <p className="mt-1 text-xs text-neutral-600">
        {activeImageIndex + 1} of {selectedEvidence.length}
      </p>
    </div>
  </div>
)}
    </section>
  );
}