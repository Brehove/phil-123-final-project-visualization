const stats = [
  { value: "9", label: "modules from research to delivery" },
  { value: "2", label: "possible pathways" },
  { value: "6", label: "major milestone checkpoints" },
  { value: "330", label: "points tied to the full arc" },
];

const modules = [
  {
    module: 8,
    phase: "Discover",
    phaseKey: "discover",
    title: "Big Data + Algorithmic Bias",
    deliverable: "Zone 1 Deep Research Report",
    copy:
      "Students begin by investigating how data collection, classification, and optimization choices produce uneven consequences in the real world.",
    work:
      "Research one ethics zone deeply, gather evidence, and start identifying who benefits, who is harmed, and where design decisions matter most.",
    why:
      "This opening phase prevents shallow solutionism by making students sit inside a live ethical landscape before they propose interventions.",
    tags: ["research", "bias", "stakeholders"],
    accent: "#0f7b82",
  },
  {
    module: 9,
    phase: "Discover",
    phaseKey: "discover",
    title: "Automation + Robotics",
    deliverable: "Zone 2 Deep Research Report",
    copy:
      "The project widens into questions about labor, efficiency, autonomy, and what humans lose or gain when systems take over more decisions.",
    work:
      "Compare how automation restructures work, responsibility, and trust in a specific context students care about.",
    why:
      "Students learn that AI ethics is not only about models and outputs. It is also about institutional design and redistributed human agency.",
    tags: ["automation", "labor", "tradeoffs"],
    accent: "#0f7b82",
  },
  {
    module: 10,
    phase: "Discover",
    phaseKey: "discover",
    title: "Creativity + Innovation",
    deliverable: "Zone 3 Deep Research Report + Synthesis",
    copy:
      "By the end of research, students have explored three distinct AI ethics zones and have enough contrast to synthesize what problem actually matters to them.",
    work:
      "Complete the third research report, then pull patterns across all three zones to identify a problem worth carrying into the rest of the semester.",
    why:
      "This is where curiosity turns into direction. Students stop collecting topics and start choosing a problem space.",
    tags: ["synthesis", "pattern finding", "direction"],
    accent: "#0f7b82",
  },
  {
    module: 11,
    phase: "Define",
    phaseKey: "define",
    title: "Problem Brief + Pathway Declaration",
    deliverable: "Problem Brief",
    copy:
      "The broad field narrows. Students define a specific problem, identify a target audience, name real needs, and decide which pathway matches the kind of intervention they want to make.",
    work:
      "Write a context summary, problem statement, target audience, audience needs, success criteria, and pathway declaration.",
    why:
      "A clear problem brief is the project hinge. Without it, every later design decision becomes vague or decorative.",
    tags: ["problem framing", "audience", "success criteria"],
    accent: "#d59837",
  },
  {
    module: 12,
    phase: "Develop",
    phaseKey: "develop",
    title: "Concept Explore to Commit",
    deliverable: "Concept Document",
    copy:
      "Students open back up, generate multiple possible responses to the problem, and then defend the concept they choose to carry forward.",
    work:
      "Develop two to three viable concepts, compare strengths and weaknesses, align the best one with audience needs and values, and commit.",
    why:
      "This stage shows that ethical design is comparative. Students are not just coming up with one idea. They are learning to justify why one route is better.",
    tags: ["brainstorming", "comparison", "commitment"],
    accent: "#d59837",
  },
  {
    module: 13,
    phase: "Spec",
    phaseKey: "spec",
    title: "Project Spec",
    deliverable: "Detailed Plan",
    copy:
      "Now the project becomes buildable. Students convert values into structure by outlining what they will make, who it serves, what it requires, and where it could fail.",
    work:
      "Create a detailed outline, explain design decisions, analyze stakeholders, map a timeline, and prepare contingencies.",
    why:
      "Specification is where the course asks students to prove they can connect philosophical reasoning to project architecture.",
    tags: ["scope", "stakeholders", "risk"],
    accent: "#d59837",
  },
  {
    module: 14,
    phase: "Draft",
    phaseKey: "draft",
    title: "First Draft + Self-Assessment",
    deliverable: "Working Draft",
    copy:
      "Students finally build in earnest. The draft is not a sketchy placeholder. It is a functioning version of the chosen artifact plus a self-assessment against success criteria.",
    work:
      "Produce a complete draft, evaluate it honestly, and ask peers targeted questions that will improve the next revision.",
    why:
      "Drafting moves the project from planning into consequences. Students see what their design decisions actually produce.",
    tags: ["making", "self-assessment", "feedback prep"],
    accent: "#c8644d",
  },
  {
    module: 15,
    phase: "Draft",
    phaseKey: "draft",
    title: "Peer Review + Revised Draft",
    deliverable: "Revision Notes + Updated Draft",
    copy:
      "The project becomes collaborative. Students review peers, receive critique, and use that response to sharpen clarity, audience fit, and practical usefulness.",
    work:
      "Complete peer reviews, document what changed and why, and submit an improved draft that shows real revision rather than superficial cleanup.",
    why:
      "Revision is where students demonstrate intellectual flexibility and ethical seriousness. Feedback should change the artifact.",
    tags: ["peer review", "revision", "iteration"],
    accent: "#c8644d",
  },
  {
    module: 16,
    phase: "Deliver",
    phaseKey: "deliver",
    title: "Final Artifact + Project Documentation",
    deliverable: "Final Submission",
    copy:
      "Students cross the finish line with a polished artifact and a reflective account that makes their choices, frameworks, and AI collaboration visible to others.",
    work:
      "Submit the final artifact in the format that fits the project and pair it with documentation written for a general audience.",
    why:
      "The capstone ends with public legibility. Students do not just make something. They explain why it matters and how they built it.",
    tags: ["publication", "reflection", "ethics in practice"],
    accent: "#c8644d",
  },
];

