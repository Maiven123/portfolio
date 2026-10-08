/* ===== EDIT HERE: your links ===== */
const LINKS = { 
  github: "https://github.com/Maiven123", 
  linkedin: "https://www.linkedin.com/in/maiven-shenoda/", 
  email: "mailto:shenodamaiven246@gmail.com" 
};
/* ===== المسار المهني ===== */
const JOURNEY = [
  "Computer Science",
  "Programming Foundations",
  "Frontend Development",
  "IoT / Embedded Systems",
  "AI / Generative AI",
  "Data Analysis",
  "Data Engineering",
  "Data Engineering & AI"
];

/* ===== المهارات التقنية ===== */
const SKILLS = {
  "Data Engineering & Data": ["SQL (fundamentals)", "Python (Basic)", "Data Analysis (fundamentals)", "Data Engineering (fundamentals)"],
  "AI": ["Generative AI", "Basic Machine Learning"],
  "Development": ["HTML", "CSS", "JavaScript", "React", "Responsive Web Design", "Web Accessibility", "C++", "C#", "Git", "GitHub", "VS Code"],
  "IoT / Embedded": ["ESP32", "MicroPython", "MQTT", "Node-RED", "Sensors & Actuators", "Wokwi"],
  "Engineering Foundations": ["Data Structures", "Algorithms", "Problem Solving", "Teamwork", "Communication", "Creativity", "Adaptability"]
};

