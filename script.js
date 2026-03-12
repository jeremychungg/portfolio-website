const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const heroPhoto = document.querySelector(".hero-photo");
if (heroPhoto) {
  heroPhoto.addEventListener("error", () => {
    heroPhoto.style.display = "none";
  });
}

const projectSections = [
  {
    containerId: "featured-projects-grid",
    projects: [
      {
        id: "servesense",
        title: "ServeSense",
        cardSummary:
          "Built an embedded ML tennis serve coach that classifies serves in real time and gives instant feedback.",
        summary:
          "I built an Edge AI device that acts like a real-time tennis serve coach.",
        actionText: "Open details, media, and links",
        tags: ["Seeed Xiao ESP32-S3", "TensorFlow", "ML", "IMU", "BLE", "GUIs", "Haptics"],
        points: [
          "Used Seeed Xiao ESP32 + TensorFlow to classify serves in real time with 98% accuracy.",
          "Created HTML GUI to visualize serve data and classification results",
          "Integrated a 6-axis IMU, BLE communication, and haptic feedback in one device with custom CAD mount onto the racket",
          "Designed it to give immediate guidance right after each serve."
        ],
        links: [
          { label: "GitHub", url: "https://github.com/jeremychungg/serve_sense"},
          { label: "Project PDF", url: "assets/projects/ServeSense.pdf" }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/servesense-1.jpg",
            alt: "ServeSense prototype hardware",
            caption: "ServeSense hardware prototype"
          },
          {
            type: "image",
            src: "assets/projects/servesense-2.png",
            alt: "ServeSense testing workflow",
            caption: "Real-time serve classification testing"
          },
          {
            type: "video",
            src: "assets/projects/servesense-demo.mp4",
            caption: "Demo clip placeholder for live serve feedback"
          }
        ]
      },
      {
        id: "lerobot-hackathon",
        title: "LeRobot Hackathon",
        cardSummary:
          "Hackathon project where I trained SmolVLM to help a follower robot detect and grab colored blocks.",
        summary:
          "LeRobot Worldwide Hackathon project focused on imitation learning for robotic block picking.",
        actionText: "Open details, media, and links",
        tags: ["PyTorch", "NVIDIA CUDA", "SmolVLM", "Imitation Learning", "Robotics"],
        points: [
          "Trained open-source SmolVLM using PyTorch and NVIDIA CUDA Toolkit.",
          "Built a leader-follower setup where the follower learned to detect and grasp colored blocks.",
          "Shipped a working autonomous grasping demo during hackathon constraints."
        ],
        links: [
          {
            label: "Project Overview",
            url: "https://github.com/your-username/imitation-learning-robot-system"
          }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/imitation-robot-1.jpg",
            alt: "Leader follower robot setup",
            caption: "Leader-follower robot system"
          },
          {
            type: "image",
            src: "assets/projects/imitation-robot-2.jpg",
            alt: "Robot grasping colored blocks",
            caption: "Autonomous block detection and grasping"
          }
        ]
      },
      {
        id: "octopus-controller",
        title: "Octopus Controller",
        cardSummary:
          "Embedded control project for driving and coordinating a multi-actuator octopus-inspired system.",
        summary:
          "Controller build for an octopus-style system focused on robust actuation, wiring, and system integration.",
        actionText: "Open details, media, and links",
        tags: ["Embedded Systems", "Control", "Electronics", "Integration"],
        points: [
          "Built an 8-actuator radial tensioning system for robotic carbon-fiber layup, using synchronized Arduino Mega control to reduce wrinkling during manufacturing.",
          "Designed the 24V power distribution system with fused terminals, thermal protection, current sensing, and an emergency stop for safer operation under load.",
          "Improved operator workflow by about 40% with a serial interface that supported both selective and simultaneous actuator control.",
          "Connected the octopus controller to a Franka Emika arm through ROS to support future autonomous operation."
        ],
        links: [],
        media: [
          {
            type: "image",
            src: "assets/projects/octopus-controller-1.jpg",
            alt: "Octopus controller hardware",
            caption: "Octopus controller hardware setup"
          }
        ]
      },
      {
        id: "automated-thrust-stand",
        title: "Automated Thrust Stand",
        cardSummary:
          "Sensor processing and PySide GUI for automated measurement of thrust, power, and temperature during motor-propeller testing.",
        summary:
          "Built sensor processing and a PySide GUI for automated measurement of thrust, power, and temperature during motor-propeller testing, achieving plus or minus 2 percent accuracy and a 62 percent reduction in testing time.",
        actionText: "Open details, photo, and GitHub",
        tags: ["PySide", "Sensor Processing", "Testing", "GUI", "Python"],
        points: [
          "Automated thrust, power, and temperature capture during motor-propeller testing.",
          "Achieved measurement accuracy within plus or minus 2 percent.",
          "Reduced testing time by 62 percent through automated acquisition and workflow improvements."
        ],
        links: [
          { label: "GitHub", url: "https://github.com/your-username/automated-thrust-stand" }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/automated-thrust-stand-1.jpg",
            alt: "Automated thrust stand test rig",
            caption: "Automated thrust stand photo"
          }
        ]
      },
      {
        id: "pixhawk-compatible-flight-controller",
        title: "Custom Pixhack Compatible Flight Controller",
        cardSummary:
          "Designed a custom Pixhawk-compatible flight controller for PennAiR's advanced class team.",
        summary:
          "Custom flight controller project designed to be Pixhawk compatible, with a focus on PCB architecture and integration requirements.",
        actionText: "Open details and PCB rendering",
        tags: ["PCB Design", "Flight Controller", "Avionics", "Hardware"],
        points: [
          "Designed a custom flight controller with Pixhawk compatibility targets.",
          "Focused on power architecture and component selection.",
          "Currently unfinished but preparing for review and release."
        ],
        links: [],
        media: [
          {
            type: "image",
            src: "assets/projects/pixhawk-flight-controller-render.jpg",
            alt: "Custom Pixhawk compatible flight controller PCB rendering",
            caption: "PCB rendering"
          }
        ]
      },
      {
        id: "music-synthesizer",
        title: "Music Synthesizer",
        cardSummary:
          "Designed and built a custom PCB synth from schematic to reflow, then validated the board with continuity testing.",
        summary:
          "Custom PCB synth project from circuit design all the way to assembled and tested hardware.",
        actionText: "Open details, media, and links",
        tags: ["Altium", "PCB Design", "Reflow Soldering", "Validation", "Hardware"],
        points: [
          "Created detailed schematics and optimized board layout in Altium.",
          "Assembled the board via reflow soldering.",
          "Ran lead continuity and reliability checks to validate final hardware."
        ],
        links: [
          { label: "Build Log", url: "https://github.com/your-username/music-synthesizer" },
          { label: "Schematic PDF", url: "assets/projects/music-synth-schematic.pdf" }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/music-synth-1.jpg",
            alt: "Music synthesizer PCB board",
            caption: "Custom synthesizer PCB"
          },
          {
            type: "image",
            src: "assets/projects/music-synth-2.jpg",
            alt: "Assembled synthesizer hardware",
            caption: "Assembled synthesizer device"
          }
        ]
      },
      {
        id: "haptic-bike-navigation-system",
        title: "Haptic Bike Navigation System",
        cardSummary:
          "Built a bike nav system with turn-by-turn haptic cues so riders can keep their eyes off their phones.",
        summary:
          "An ESP32 bike navigation build that replaces constant phone-checking with haptic cues.",
        actionText: "Open details, media, and links",
        tags: ["ESP32", "Google Maps API", "LED Matrix", "Vibration Feedback", "Embedded C"],
        points: [
          "Integrated Google Maps API routing with an LED matrix and vibrating handlebars.",
          "Delivered real-time turn-by-turn feedback through lights and haptics.",
          "Designed it to reduce rider reliance on phone screens while biking."
        ],
        links: [
          { label: "Demo Notes", url: "https://github.com/your-username/haptic-bike-navigation" }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/bike-nav-1.jpg",
            alt: "Bike navigation hardware",
            caption: "Handlebar haptics and LED display setup"
          },
          {
            type: "image",
            src: "assets/projects/bike-nav-2.jpg",
            alt: "Navigation feedback in testing",
            caption: "Turn guidance testing session"
          }
        ]
      },
      {
        id: "rescue-smart-glasses",
        title: "Rescue: AI Smart Glasses",
        cardSummary:
          "AI smart glasses to guide users through CPR, with on-device model deployment support.",
        summary:
          "Rescue is an AI smart glasses project to help guide users through CPR. I helped train and quantize the model onto the glasses using more than 1000 preprocessed training images.",
        actionText: "Open details, media, and links",
        tags: ["AI", "Computer Vision", "Model Quantization", "Wearables"],
        points: [
          "Helped train the CPR guidance model using more than 1000 preprocessed training images.",
          "Quantized and deployed the model onto the smart glasses hardware.",
          "Supported an assistive workflow focused on clear CPR guidance for users."
        ],
        links: [],
        media: [
          {
            type: "image",
            src: "assets/projects/rescue-smart-glasses-1.jpg",
            alt: "Rescue AI smart glasses",
            caption: "Rescue smart glasses setup"
          }
        ]
      },
      {
        id: "e-bike-converter",
        title: "E-Bike Converter",
        cardSummary:
          "E-bike conversion project with linked documentation, photo evidence, and video demo.",
        summary:
          "Electric bike conversion project documented with a project link, build photo, and demo video.",
        actionText: "Open details, photo, video, and link",
        tags: ["Arduino", "Power Electronics", "Motors", "Accelerometer", "SolidWorks", "LCD Screens", "Testing"],
        points: [
          "Converted a standard bike into an e-bike system with DC motor running once speed is detected.",
          "Used SolidWorks to design the enclosure and mounts, which were laser cutted.",
        ],
        links: [
          { label: "Project Link", url: "https://devpost.com/software/big-baller-bikes" }
        ],
        media: [
          {
            type: "image",
            src: "assets/projects/e-bike-converter-1.jpg",
            alt: "Converted e-bike photo",
            caption: "Full completed setup"
          },
          {
            type: "video",
            src: "assets/projects/e-bike-converter-demo.mp4",
            caption: "Demo video"
          }
        ]
      }
    ]
  },
  {
    containerId: "fun-projects-grid",
    projects: [
      {
        id: "pcb-puzzle-piece-with-neopixel",
        title: "PCB Puzzle Piece with Neopixel",
        cardSummary:
          "Small PCB build combining a puzzle-piece form factor with integrated Neopixel lighting.",
        summary:
          "A playful PCB project built around a puzzle-piece shape and animated Neopixel integration.",
        actionText: "Open details, media, and links",
        tags: ["Altium", "PCB Reflow", "Neopixel", "SolidWorks", "Lead Testing"],
        points: [
          "Designed a PCB and laser cut puzzle piece that comes together with other pieces.",
          "Created schematic and 2-layer board layout in Altium, then assembled the board via reflow soldering.",
        ],
        links: [],
        media: [
          {
            type: "image",
            src: "assets/projects/pcb-puzzle-piece-neopixel-1.jpg",
            alt: "PCB Layout on Altium",
            caption: "Front side of PCB puzzle piece"
          },
          {
            type: "image",
            src: "assets/projects/pcb-puzzle-piece-neopixel-2.jpg",
            alt: "PCB Layout on Altium",
            caption: "Back side of PCB puzzle piece"
          },
          {
            type: "image",
            src: "assets/projects/pcb-puzzle-piece-neopixel-3.jpg",
            alt: "Fully assembled PCB puzzle piece",
            caption: "Fully assembled PCB puzzle piece"
          }
        ]
      },
      {
        id: "minecraft-diamond-helmet",
        title: "Minecraft Diamond Helmet",
        cardSummary:
          "Made it for the Minecraft movie and brought it to the theater",
        summary:
          "Diamond helmet for the Minecraft movie (netherite helmet was too much work)",
        actionText: "Open details and media",
        tags: ["SolidWorks", "Laser Cutting", "Build"],
        points: [
          "Laser cut using 1/4 inch acrylic, used screws and t-slots to assemble all the parts, and then glued the stencils to the acrylic sides.",
          "It was so cool even the security guard took a selfie with it."
        ],
        links: [],
        media: [
          {
            type: "image",
            src: "assets/projects/minecraft-diamond-helmet-1.jpg",
            alt: "Minecraft diamond helmet build",
            caption: "Minecraft diamond helmet"
          },
          {
            type: "image",
            src: "assets/projects/minecraft-helmet-2.jpg",
            alt: "SolidWorks Assembly",
            caption: "SolidWorks Assembly"
          }
        ]
      }
    ]
  }
];