const phaseTrack = [
  { key: "discover", label: "Discover", range: "8-10" },
  { key: "define", label: "Define", range: "11" },
  { key: "develop", label: "Develop", range: "12" },
  { key: "spec", label: "Spec", range: "13" },
  { key: "draft", label: "Draft + Revise", range: "14-15" },
  { key: "deliver", label: "Deliver", range: "16" },
];

const pathways = {
  builder: {
    kicker: "Pathway A",
    title: "Philosopher-Builder",
    copy:
      "Students create a concrete intervention: a tool, curriculum, event, framework, guide, or system that responds to a researched AI-related need.",
    best:
      "Students who want to design something usable, testable, or directly implementable in a field or community they care about.",
    artifacts: [
      "Interactive product website",
      "Portable campus installation",
      "Physical creator toolkit",
      "Prototype service or venture concept",
      "Launch-ready user experience mockups",
    ],
    example:
      "A first-year student notices how often friends repost suspicious content, builds a tool around that behavior, and starts thinking like a founder instead of just a commentator.",
    cardA: {
      title: "Venture Direction",
      text: "Start with a real student-facing problem, then shape the response like a launchable product, service, or physical intervention.",
    },
    cardB: {
      title: "Ethics in the Product",
      text: "Trust, consent, human judgment, and design tradeoffs get built directly into the experience instead of being left in the reflection alone.",
    },
    galleryTitle: "Three builder directions with startup energy",
    galleryCopy:
      "These examples read less like assignments and more like early ventures: one website, one physical activation, and one physical toolkit.",
    examples: [
      {
        badge: "Builder Example 01",
        format: "Interactive website",
        output: "Student tool",
        title: "SourceCheck",
        audience: "Students who live on social feeds",
        challenge: "How do students decide whether a meme, clip, or post is AI-generated before they repost it?",
        summary:
          "A student could prototype a website where users drop in a screenshot, image, or clip and get a quick trust recommendation before reposting it.",
        problem:
          "First-year students move fast online and rarely have a lightweight way to check suspicious media before amplifying it.",
        deliverable:
          "A branded product site with an upload flow, trust recommendation screen, provenance cues, and a simple account dashboard.",
        fit:
          "This feels entrepreneurial because it is a user-facing product with a clear problem, a sticky behavior loop, and an obvious adoption story.",
        parts: [
          "Landing page and core pitch",
          "Upload and scan flow",
          "Trust recommendation screen",
          "Saved check history",
        ],
        preview: {
          kicker: "Consumer-facing product",
          title: "SourceCheck",
          summary: "A student trust layer for viral media and repost culture",
          panels: ["Upload flow", "Risk result", "History view"],
          footer: "Built like an early-stage product website",
        },
        image: "images/sourcecheck.svg",
        imageAlt: "Illustration of the SourceCheck website analyzing social media posts",
      },
      {
        badge: "Builder Example 02",
        format: "Portable installation",
        output: "Campus activation",
        title: "Signal Booth",
        audience: "Orientation-week students and campus event crowds",
        challenge: "Can students actually tell the difference between real and AI-generated media when they are put on the spot?",
        summary:
          "A student could design a branded pop-up booth where people test themselves on real versus synthetic media, then leave with a score and a takeaway card.",
        problem:
          "Students know deepfakes are a problem, but most have never experienced a hands-on challenge that makes the issue feel immediate.",
        deliverable:
          "A booth concept with physical signage, challenge stations, scorecards, takeaway cards, and a repeatable campus event setup.",
        fit:
          "This has startup energy because it could be piloted at one event, refined, then licensed or sold as a campus activation package.",
        parts: [
          "Branded booth shell",
          "Challenge prompts and media cards",
          "Scorecard and takeaway card",
          "Setup plan for campus events",
        ],
        preview: {
          kicker: "Physical startup concept",
          title: "Signal Booth",
          summary: "A portable challenge experience about trust, media, and AI fakery",
          panels: ["Booth shell", "Challenge station", "Takeaway card"],
          footer: "Designed like a launchable campus activation",
        },
        image: "images/signal-booth.svg",
        imageAlt: "Illustration of a portable Signal Booth installation at a campus event",
      },
      {
        badge: "Builder Example 03",
        format: "Physical toolkit",
        output: "Creator product",
        title: "Creator Rights Kit",
        audience: "Student artists, musicians, photographers, and club organizers",
        challenge: "How do student creators signal consent, credit, and AI-use boundaries in physical campus spaces?",
        summary:
          "A student could design a boxed kit for campus creators that helps them mark how their work can be used, remixed, or protected in an AI-saturated environment.",
        problem:
          "Student creators often share work publicly without clear signals around consent, credit, or AI reuse, especially at live events and campus markets.",
        deliverable:
          "A physical kit with consent stickers, QR claim tags, creator placards, and table signage for art shows, concerts, and club booths.",
        fit:
          "This works because it feels like a product someone could package, sell, and use right away in creator culture on campus.",
        parts: [
          "Consent stickers",
          "QR claim tags",
          "Creator placards",
          "Event signage set",
        ],
        preview: {
          kicker: "Physical creator product",
          title: "Creator Rights Kit",
          summary: "A ready-to-use package for campus artists and organizers",
          panels: ["Sticker pack", "QR tags", "Table placards"],
          footer: "Built like something you could actually order or stock",
        },
        image: "images/creator-rights-kit.svg",
        imageAlt: "Illustration of the Creator Rights Kit with stickers, tags, and signage",
      },
    ],
  },
  public: {
    kicker: "Pathway B",
    title: "Public Philosophy",
    copy:
      "Students produce public-facing content that helps a broader audience understand, debate, or act on an AI ethics issue.",
    best:
      "Students who want to educate, advocate, persuade, or translate complex ethical issues into accessible media.",
    artifacts: [
      "Podcast or video series",
      "Interactive website or campaign",
      "Zine, discussion guide, or media kit",
      "Public education materials",
      "Audience-focused advocacy content",
    ],
    example:
      "Jordan sees younger students falling for AI-generated misinformation and creates an accessible podcast series that makes media literacy concrete rather than preachy.",
    cardA: {
      title: "Public Reach",
      text: "The artifact is built to travel: it should teach, persuade, or provoke thought beyond the classroom.",
    },
    cardB: {
      title: "Ethics in Translation",
      text: "Students practice turning difficult ideas into language, format, and tone that real audiences can absorb.",
    },
    galleryTitle: "Three concrete public philosophy directions",
    galleryCopy:
      "These examples lean toward translation, persuasion, and public-facing clarity rather than institutional implementation.",
    examples: [
      {
        badge: "Public Example 01",
        format: "Podcast mini-series",
        output: "Public education",
        title: "Can You Trust This?",
        audience: "High school students and teachers",
        challenge: "How do teenagers spot AI-generated misinformation without being lectured at?",
        summary:
          "A student could produce a two-episode podcast mini-series that explains AI misinformation through stories, interviews, and practical detection habits.",
        problem:
          "Teens are surrounded by AI-generated media but rarely get engaging resources that make credibility checks feel relevant.",
        deliverable:
          "A short podcast series with transcripts, show notes, and a teacher discussion guide.",
        fit:
          "This is public philosophy because the central work is explaining a complex ethical issue in a compelling, accessible public medium.",
        parts: [
          "Episode scripts",
          "Recorded interviews",
          "Transcript excerpts",
          "Teacher discussion guide",
        ],
        preview: {
          kicker: "Audience-facing media",
          title: "Can You Trust This?",
          summary: "Two episodes on AI fakery, trust, and everyday media literacy",
          panels: ["Episode 1", "Transcript", "Teacher guide"],
          footer: "Built to circulate beyond the classroom",
        },
        image: "images/public-podcast.svg",
        imageAlt: "Illustration of a podcast setup for the Can You Trust This public philosophy project",
      },
      {
        badge: "Public Example 02",
        format: "Interactive website",
        output: "Explainer experience",
        title: "Deepfake Survival Guide",
        audience: "General online audiences",
        challenge: "How do ordinary people learn what deepfakes are without drowning in jargon or fear?",
        summary:
          "A student could create a scroll-based site that teaches how deepfakes work, why they matter, and what habits reduce manipulation.",
        problem:
          "Public conversations about deepfakes are often sensational, abstract, or too technical for everyday readers.",
        deliverable:
          "An interactive explainer site with visual examples, myth-versus-reality sections, and action-oriented takeaways.",
        fit:
          "The artifact succeeds by public communication, not by becoming an operational system inside an institution.",
        parts: [
          "Interactive examples",
          "Myth versus reality section",
          "Detection checklist",
          "Shareable takeaways",
        ],
        preview: {
          kicker: "Public explainer",
          title: "Deepfake Survival Guide",
          summary: "A scrollytelling site about trust, evidence, and manipulation",
          panels: ["Interactive demo", "Myth check", "Action steps"],
          footer: "Made for broad public understanding",
        },
        image: "images/public-deepfake-guide.svg",
        imageAlt: "Illustration of the Deepfake Survival Guide interactive public philosophy site",
      },
      {
        badge: "Public Example 03",
        format: "Zine + campaign",
        output: "Advocacy package",
        title: "Humans in the Loop",
        audience: "Students entering automated workplaces",
        challenge: "How do workers understand what is lost when AI systems quietly restructure decision-making?",
        summary:
          "A student could produce a visual zine and companion campaign materials that make automation ethics tangible for peers entering the workforce.",
        problem:
          "Many students hear about automation in abstract terms but lack language for describing dignity, agency, and accountability at work.",
        deliverable:
          "A digital zine, poster series, social campaign copy, and classroom discussion prompts.",
        fit:
          "The emphasis is persuasion and framing: helping an audience see an ethical issue clearly enough to care and respond.",
        parts: [
          "Zine spreads",
          "Poster set",
          "Social campaign copy",
          "Discussion prompts",
        ],
        preview: {
          kicker: "Campaign package",
          title: "Humans in the Loop",
          summary: "A visual advocacy set on automation, work, and human agency",
          panels: ["Zine spread", "Poster series", "Discussion prompt"],
          footer: "Designed for public conversation and sharing",
        },
        image: "images/public-zine-campaign.svg",
        imageAlt: "Illustration of the Humans in the Loop zine and campaign materials",
      },
    ],
  },
};

