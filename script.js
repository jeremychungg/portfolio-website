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

const projectData = {
  "campus-event-finder": {
    title: "ServeSense",
    summary:
      "I built an embedded ML device that acts like a real-time tennis serve coach.",
    points: [
      "Used ESP32-S3 + TensorFlow to classify serves in real time with 98.25% accuracy.",
      "Integrated a 6-axis IMU, BLE communication, and haptic feedback in one device.",
      "Designed it to give immediate guidance right after each serve."
    ],
    links: [
      { label: "GitHub", url: "https://github.com/your-username/servesense" }
    ],
    images: [
      {
        src: "assets/projects/servesense-1.jpg",
        alt: "ServeSense prototype hardware",
        caption: "ServeSense hardware prototype"
      },
      {
        src: "assets/projects/servesense-2.jpg",
        alt: "ServeSense testing workflow",
        caption: "Real-time serve classification testing"
      }
    ]
  },
  "grade-analytics-dashboard": {
    title: "Imitation Learning Robot System",
    summary:
      "LeRobot Worldwide Hackathon project focused on imitation learning for robotic block picking.",
    points: [
      "Trained open-source SmolVLM using PyTorch and NVIDIA CUDA Toolkit.",
      "Built a leader-follower setup where the follower learned to detect and grasp colored blocks.",
      "Shipped a working autonomous grasping demo during hackathon constraints."
    ],
    links: [
      { label: "Project Overview", url: "https://github.com/your-username/imitation-learning-robot-system" }
    ],
    images: [
      {
        src: "assets/projects/imitation-robot-1.jpg",
        alt: "Leader follower robot setup",
        caption: "Leader-follower robot system"
      },
      {
        src: "assets/projects/imitation-robot-2.jpg",
        alt: "Robot grasping colored blocks",
        caption: "Autonomous block detection and grasping"
      }
    ]
  },
  "smart-greenhouse-monitor": {
    title: "Haptic Bicycle Navigation System",
    summary:
      "An ESP32 bike navigation build that replaces constant phone-checking with haptic cues.",
    points: [
      "Integrated Google Maps API routing with an LED matrix and vibrating handlebars.",
      "Delivered real-time turn-by-turn feedback through lights and haptics.",
      "Designed it to reduce rider reliance on phone screens while biking."
    ],
    links: [
      { label: "Demo Notes", url: "https://github.com/your-username/haptic-bike-navigation" }
    ],
    images: [
      {
        src: "assets/projects/bike-nav-1.jpg",
        alt: "Bike navigation hardware",
        caption: "Handlebar haptics + LED display setup"
      },
      {
        src: "assets/projects/bike-nav-2.jpg",
        alt: "Navigation feedback in testing",
        caption: "Turn guidance testing session"
      }
    ]
  },
  "portfolio-site": {
    title: "Music Synthesizer",
    summary:
      "Custom PCB synth project from circuit design all the way to assembled and tested hardware.",
    points: [
      "Created detailed schematics and optimized board layout in Altium.",
      "Assembled the board via reflow soldering.",
      "Ran lead continuity and reliability checks to validate final hardware."
    ],
    links: [
      { label: "Build Log", url: "https://github.com/your-username/music-synthesizer" }
    ],
    images: [
      {
        src: "assets/projects/music-synth-1.jpg",
        alt: "Music synthesizer PCB board",
        caption: "Custom synthesizer PCB"
      },
      {
        src: "assets/projects/music-synth-2.jpg",
        alt: "Assembled synthesizer hardware",
        caption: "Assembled board after reflow + testing"
      }
    ]
  }
};

const modalNode = document.getElementById("project-modal");
if (modalNode) {
  const titleNode = document.getElementById("project-modal-title");
  const summaryNode = document.getElementById("project-modal-summary");
  const linksNode = document.getElementById("project-modal-links");
  const pointsNode = document.getElementById("project-modal-points");
  const imagesNode = document.getElementById("project-modal-images");
  const closeNode = document.getElementById("modal-close");
  const cards = document.querySelectorAll(".project-card[data-project]");

  const closeModal = () => {
    modalNode.classList.remove("open");
    modalNode.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const buildImageFigure = (image) => {
    const figure = document.createElement("figure");
    figure.className = "modal-shot";

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";

    img.addEventListener("error", () => {
      const placeholder = document.createElement("div");
      placeholder.className = "modal-placeholder";
      placeholder.textContent = `Add image: ${image.src}`;
      img.replaceWith(placeholder);
    });

    const caption = document.createElement("figcaption");
    caption.textContent = image.caption;

    figure.append(img, caption);
    return figure;
  };

  const openModal = (projectId) => {
    const project = projectData[projectId];
    if (!project) return;

    titleNode.textContent = project.title;
    summaryNode.textContent = project.summary;

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

    imagesNode.innerHTML = "";
    project.images.forEach((image) => {
      imagesNode.appendChild(buildImageFigure(image));
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
