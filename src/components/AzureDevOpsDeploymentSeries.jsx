import React from "react";
import { Cloud, Github, Workflow, Server, Wrench, CheckCircle2, ExternalLink } from "lucide-react";

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
    tools: ["Azure App Service", "GitHub Actions", ".NET 8", "Kudu", "Azure Cloud Shell"],
    status: "Completed",
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
    tools: ["Azure DevOps", "YAML", "Build Artifacts", "Agent Pools", "Azure Pipelines"],
    status: "Completed",
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
    tools: ["Azure Portal", "Resource Groups", "App Service Plan", "Deployment Center", "Monitoring Logs"],
    status: "Completed",
  },
];

export default function AzureDevOpsDeploymentSeries() {
  return (
    <section className="w-full bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Cloud className="h-4 w-4" />
              Cloud Deployment Series
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Azure Cloud & DevOps Deployment Series
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A hands-on cloud deployment series focused on building, troubleshooting, and deploying .NET applications using Azure App Service, GitHub Actions, Azure DevOps, and Azure runtime diagnostics.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40">
            <h3 className="mb-4 text-xl font-semibold">What this demonstrates</h3>
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                CI/CD workflow configuration from source control to cloud deployment.
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                Real deployment troubleshooting using logs, Kudu, and Azure App Settings.
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                Understanding of build artifacts, deployment jobs, and application runtime configuration.
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {azureProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-slate-900"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
                  {index === 0 ? <Github className="h-6 w-6" /> : index === 1 ? <Workflow className="h-6 w-6" /> : <Server className="h-6 w-6" />}
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-200">{project.subtitle}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-200">
                  <Wrench className="h-4 w-4 text-cyan-300" />
                  Key work
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Final outcome</h3>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                The final eShopOnWeb deployment successfully built and deployed through GitHub Actions, ran on Azure App Service, and loaded both the storefront and admin interface after resolving CI/CD and runtime configuration issues.
              </p>
            </div>
            <a
              href="https://github.com/davidmtzh/eShopOnWeb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Repository
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