const sharedItems = [
  "Same Deep Research foundation in Modules 8-10",
  "Same philosophical lenses and debates",
  "Same milestone sequence from Problem Brief to Final",
  "Same AI acknowledgement expectations",
  "Same requirement to explain choices with evidence",
];

const actions = [
  {
    title: "Research three AI ethics zones",
    copy:
      "Students investigate bias, automation, and creativity before choosing a problem. The course front-loads discovery rather than rushing toward a product.",
  },
  {
    title: "Choose one problem worth solving",
    copy:
      "Students define a specific audience, need, and success criteria so the project can be evaluated instead of merely admired.",
  },
  {
    title: "Generate and compare multiple concepts",
    copy:
      "The assignment requires option-making, not instinctive attachment to the first idea. Students learn to justify one direction over others.",
  },
  {
    title: "Turn values into a build plan",
    copy:
      "Students specify scope, stakeholders, resources, risks, and rationale, making the ethics of the project visible in the design.",
  },
  {
    title: "Draft, get feedback, revise",
    copy:
      "The artifact has to withstand self-assessment and peer review. Revision is part of the argument, not an optional cleanup stage.",
  },
  {
    title: "Explain the AI partnership",
    copy:
      "Students must disclose the tools they used, what those tools actually did, and how they verified or corrected AI output.",
  },
];