/* ===== المشاريع بالتفصيل الكامل ===== */
const PROJECTS = [
  { 
    tag: "DATA", 
    cat: "Data / Database / Data Engineering Foundation", 
    title: "Restaurant Database Project", 
    badge: "MY FIRST STEP INTO DATA ENGINEERING",
    sub: "A relational database project designed to model restaurant operations, relationships, and data workflows using structured database design and SQL.",
    flow: ["Business Requirements", "Data Model", "Database", "SQL", "Data Insights"],
    images: ["assets/images/restaurant-erd.png"],
    idea: "Build a structured relational database system representing core restaurant operations, handling transactions, and providing analytical query capabilities.",
    problem: "Restaurant operations involve multiple connected entities and transactions. Without a structured data model, managing relationships between customers, reservations, tables, and orders becomes difficult and error-prone.",
    solution: "Designed a relational database structure based on business requirements, defined relationships between entities, and used SQL to work with, normalize, and query operational data.",
    role: "Analyzed requirements, designed the complete ER diagram, wrote SQL DDL/DML scripts, and documented the database schema.",
    tech: ["SQL", "Relational Database", "Database Design", "ERD", "SQL Queries"], 
    features: [
      "Relational Data Modeling & 3NF Schema",
      "Table Relationships, Primary & Foreign Keys",
      "Normalized Tables for Orders, Menus & Staff",
      "Analytical SQL Queries for Operational Insights"
    ],
    learned: "This project was an important first step toward Data Engineering. It helped me understand how real-world requirements translate into structured data models.",
    note: "This is where my Data Engineering journey started." 
  },
  { 
    tag: "ASSISTIVE IoT", 
    cat: "IoT / Assistive Technology (AAC)", 
    title: "VoiceBridge", 
    badge: "SMART AAC BUTTONS & REAL-TIME DASHBOARD",
    sub: "An assistive IoT communication system enabling non-verbal individuals to express immediate needs using smart push-buttons and a live monitoring dashboard.",
    flow: ["Smart Push-Buttons", "ESP32 (MicroPython)", "MQTT Broker", "Node-RED Dashboard", "Live Alerts & Audio Feedback"],
    images: ["assets/images/voicebridge-main.png", "assets/images/voicebridge-dashboard.png"],
    idea: "Create a reliable, hardware-assisted AAC (Augmentative and Alternative Communication) system that bridges the gap between individuals with speech impairments and their caregivers in real time.",
    problem: "Traditional communication boards lack remote reach, and purely software-based solutions can be difficult to access during emergencies or for individuals with motor challenges who need immediate tactile responses.",
    solution: "Developed an IoT prototype using ESP32 with debounced tactile buttons representing vital daily needs. Signals are transmitted wirelessly via MQTT to a responsive Node-RED dashboard that alerts caregivers instantly with visual and audio cues.",
    role: "Programmed the ESP32 in MicroPython, wired the circuit with pull-down debouncing and LED status indicators, configured the MQTT publisher/subscriber network, and built the live Node-RED telemetry and notification dashboard.",
    tech: ["ESP32", "MicroPython", "MQTT Protocol", "Node-RED Dashboard", "Tactile Push Buttons", "LED Indicators", "IoT Architecture", "Wokwi"],
    features: [
      "Debounced tactile button inputs for instant physical response",
      "Wireless lightweight telemetry messaging via MQTT",
      "Live interactive caregiver monitoring dashboard in Node-RED",
      "Visual and auditory alert triggers upon user selection",
      "Low-latency communication designed for accessibility"
    ],
    learned: "VoiceBridge proved how embedded systems and IoT networking protocols can be harnessed to solve critical human-centered accessibility challenges." 
  },
  { 
    tag: "AAC / WEB", 
    cat: "Assistive Technology / Child Communication", 
    title: "SpeakUp", 
    badge: "AAC WEB INTERACTION PROTOTYPE",
    sub: "A touch-friendly AAC web interface designed for non-verbal children to communicate everyday needs, feelings, and social interactions through intuitive visuals and audio cues.",
    flow: ["Select Category", "Choose Need / Emotion", "Visual & Audio Output", "Direct Communication"],
    images: ["assets/images/speakup-main.png"],
    idea: "Develop an accessible, high-contrast AAC web application tailored for tablets and touch devices, allowing speech-impaired children to communicate intuitively without cognitive overload.",
    problem: "Children with speech delays or non-verbal conditions face immense frustration when unable to express immediate physiological needs or emotions quickly.",
    solution: "Engineered a card-based interactive communicator featuring clean categorization (Needs, Feelings, Social, Play) with instant speech synthesis feedback.",
    role: "Designed the child-friendly UI/UX architecture, implemented touch interactions, accessibility states, and integrated speech synthesis for instant audio playback.",
    tech: ["HTML5", "CSS3 / Modern Layouts", "JavaScript (ES6)", "Web Speech API", "Accessibility (a11y)"],
    features: [
      "Structured categories (Needs, Feelings, Social, Play)",
      "High-contrast, friendly visual cards for children",
      "One-tap audio synthesis feedback",
      "Responsive, tablet-optimized touch interface"
    ],
    learned: "Emphasized human-centered engineering: how minimalist design, accessibility standards, and intuitive interactions directly solve sensitive communication barriers." 
  },
  { 
    tag: "IoT", 
    cat: "IoT / Intelligent Systems", 
    title: "GuardianX", 
    badge: "SMART SECURITY & AUTOMATION",
    sub: "IoT Smart Home Security & Automation Prototype",
    flow: ["Sensors", "ESP32", "MQTT", "Node-RED", "Dashboard / Automated Alerts"],
    images: ["assets/images/guardianx-main.png", "assets/images/guardianx-dashboard.png"],
    idea: "Build a connected system capable of detecting environmental and security hazards and providing actionable feedback through an interactive monitoring layer.",
    problem: "Monitoring systems can become fragmented when sensing, processing, communication, and feedback are handled separately, resulting in missed emergencies.",
    solution: "GuardianX connects sensors and physical components to an ESP32, communicates telemetry via MQTT, and utilizes a Node-RED dashboard to visualize environmental parameters and trigger automated responses.",
    role: "Developed the IoT prototype with ESP32 and sensors, integrated MQTT and Node-RED for real-time monitoring and automated responses, and validated the system through Wokwi simulation.",
    tech: ["ESP32", "MQ-2 Gas/Smoke Sensor", "PIR Motion Sensor", "4x4 Keypad", "16x2 I2C LCD", "MQTT", "Node-RED", "Wokwi", "Buzzer", "LEDs", "Relay", "Servo"],
    features: [
      "Motion detection via PIR sensor",
      "Gas and smoke leak monitoring with MQ-2",
      "Keypad authorization & LCD status display",
      "Automated alarm feedback via buzzer and relay",
      "Real-time Node-RED telemetry dashboard"
    ],
    learned: "GuardianX strengthened my understanding of how hardware, communication protocols, telemetry data, and user dashboards work seamlessly together." 
  },
  { 
    tag: "SYSTEM ANALYSIS", 
    cat: "Software Engineering / System Analysis", 
    title: "Online Blood Bank Project",
    badge: "SOFTWARE ARCHITECTURE & MODELING",
    sub: "A software engineering project focused on analyzing, modeling, and documenting the complete architecture of an online blood bank system.",
    flow: ["Requirements Analysis", "Use Case Modeling", "System Architecture", "UML Diagrams", "Technical Documentation"],
    images: ["assets/images/blood-bank-main.png", "assets/images/blood-bank-uml.png"],
    idea: "Model an organized, dependable web system connecting voluntary blood donors with patients and healthcare institutions in urgent need.",
    problem: "Blood banks often face coordination bottlenecks during emergencies due to fragmented records and lack of structured donor-matching workflows.",
    solution: "Analyzed end-to-end system requirements and created structured architectural blueprints including Use Case, Sequence, and Class diagrams to ensure system reliability.",
    role: "Worked extensively on requirements analysis, system modeling, UML design, and project documentation.",
    tech: ["Requirements Analysis", "Use Case Diagram", "Sequence Diagram", "Class Diagram", "System Documentation", "Software Architecture"],
    features: [
      "Comprehensive functional & non-functional specifications",
      "Detailed UML behavioral and structural diagrams",
      "Donor-recipient matching workflow architecture",
      "Complete technical system documentation"
    ],
    learned: "This project reinforced the discipline of planning and structuring system logic thoroughly before building code." 
  }
];

