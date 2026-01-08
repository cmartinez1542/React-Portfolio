export const projects = [
  {
    slug: "botzilla-robotics",
    name: "Botzilla (Robotics Final Project)",
    summary:
      "Finite State Automaton robot with odometry, PD/PID control, sonar scanning, and autonomous behaviors.",
    tags: ["C++", "Arduino", "Control Systems", "Robotics"],
    image: "/projects/botzilla.jpg",
    links: {
      github: "https://github.com/your-repo",
      demo: "",
    },
    highlights: [
      "FSA with IDLE/ROTATING/MOVING states",
      "Servo-mounted sonar for scanning + obstacle logic",
      "Improved turning accuracy via angle control",
    ],
  },
  {
    slug: "kernel-build-lab",
    name: "Linux Kernel Build & VM Lab",
    summary:
      "Configured and compiled Linux kernel from source on Ubuntu VM; documented reproducible setup.",
    tags: ["Linux", "VMs", "Systems", "Shell"],
    image: "/projects/kernel-lab.jpg",
    links: {
      github: "https://github.com/your-repo",
      demo: "",
    },
    highlights: ["Reproducible steps", "Troubleshooting notes", "Clean documentation"],
  },
];