const milestones = [
  {
    module: 11,
    title: "Problem Brief",
    summary:
      "Students define what they are solving, for whom, and what success looks like.",
    items: [
      "Context summary from prior research",
      "Specific, actionable problem statement",
      "Target audience and audience needs",
      "Success criteria and pathway declaration",
    ],
  },
  {
    module: 12,
    title: "Concept Document",
    summary:
      "Students explore possible responses, compare them, and commit to one concept with rationale.",
    items: [
      "Two to three concept options",
      "Strengths and weaknesses of each option",
      "Commitment to one concept",
      "Value alignment and visual draft element",
    ],
  },
  {
    module: 13,
    title: "Project Spec",
    summary:
      "Students detail exactly what they plan to make and how it will work.",
    items: [
      "Detailed outline or structure",
      "Design decisions with rationale",
      "Stakeholder analysis",
      "Timeline, resources, risks, and contingencies",
    ],
  },
  {
    module: 14,
    title: "First Draft",
    summary:
      "Students submit a full working draft and assess it against the goals they set earlier.",
    items: [
      "Complete draft of the project",
      "Self-assessment against success criteria",
      "Feedback questions for peer reviewers",
    ],
  },
  {
    module: 15,
    title: "Revised Draft",
    summary:
      "Students revise based on peer feedback and show what changed and why.",
    items: [
      "Two peer reviews completed",
      "Revision notes and rationale",
      "Updated draft that shows real iteration",
    ],
  },
  {
    module: 16,
    title: "Final Project",
    summary:
      "Students deliver the finished artifact plus a reflective explanation of the full process.",
    items: [
      "Final artifact in the format that fits the project",
      "Project documentation for a general audience",
      "APA citations and AI acknowledgement carried through",
    ],
  },
];