PROJECTS.forEach(p => p.links = { github: "", demo: "", qr: "" });

/* ===== التدريب ===== */
const TRAINING = [
  { title: "DEPI — AI & Data Science – Microsoft Data Engineer", details: "Data engineering track.", ongoing: true },
  { title: "eYouth — Data Analysis Course", details: "Data analysis fundamentals.", ongoing: true },
  { title: "NTI — IoT Summer Training 2026", details: "Completed with 97.5% (Top 5 Participants)." },
  { title: "ITI — Introduction to Programming using C++ & Data Structures and Algorithms", details: "" },
  { title: "ITI — Frontend Web Development (MERN Stack)", details: "" },
  { title: "Build with AI: Masr Edition — Google & ITI", details: "AI technologies and Google Cloud Platform." },
  { title: "GDG Minia — AI & ML Training", details: "Practical AI concepts." },
  { title: "Generative AI Fundamentals — Ministry of Communications (Egypt)", details: "" },
  { title: "ITIDA x GIGS", details: "Freelancing skills and client communication." }
].map(t => ({ date: "", ...t }));

/* ===== الشهادات ===== */
const CERTS = [{ title: "[Certificate title]", issuer: "[Issuer]", date: "[Date]", result: "", link: "" }];

/* ===== بناء عناصر الصفحة (DOM Rendering) ===== */
const $ = (s, r = document) => r.querySelector(s), 
      esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const li = a => a.map(x => `<li>${esc(x)}</li>`).join("");