const allProjects = projectSections.flatMap((section) => section.projects);
const projectData = Object.fromEntries(allProjects.map((project) => [project.id, project]));

const createTagBubbles = (tags = []) => {
  const bubbles = document.createElement("div");
  bubbles.className = "bubbles";

  tags.forEach((tag) => {
    const bubble = document.createElement("span");
    bubble.textContent = tag;
    bubbles.appendChild(bubble);
  });

  return bubbles;
};

const buildProjectCard = (project) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-project", project.id);
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${project.title} details`);

  const mediaPreview = document.createElement("div");
  mediaPreview.className = "project-card-media";

  const previewItem = (project.media || []).find((item) => item.type === "image");

  if (previewItem) {
    const img = document.createElement("img");
    img.src = previewItem.src;
    img.alt = previewItem.alt || `${project.title} preview`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      mediaPreview.classList.add("is-placeholder");
      mediaPreview.textContent = "Add project preview";
    });
    mediaPreview.appendChild(img);
  } else {
    mediaPreview.classList.add("is-placeholder");
    mediaPreview.textContent = "Add project preview";
  }

  const title = document.createElement("h2");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.textContent = project.cardSummary;

  const action = document.createElement("p");
  action.className = "project-action";
  action.textContent = project.actionText || "Open details";

  card.append(mediaPreview, title, summary, createTagBubbles(project.tags), action);
  return card;
};

projectSections.forEach((section) => {
  const container = document.getElementById(section.containerId);
  if (!container) return;

  section.projects.forEach((project) => {
    container.appendChild(buildProjectCard(project));
  });
});

const modalNode = document.getElementById("project-modal");
if (modalNode) {
  const titleNode = document.getElementById("project-modal-title");
  const summaryNode = document.getElementById("project-modal-summary");
  const linksNode = document.getElementById("project-modal-links");
  const pointsNode = document.getElementById("project-modal-points");
  const mediaNode = document.getElementById("project-modal-images");
  const closeNode = document.getElementById("modal-close");
  const cards = document.querySelectorAll(".project-card[data-project]");

  const closeModal = () => {
    modalNode.classList.remove("open");
    modalNode.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const createMediaPlaceholder = (label) => {
    const placeholder = document.createElement("div");
    placeholder.className = "modal-placeholder";
    placeholder.textContent = label;
    return placeholder;
  };

  const buildMediaFigure = (item) => {
    const figure = document.createElement("figure");
    figure.className = "modal-shot";

    let mediaElement;
    if (item.type === "video" && item.embedUrl) {
      const frame = document.createElement("iframe");
      frame.src = item.embedUrl;
      frame.title = item.alt || item.caption || "Project video";
      frame.loading = "lazy";
      frame.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      frame.allowFullscreen = true;
      mediaElement = frame;
    } else if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      if (item.poster) {
        video.poster = item.poster;
      }
      video.addEventListener("error", () => {
        video.replaceWith(createMediaPlaceholder(`Add video: ${item.src}`));
      });
      mediaElement = video;
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      img.loading = "lazy";
      img.addEventListener("error", () => {
        img.replaceWith(createMediaPlaceholder(`Add image: ${item.src}`));
      });
      mediaElement = img;
    }

    const caption = document.createElement("figcaption");
    caption.textContent = item.caption || "";

    figure.append(mediaElement, caption);
    return figure;
  };

  const openModal = (projectId) => {
    const project = projectData[projectId];
    if (!project) return;

    titleNode.textContent = project.title;
    summaryNode.textContent = project.cardSummary;

    linksNode.innerHTML = "";
    (project.links || []).forEach((link) => {
      const a = document.createElement("a");
      a.className = "project-link";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label;
      linksNode.appendChild(a);
    });

    pointsNode.innerHTML = "";
    project.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      pointsNode.appendChild(li);
    });

    mediaNode.innerHTML = "";
    (project.media || []).forEach((item) => {
      mediaNode.appendChild(buildMediaFigure(item));
    });

    modalNode.classList.add("open");
    modalNode.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  cards.forEach((card) => {
    const projectId = card.getAttribute("data-project");

    card.addEventListener("click", () => {
      openModal(projectId);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(projectId);
      }
    });
  });

  closeNode.addEventListener("click", closeModal);

  modalNode.addEventListener("click", (event) => {
    if (event.target === modalNode) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalNode.classList.contains("open")) {
      closeModal();
    }
  });
}