const reflectionSections = [
  {
    title: "The Problem I Addressed",
    copy: "Explain the issue, who is affected, and why it matters.",
  },
  {
    title: "What I Built and Why",
    copy: "Describe the chosen artifact and why it was the best response.",
  },
  {
    title: "Key Design Decisions",
    copy: "Walk through major choices, alternatives, and revisions after feedback.",
  },
  {
    title: "Philosophical Frameworks That Shaped My Thinking",
    copy: "Show how ethical theories and later course debates influenced the project.",
  },
  {
    title: "Working with AI as a Partner",
    copy: "Be specific about tools, prompts, verification, and where AI was not used.",
  },
  {
    title: "What I Learned",
    copy: "Reflect on growth, values, decision-making, and what would change next time.",
  },
];

const policyRows = [
  {
    component: "Deep Research Reports",
    status: "Allowed",
    copy: "AI use is expected here, but students must verify what the tools produce.",
  },
  {
    component: "Problem Brief, Concept, and Spec",
    status: "Allowed with acknowledgement",
    copy: "Students may use AI during planning, but must explain the role AI played.",
  },
  {
    component: "Project Content",
    status: "Allowed with acknowledgement",
    copy: "Whether students build or publish, they need to disclose tools and refinement decisions.",
  },
];

const workflowSteps = [
  {
    title: "Name the tools",
    copy: "Acknowledge which AI systems or assistants were used in the process.",
  },
  {
    title: "Explain the role",
    copy: "Describe what AI helped with, from brainstorming to drafting to revision support.",
  },
  {
    title: "Verify and refine",
    copy: "Show how output was checked, corrected, edited, or rejected before submission.",
  },
];