const btn = (label, url) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${label}</a>` : `<a href="#" data-ph="1" title="Add link in script.js">${label}</a>`;

$("#timeline").innerHTML = JOURNEY.map((j, i) => i === JOURNEY.length - 1 ? `<li class="now">${j}<small>Current Focus: Data Engineering & AI</small></li>` : `<li>${j}</li>`).join("");
$("#skills-grid").innerHTML = Object.entries(SKILLS).map(([k, v]) => `<article class="panel"><h3>${k}</h3><div class="tags">${v.map(t => `<span class="tag">${t}</span>`).join("")}</div></article>`).join("");

const sec = (t, v) => v ? `<div><b>${t}</b><p>${esc(v)}</p></div>` : "";

$("#project-list").innerHTML = PROJECTS.map((p, n) => `
 <div class="step" aria-hidden="true">${String(n + 1).padStart(2, "0")} · ${esc(p.title)} · ${esc(p.tag)}</div>
 <article class="project">
  <div class="media">
    ${p.images.map((src, i) => `
      <div class="frame">
        <img src="${src}" alt="${esc(p.title)} preview ${i + 1}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x375/131E33/4F8CC9?text=${encodeURIComponent(p.title)}';">
      </div>
    `).join("")}
  </div>
  <div class="project-info">
    <span class="num">${String(n + 1).padStart(2, "0")}</span>
    <span class="pcat">${esc(p.cat)}</span>
    <h3>${esc(p.title)}</h3>
    ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ""}
    <p class="sub">${esc(p.sub)}</p>
    
    ${p.flow ? `<div class="flowline">${p.flow.map(f => `<span>${esc(f)}</span>`).join("")}</div>` : ""}
    
    <div class="facts">
      ${sec("The Idea", p.idea)}
      ${sec("The Problem", p.problem)}
      ${sec("The Solution", p.solution)}
      ${sec("My Role", p.role)}
      <div><b>Key Features</b><ul>${li(p.features)}</ul></div>
      ${sec("What I Learned", p.learned)}
      ${p.note ? `<p><strong>${esc(p.note)}</strong></p>` : ""}
    </div>
    
    <div class="tags">${p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="plinks">
      ${btn("GitHub", p.links.github)}
      ${btn("Live Demo", p.links.demo)}
    </div>
  </div>
 </article>
`).join("");

$("#training-list").innerHTML = TRAINING.map(t => `<article class="card"><h3>${esc(t.title)}</h3>${t.date ? `<small>${esc(t.date)}</small>` : ""}<p>${esc(t.details)}</p>${t.ongoing ? '<span class="ongoing">ONGOING</span>' : ""}</article>`).join("");
$("#cert-list").innerHTML = CERTS.map(c => `<article class="card"><h3>${esc(c.title)}</h3><small>${esc(c.issuer)} · ${esc(c.date)}</small>${c.result ? `<p><strong>${esc(c.result)}</strong></p>` : ""}<p>${c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">Credential Link</a>` : "Credential Link"}</p></article>`).join("");

/* Hero animation nodes */
$(".nodes").innerHTML = ["DATA", "PROCESS", "INTELLIGENCE", "SOLUTION"].map((t, i) => `<circle cx="160" cy="${70 + i * 93}" r="9"/><text x="182" y="${75 + i * 93}">${t}</text>`).join("") + '<circle class="p" cx="160" cy="70" r="3"/><circle class="p" cx="160" cy="70" r="3" style="animation-delay:-1.5s"/>';

/* Lightbox functionality */
const lb = $("#lb"), lbImg = $("img", lb);
document.querySelectorAll(".frame img").forEach(img => {
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lb.hidden = false;
  });
});
if (lb) {
  lb.addEventListener("click", () => lb.hidden = true);
  addEventListener("keydown", e => e.key === "Escape" && (lb.hidden = true));
}

/* Nav & Scroll */
const nav = $("#nav"), topBtn = $("#top"), menu = $("#menu"), burger = $("#burger");
addEventListener("scroll", () => { 
  nav.classList.toggle("scrolled", scrollY > 40); 
  topBtn.classList.toggle("show", scrollY > 600); 
}, { passive: true });
topBtn.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.addEventListener("click", e => e.target.tagName === "A" && (menu.classList.remove("open"), burger.setAttribute("aria-expanded", false)));

$("#yr").textContent = new Date().getFullYear();