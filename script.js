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
    title: "Penn Aerial Robotics",
    summary:
      "Power and Thrust Management Electrical Lead with prior service as an Electrical Subteam Member.",
    points: [
      "Lead design and integration of batteries, motors, and power management systems.",
      "Support testing and competition readiness for SAE Aero Design Micro, Regular, and Advanced class planes.",
      "Coordinate electrical implementation across team subsystems and testing cycles."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeremy-c-upenn28" }
    ],
    images: [
      {
        src: "assets/projects/penn-aerial-robotics-1.jpg",
        alt: "Penn Aerial Robotics aircraft and electronics",
        caption: "Power system integration setup"
      },
      {
        src: "assets/projects/penn-aerial-robotics-2.jpg",
        alt: "Penn Aerial Robotics testing session",
        caption: "Testing and validation workflow"
      }
    ]
  },
  "grade-analytics-dashboard": {
    title: "Science Olympiad at UPenn",
    summary:
      "Builds Director and former Air Trajectory Event Supervisor for one of the largest college-run invitationals in the US.",
    points: [
      "Facilitate build events for 1,000+ students and 72 high school teams.",
      "Coordinate event structure, logistics, and judging standards.",
      "Support hands-on STEM competition experiences at scale."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeremy-c-upenn28" }
    ],
    images: [
      {
        src: "assets/projects/science-olympiad-1.jpg",
        alt: "Science Olympiad build event",
        caption: "Build event coordination"
      },
      {
        src: "assets/projects/science-olympiad-2.jpg",
        alt: "Science Olympiad student teams",
        caption: "Invitational event operations"
      }
    ]
  },
  "smart-greenhouse-monitor": {
    title: "RWTH Aachen Robotics Research",
    summary:
      "Robotics Research Intern at ITA Institut fur Textiltechnik der RWTH Aachen University.",
    points: [
      "Engineered an 8-actuator 'octopus controller' for automated carbon fiber layup.",
      "Built and integrated the control system for repeatable actuation workflows.",
      "Presented outcomes at the UROP International Research Symposium."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeremy-c-upenn28" }
    ],
    images: [
      {
        src: "assets/projects/rwth-aachen-1.jpg",
        alt: "Robotics research setup in Aachen",
        caption: "Actuator system prototype"
      },
      {
        src: "assets/projects/rwth-aachen-2.jpg",
        alt: "Carbon fiber layup automation test",
        caption: "Automated layup demonstration"
      }
    ]
  },
  "portfolio-site": {
    title: "Johns Hopkins APL ASPIRE Robotics",
    summary:
      "Robotics intern experience with autonomous systems, simulation, and applied computer vision.",
    points: [
      "Designed a SolidWorks assembly for a Clearpath Jackal-based autonomous grasping system.",
      "Developed an image detection model in Roboflow for Coke can detection with 90% accuracy.",
      "Worked with ROS and Unity for autonomous navigation simulation and presented at IEEE ISEC and expos."
    ],
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jeremy-c-upenn28" }
    ],
    images: [
      {
        src: "assets/projects/jhu-apl-1.jpg",
        alt: "Autonomous robotics platform",
        caption: "Clearpath Jackal system design"
      },
      {
        src: "assets/projects/jhu-apl-2.jpg",
        alt: "Simulation and computer vision workflow",
        caption: "ROS, Unity, and computer vision workflow"
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