const moduleList = document.querySelector("#module-list");
const milestoneGrid = document.querySelector("#milestone-grid");
const reflectionList = document.querySelector("#reflection-list");
const policyTable = document.querySelector("#policy-table");
const workflowStepsContainer = document.querySelector("#workflow-steps");
const actionGrid = document.querySelector("#action-grid");
const statsContainer = document.querySelector("#stats");
const ringProgress = document.querySelector(".ring-progress");
const pathwayShell = document.querySelector(".pathway-shell");
const pathwayButtons = [...document.querySelectorAll("[data-pathway-button]")];
const phaseCardNodes = [...document.querySelectorAll("[data-stage-card]")];
const phaseSvgNodes = [...document.querySelectorAll("[data-stage-node]")];
const exampleGalleryTitle = document.querySelector("#example-gallery-title");
const exampleGalleryCopy = document.querySelector("#example-gallery-copy");
const exampleCardGrid = document.querySelector("#example-card-grid");
const exampleDetailKicker = document.querySelector("#example-detail-kicker");
const exampleDetailTitle = document.querySelector("#example-detail-title");
const exampleDetailBadge = document.querySelector("#example-detail-badge");
const exampleDetailCopy = document.querySelector("#example-detail-copy");
const exampleProblem = document.querySelector("#example-problem");
const exampleDeliverable = document.querySelector("#example-deliverable");
const exampleAudience = document.querySelector("#example-audience");
const exampleFit = document.querySelector("#example-fit");
const examplePreview = document.querySelector("#example-preview");
const examplePartGrid = document.querySelector("#example-part-grid");

let activeModuleIndex = 0;
let activeMilestoneIndex = 0;
let activePathwayKey = "builder";
let activePathwayExampleIndex = 0;
let autoRotate = true;

function renderStats() {
  statsContainer.innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `
    )
    .join("");
}

function renderModules() {
  moduleList.innerHTML = modules
    .map(
      (item, index) => `
        <button
          type="button"
          class="module-button${index === 0 ? " is-active" : ""}"
          data-module-index="${index}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          <div class="module-meta">
            <span class="module-number">M${item.module}</span>
            <span class="module-phase">${item.phase}</span>
          </div>
          <strong>${item.title}</strong>
          <small>${item.deliverable}</small>
        </button>
      `
    )
    .join("");

  moduleList.querySelectorAll(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      autoRotate = false;
      setActiveModule(Number(button.dataset.moduleIndex));
    });
  });
}

function setActiveModule(index) {
  activeModuleIndex = index;
  const item = modules[index];
  const circumference = 326.73;
  const progress = (index + 1) / modules.length;
  const dashOffset = circumference - circumference * progress;

  document.documentElement.style.setProperty("--phase-accent", item.accent);
  document.querySelectorAll(".module-button").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelector("#detail-kicker").textContent = `Module ${item.module} • ${item.phase}`;
  document.querySelector("#detail-title").textContent = item.title;
  document.querySelector("#detail-copy").textContent = item.copy;
  document.querySelector("#detail-focus").textContent = item.title;
  document.querySelector("#detail-deliverable").textContent = item.deliverable;
  document.querySelector("#detail-work").textContent = item.work;
  document.querySelector("#detail-why").textContent = item.why;
  document.querySelector("#progress-label").innerHTML = `${String(index + 1).padStart(2, "0")} / ${String(modules.length).padStart(2, "0")}`;
  ringProgress.style.strokeDashoffset = String(dashOffset);

  document.querySelector("#detail-tags").innerHTML = item.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  document.querySelector("#phase-track").innerHTML = phaseTrack
    .map(
      (phase) => `
        <span class="phase-pill${phase.key === item.phaseKey ? " is-active" : ""}">
          ${phase.label} <span class="phase-range">${phase.range}</span>
        </span>
      `
    )
    .join("");

  phaseCardNodes.forEach((node) => {
    node.classList.toggle("is-active", node.dataset.stageCard === item.phaseKey);
  });

  phaseSvgNodes.forEach((node) => {
    node.classList.toggle("is-active", node.dataset.stageNode === item.phaseKey);
  });
}

function renderPathway(key) {
  const pathway = pathways[key];
  const spotlight = pathway.examples[0];
  activePathwayKey = key;
  activePathwayExampleIndex = 0;
  pathwayShell.dataset.pathway = key;

  pathwayButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pathwayButton === key);
    button.setAttribute("aria-selected", String(button.dataset.pathwayButton === key));
  });

  document.querySelector("#pathway-kicker").textContent = pathway.kicker;
  document.querySelector("#pathway-title").textContent = pathway.title;
  document.querySelector("#pathway-copy").textContent = pathway.copy;
  document.querySelector("#pathway-best").textContent = pathway.best;
  document.querySelector("#pathway-example").textContent = pathway.example;
  document.querySelector("#pathway-artifacts").innerHTML = pathway.artifacts
    .map((artifact) => `<li>${artifact}</li>`)
    .join("");

  document.querySelector("#artifact-card-a").innerHTML = `
    <div class="artifact-spotlight">
      <img
        class="artifact-spotlight-image"
        src="${spotlight.image}"
        alt="${spotlight.imageAlt}"
        loading="lazy"
      >
      <div class="artifact-spotlight-copy">
        <span class="label">Spotlight Example</span>
        <h4>${spotlight.title}</h4>
        <p>${spotlight.summary}</p>
      </div>
    </div>
  `;
  document.querySelector("#artifact-card-b").innerHTML = `
    <div class="artifact-principle-card">
      <span class="label">Core Logic</span>
      <h4>${pathway.cardA.title}</h4>
      <p>${pathway.cardA.text}</p>
    </div>
    <div class="artifact-principle-card">
      <span class="label">Why It Matters</span>
      <h4>${pathway.cardB.title}</h4>
      <p>${pathway.cardB.text}</p>
    </div>
  `;

  renderPathwayExamples();
}

function renderPathwayExamples() {
  const pathway = pathways[activePathwayKey];

  exampleGalleryTitle.textContent = pathway.galleryTitle;
  exampleGalleryCopy.textContent = pathway.galleryCopy;
  exampleCardGrid.innerHTML = pathway.examples
    .map(
      (example, index) => `
        <button
          type="button"
          class="example-card${index === activePathwayExampleIndex ? " is-active" : ""}"
          data-example-index="${index}"
          aria-pressed="${index === activePathwayExampleIndex ? "true" : "false"}"
        >
          <div class="example-card-visual">
            <img
              class="example-card-image"
              src="${example.image}"
              alt="${example.imageAlt}"
              loading="lazy"
            >
            <div class="example-chip-row">
              <span class="example-chip">${example.format}</span>
              <span class="example-chip">${example.output}</span>
            </div>
          </div>
          <div class="example-card-copy">
            <span class="module-number">${example.audience}</span>
            <strong>${example.title}</strong>
            <p>${example.challenge}</p>
          </div>
        </button>
      `
    )
    .join("");

  exampleCardGrid.querySelectorAll(".example-card").forEach((button) => {
    button.addEventListener("click", () => {
      setActivePathwayExample(Number(button.dataset.exampleIndex));
    });
  });

  setActivePathwayExample(activePathwayExampleIndex);
}

function setActivePathwayExample(index) {
  activePathwayExampleIndex = index;
  const example = pathways[activePathwayKey].examples[index];

  exampleCardGrid.querySelectorAll(".example-card").forEach((card, cardIndex) => {
    const isActive = cardIndex === index;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  exampleDetailKicker.textContent = `${example.format} • ${example.output}`;
  exampleDetailTitle.textContent = example.title;
  exampleDetailBadge.textContent = example.badge;
  exampleDetailCopy.textContent = example.summary;
  exampleProblem.textContent = example.problem;
  exampleDeliverable.textContent = example.deliverable;
  exampleAudience.textContent = example.audience;
  exampleFit.textContent = example.fit;

  examplePreview.innerHTML = `
    <div class="example-preview-stack">
      <div class="example-preview-image-shell">
        <img
          class="example-hero-image"
          src="${example.image}"
          alt="${example.imageAlt}"
          loading="lazy"
        >
      </div>
      <div class="mini-artifact">
        <div class="mini-artifact-top">
          <span class="mini-artifact-kicker">${example.preview.kicker}</span>
          <strong>${example.preview.title}</strong>
          <p>${example.preview.summary}</p>
        </div>
        <div class="mini-artifact-panels">
          ${example.preview.panels
            .map(
              (panel) => `
                <div class="mini-panel">
                  <span>Piece</span>
                  <strong>${panel}</strong>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="mini-artifact-footer">${example.preview.footer}</div>
      </div>
    </div>
  `;

  examplePartGrid.innerHTML = example.parts
    .map(
      (part) => `
        <div class="example-part">
          <span class="label">Students Build</span>
          <strong>${part}</strong>
        </div>
      `
    )
    .join("");
}

function renderSharedBand() {
  document.querySelector("#shared-band").innerHTML = sharedItems
    .map((item) => `<span class="shared-pill">${item}</span>`)
    .join("");
}

function renderActions() {
  actionGrid.innerHTML = actions
    .map(
      (item, index) => `
        <article class="action-card reveal">
          <span class="action-index">${String(index + 1).padStart(2, "0")}</span>
          <strong>${item.title}</strong>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join("");
}

function renderMilestones() {
  milestoneGrid.innerHTML = milestones
    .map(
      (item, index) => `
        <button
          type="button"
          class="milestone-card${index === 0 ? " is-active" : ""}"
          data-milestone-index="${index}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          <div class="milestone-header">
            <span class="module-number">Module ${item.module}</span>
            <span class="module-phase">${item.title}</span>
          </div>
          <strong>${item.summary}</strong>
          <p>${item.title}</p>
          <ul class="milestone-list">
            ${item.items.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        </button>
      `
    )
    .join("");

  milestoneGrid.querySelectorAll(".milestone-card").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveMilestone(Number(button.dataset.milestoneIndex));
    });
  });
}

function setActiveMilestone(index) {
  activeMilestoneIndex = index;
  milestoneGrid.querySelectorAll(".milestone-card").forEach((card, cardIndex) => {
    const isActive = cardIndex === index;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

function renderReflection() {
  reflectionList.innerHTML = reflectionSections
    .map(
      (item, index) => `
        <article class="reflection-item">
          <span class="reflection-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="reflection-copy">
            <strong>${item.title}</strong>
            <p>${item.copy}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPolicy() {
  policyTable.innerHTML = policyRows
    .map(
      (row) => `
        <article class="policy-row">
          <div class="policy-row-header">
            <strong>${row.component}</strong>
            <span class="policy-status">${row.status}</span>
          </div>
          <p>${row.copy}</p>
        </article>
      `
    )
    .join("");

  workflowStepsContainer.innerHTML = workflowSteps
    .map(
      (step, index) => `
        <article class="workflow-step">
          <span class="workflow-step-index">${String(index + 1).padStart(2, "0")}</span>
          <strong>${step.title}</strong>
          <p>${step.copy}</p>
        </article>
      `
    )
    .join("");
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function startAutoRotate() {
  window.setInterval(() => {
    if (!autoRotate) return;
    setActiveModule((activeModuleIndex + 1) % modules.length);
  }, 4800);
}

function setupReveal() {
  document.querySelectorAll(".hero .reveal").forEach((node) => {
    node.classList.add("is-visible");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((node) => {
    if (!node.closest(".hero")) {
      observer.observe(node);
    }
  });
}

function bindPathways() {
  pathwayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      renderPathway(button.dataset.pathwayButton);
    });
  });
}

function init() {
  renderStats();
  renderModules();
  renderSharedBand();
  renderActions();
  renderMilestones();
  renderReflection();
  renderPolicy();
  bindScrollButtons();
  bindPathways();
  setActiveModule(0);
  setActiveMilestone(0);
  renderPathway("builder");
  setupReveal();
  startAutoRotate();
}

init();
