export type AccentId = "teal" | "coral" | "kelp" | "blue" | "goldfish";

export type PixelIconId =
	| "fish"
	| "shelf-research"
	| "shelf-ai"
	| "shelf-swe"
	| "shelf-experience"
	| "shelf-toolbox"
	| "shelf-background"
	| "shelf-offclock"
	| "magnifying-glass"
	| "entropy-clusters"
	| "scale-alert"
	| "robot-hand"
	| "speech-bubble"
	| "lock"
	| "circuit-board"
	| "server-rack"
	| "heart-pulse"
	| "gradebook"
	| "code-crate"
	| "hiking-boot"
	| "open-book"
	| "fish-tank"
	| "github"
	| "linkedin"
	| "email"
	| "resume"
	| "degree-scroll"
	| "cinema"
	| "map-pin"
	| "instagram"
	| "sprout"
	| "child-care"
	| "trophy"
	| "hourglass";

export interface AccentOption {
	id: AccentId;
	label: string;
	swatchClass: string;
}

export interface NavItem {
	id: string;
	label: string;
	icon: PixelIconId;
}

export interface SocialLink {
	label: string;
	href: string;
	icon: PixelIconId;
	external?: boolean;
}

export interface ChartBar {
	label: string;
	value: number;
	displayValue: string;
	muted?: boolean;
}

export interface AurocChartData {
	title: string;
	ariaLabel: string;
	baselineValue: number;
	baselineLabel: string;
	bars: ChartBar[];
}

export interface LabeledTagGroup {
	label: string;
	items: string[];
}

export interface PublicationInfo {
	heading: string;
	icon: PixelIconId;
	title: string;
	venue: string;
	href: string;
	linkLabel: string;
}

export interface InternalActionLink {
	label: string;
	targetShelfId: string;
	targetItemId: string;
}

export interface ShelfCardItem {
	id: string;
	title: string;
	icon: PixelIconId;
	/** Path to an organisation logo in /public (e.g. '/logos/tmu.png'). Shown instead of the icon. */
	logo?: string;
	/** A second role/affiliation shown on its own row below the title, with its own logo. */
	affiliation?: {
		title: string;
		logo?: string;
	};
	start?: string;
	end?: string;
	accentBadge?: string;
	rightLabel?: string;
	description?: string;
	/** Small muted monospace note shown under the description. */
	note?: string;
	keyResult?: string;
	labeledTags?: LabeledTagGroup;
	tags?: string[];
	publication?: PublicationInfo;
	href?: string;
	linkLabel?: string;
	demoHref?: string;
	demoLabel?: string;
	/** Path to a paper/report PDF in /public, linked next to the GitHub link. */
	paperHref?: string;
	paperLabel?: string;
	internalLink?: InternalActionLink;
	statusNote?: string;
	chart?: AurocChartData;
	/** Screenshot, diagram or GIF in /public, shown under the description. Click opens it full size. */
	media?: {
		src: string;
		alt: string;
		caption?: string;
	};
}

export type CurrentWorkStatus = "In progress" | "Up next" | "Planned";

export interface CurrentWorkItem {
	title: string;
	/** One sentence. */
	description: string;
	status: CurrentWorkStatus;
}

export interface CurrentWorkSection {
	id: string;
	title: string;
	icon: PixelIconId;
	/** Shown under the heading as "Updated <lastUpdated>". */
	lastUpdated: string;
	items: CurrentWorkItem[];
}

export interface ExpandableShelf {
	id: string;
	title: string;
	icon: PixelIconId;
	description?: string;
	columns?: 1 | 2;
	items: ShelfCardItem[];
	footerLink?: {
		label: string;
		href: string;
	};
}

export interface AchievementItem {
	id: string;
	title: string;
	issuer: string;
	/** Optional organisation logo in /public, shown before the title. */
	logo?: string;
	/** YYYY-MM; a single month is shown when start equals end. */
	start: string;
	end: string;
	/** When set, the title links here (new tab). */
	href?: string;
	accentBadge?: string;
	/** Extra small links, e.g. separate certificate stages. */
	links?: { label: string; href: string }[];
	internalLink?: InternalActionLink;
}

export interface AchievementsShelf {
	id: string;
	title: string;
	icon: PixelIconId;
	description?: string;
	items: AchievementItem[];
}

export interface ToolboxGroup {
	label: string;
	items: string[];
}

export interface JourneyShelf {
	id: string;
	title: string;
	icon: PixelIconId;
	paragraphs: string[];
}

export interface FooterIconLink {
	label: string;
	href: string;
	icon: PixelIconId;
}

const SHORT_MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export function formatYearMonth(ym: string): string {
	if (ym.toLowerCase() === "present") return "Present";
	const match = /^(\d{4})-(\d{2})$/.exec(ym.trim());
	if (!match) return ym;
	const year = match[1];
	const monthIdx = parseInt(match[2], 10) - 1;
	const monthName = SHORT_MONTHS[monthIdx];
	return monthName ? `${monthName} ${year}` : ym;
}

export function formatDateRange(start: string, end: string): string {
	if (start === end) return formatYearMonth(start);
	return `${formatYearMonth(start)} – ${formatYearMonth(end)}`;
}

export const SITE_CONTENT = {
	meta: {
		siteName: "nashira.dev",
		title: "Nashira Nasrudeen · Software engineer & AI",
	},

	consoleGreeting:
		"🐠 hi, fellow dev! Poking around the source? I'd love to hear from you: fathimanashira@gmail.com",

	ui: {
		accentPickerLabel: "Choose accent colour",
		themeToggleLightLabel: "Switch to light theme",
		themeToggleDarkLabel: "Switch to dark theme",
		mobileMenuOpenLabel: "Open navigation menu",
		mobileMenuCloseLabel: "Close navigation menu",
		githubLinkText: "View on GitHub ↗",
		aquariumAriaLabel:
			"Interactive pixel-art aquarium with three swimming fish",
	},

	accents: [
		{
			id: "teal",
			label: "Teal",
			swatchClass: "bg-[#1F8A82] dark:bg-[#7FD8CF]",
		},
		{
			id: "coral",
			label: "Coral",
			swatchClass: "bg-[#C2533A] dark:bg-[#F49C80]",
		},
		{
			id: "kelp",
			label: "Kelp",
			swatchClass: "bg-[#4E7A3A] dark:bg-[#A6D48C]",
		},
		{
			id: "blue",
			label: "Deep blue",
			swatchClass: "bg-[#2A67A5] dark:bg-[#6DB3F5]",
		},
		{
			id: "goldfish",
			label: "Goldfish",
			swatchClass: "bg-[#B26A34] dark:bg-[#FEDE91]",
		},
	] satisfies AccentOption[],

	nav: [
		{ id: "education", label: "Education", icon: "shelf-background" },
		{ id: "experience", label: "Experience", icon: "shelf-experience" },
		{ id: "projects", label: "Projects", icon: "shelf-swe" },
		{ id: "toolbox", label: "Toolbox", icon: "shelf-toolbox" },
		{ id: "now", label: "Now", icon: "hourglass" },
		{ id: "achievements", label: "Achievements", icon: "trophy" },
		{ id: "journey", label: "Journey", icon: "sprout" },
		{ id: "off-the-clock", label: "Off the clock", icon: "shelf-offclock" },
	] satisfies NavItem[],

	socials: [
		{
			label: "GitHub",
			href: "https://github.com/nashira26",
			icon: "github",
			external: true,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/nashira-nasrudeen/",
			icon: "linkedin",
			external: true,
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com/_naashira_/",
			icon: "instagram",
			external: true,
		},
		{
			label: "Email",
			href: "mailto:fathimanashira@gmail.com",
			icon: "email",
			external: false,
		},
	] satisfies SocialLink[],

	// Edit your current book and aquarium inhabitants right here:
	sidebarCard: {
		readingPrefix: "📖 reading:",
		reading: "Piranesi",
		tankPrefix: "🐠 tank:",
		tank: "Betta & neon tetras",
	},

	hero: {
		greeting: "hi, I'm",
		name: "Nashira",
		location: "Based in Toronto",
		intro:
			"I am a Software Engineer with 2+ years of experience. Recently graduated with a MEng in AI at Toronto Metropolitan University. This is my little corner of the internet, where I keep what I've built and studied.",
		availability:
			"currently looking for AI/ML & software engineering roles in Toronto",
		primaryCta: {
			label: "See my work",
			href: "#projects",
		},
		secondaryCta: {
			label: "Resume",
			href: "/Nashira_Resume.pdf",
		},
	},

	shelves: {
		projects: {
			id: "projects",
			title: "Projects",
			icon: "shelf-swe",
			description: "Research and things I've built.",
			columns: 1,
			items: [
				{
					id: "careq",
					title: "CareQ",
					icon: "child-care",
					rightLabel: "AI agent · hackathon",
					accentBadge: "🥉 3rd place · WAI Hackathon 2026",
					description:
						"One portal for Ontario's fragmented child-care waitlists, built with Team Coalesce for the Women in AI Canada Hackathon 2026, where we placed 3rd. A full-stack app with separate parent and child-care-centre portals, session-based authentication and role-based data access across 1,102 licensed Ontario centres, with deterministic search ranking and end-to-end Playwright tests. A RAG pipeline over centre handbooks and the 283-page provincial licensing manual (PDF/HTML ingestion, heading-aware chunking, Gemini embeddings, MongoDB Atlas Vector Search with metadata filtering) grounds answers in cited sources. A Gemini tool-calling agent orchestrates document retrieval and application-data queries, with server-enforced data scoping and refusal of unsupported queries.",
					keyResult:
						"citation quote verification · rule-based validation · fallback-model retries · rate limiting · personal-data minimisation",
					tags: [
						"TypeScript",
						"React",
						"Express",
						"MongoDB Atlas Vector Search",
						"Gemini",
						"RAG",
						"Playwright",
					],
					href: "https://github.com/nashira26/CareQ",
					linkLabel: "View on GitHub ↗",
					demoHref: "https://careq-gfe9.onrender.com/",
					demoLabel: "Try the live demo ↗",
					media: {
						src: "/assets/careq.png",
						alt: "CareQ landing page: 'Child-care applications and waitlist updates, in one place', with parent and centre sign-up buttons and an Ask CareQ assistant button",
					},
				},
				{
					id: "llm-judge-uncertainty",
					title: "LLM-as-a-Judge Uncertainty",
					icon: "magnifying-glass",
					rightLabel: "research",
					description:
						"LLMs are increasingly used to judge whether content is safe, but how do you know when the judge itself is wrong? For my MEng research at TMU's Trustworthy AI Lab, I built a Python framework that samples a judge 10 times per input and tests whether disagreement between the samples predicts its mistakes. I compared 14 uncertainty methods across six safety datasets and four judge models. Methods that compare explanations by entailment or word overlap work well on some datasets, but ACSE, an embedding-based method, stays near chance on all six, because the judge's explanations look almost identical to its encoder. Most errors also happen when all 10 samples agree, so consistency alone cannot catch them.",
					media: {
						src: "/assets/judge.png",
						alt: "Pipeline diagram: an input goes to a judge model sampled n times, each output has a verdict and an explanation. Verdicts are aggregated by majority vote; explanations go to an uncertainty estimator that produces an uncertainty score. Both are evaluated against ground truth by how well the score separates judge errors from correct verdicts (AUROC).",
						caption: "How the framework works (click to enlarge)",
					},
					note: "AUROC measures how well a score separates wrong verdicts from correct ones: 0.5 is a coin flip, 1.0 is perfect.",
					keyResult:
						"Best AUROC 0.896 on ToxicChat · ACSE 0.51–0.55 on all six datasets",
					chart: {
						title: "AUROC on ToxicChat (best method per family)",
						ariaLabel:
							"Horizontal bar chart of AUROC on ToxicChat: lexical 0.895, NLI 0.817, ACSE 0.513, compared with a coin-flip baseline at 0.5",
						baselineValue: 0.5,
						baselineLabel: "coin flip",
						bars: [
							{ label: "Lexical", value: 0.895, displayValue: "0.895" },
							{ label: "NLI", value: 0.817, displayValue: "0.817" },
							{
								label: "ACSE",
								value: 0.513,
								displayValue: "0.513",
								muted: true,
							},
						],
					},
					tags: [
						"Python",
						"Hugging Face Transformers",
						"Sentence-Transformers",
						"scikit-learn",
						"Uncertainty quantification",
						"LLM evaluation",
					],
					href: "https://github.com/nashira26/Judge-UQ",
				},
				{
					id: "ai-web-form-agent",
					title: "AI Web-Form Agent",
					icon: "robot-hand",
					rightLabel: "AI agent",
					description:
						"Most form-filling bots break when a page changes. This one looks at the page first. Gemini drives a real Playwright browser through tool calls in an observe-and-act loop, working from a short list of what's on screen rather than hardcoded selectors. It doesn't take its own word for it: every filled value is read back, and a run only counts when the page shows a confirmation. It runs from the command line, an HTTP API with input validation, or a scheduler that prevents overlapping runs.",

					media: {
						src: "/assets/webform.gif",
						alt: "Screen recording of the agent filling in a medical information form in a browser, section by section",
						caption: "The agent filling in a form on its own",
					},
					tags: ["TypeScript", "Node.js", "Gemini API", "Playwright"],
					href: "https://github.com/nashira26/Web-form-agent",
				},
				{
					id: "emotion-conditioned-dialogue",
					title: "Emotion-Conditioned Dialogue Generation",
					icon: "speech-bubble",
					rightLabel: "NLP · fine-tuning",
					description:
						"Teaching a dialogue model to reply with a chosen emotion, and measuring whether it actually does. I fine-tuned BART on DailyDialog and compared two ways of giving it the emotion: an emotion token at the start of the decoder's output, and a learned emotion vector added to the encoder's input. Both were tested against a baseline with no emotion information on the same 6,740 test examples. Both methods were equally good at following the emotion, but the token method kept better wording. It started as a course project; when I rebuilt it, I found one missing token at generation time had been hiding the token method's whole gain. It also showed why accuracy misleads on imbalanced data: always predicting \"neutral\" scored 81% accuracy but the lowest macro-F1.",
					media: {
						src: "/assets/EmoCon.png",
						alt: "Diagram of the three models: DailyDialog conversations become context, reply and emotion examples; a baseline gets no emotion, EmoToken adds an emotion token at the start of the decoder, and EmoFusion adds an emotion vector to the encoder input; all are evaluated on the same test set for text quality and emotion alignment.",
						caption: "How the three models differ (click to enlarge)",
					},
					note: "Emotion macro-F1 scores each emotion separately and averages them, so rare emotions count as much as neutral. A classifier labels each reply's emotion; real human replies score 28.4, which is the practical ceiling.",
					keyResult:
						"Emotion macro-F1 18.6% → ~28%, the same score the classifier gives human replies (bootstrap-significant)",
					chart: {
						title: "Emotion macro-F1 on the test set",
						ariaLabel:
							"Horizontal bar chart of emotion macro-F1: baseline 18.6%, EmoToken 28.0%, EmoFusion 28.4%, compared with human replies at 28.4%",
						baselineValue: 0.284,
						baselineLabel: "human replies",
						bars: [
							{
								label: "Baseline",
								value: 0.186,
								displayValue: "18.6%",
								muted: true,
							},
							{ label: "EmoToken", value: 0.28, displayValue: "28.0%" },
							{ label: "EmoFusion", value: 0.284, displayValue: "28.4%" },
						],
					},
					tags: [
						"Python",
						"PyTorch",
						"Hugging Face Transformers",
						"BART",
						"Fine-tuning",
						"NLP",
					],
					href: "https://github.com/nashira26/Emotion-Conditioned-Dialogue",
				},
				{
					id: "robustness-private-fl",
					title: "Robustness in Private Federated Learning",
					icon: "lock",
					rightLabel: "privacy ML",
					description:
						"Privacy and robustness often pull in opposite directions. I built a differentially private federated learning pipeline for human activity recognition (1D CNN, DP-SGD with gradient clipping and Gaussian noise, across simulated clients) and attacked it with white-box PGD. Then I used federated adversarial training to win back robustness without giving up privacy.",
					keyResult: "robust accuracy 9.16% → 29.59% at ε = 0.05",
					tags: ["PyTorch", "DP-SGD", "Federated Learning"],
					href: "https://github.com/nashira26/Adversarial-Robustness",
					paperHref: "/assets/AdvRob.pdf",
				},
				{
					id: "pcb-defect-segmentation",
					title: "PCB Defect Segmentation",
					icon: "circuit-board",
					rightLabel: "computer vision",
					description:
						"A computer vision system for finding and segmenting manufacturing defects on printed circuit boards.",
					tags: ["Python", "Computer Vision"],
					href: "https://github.com/nashira26/PCB-Defect-Segmentation-System",
					paperHref: "/assets/Unet.pdf",
				},
				{
					id: "hybrid-nb-mlp-heart-disease",
					title: "Hybrid Naive Bayes–MLP for Heart Disease",
					icon: "heart-pulse",
					rightLabel: "machine learning",
					description:
						"Does adding Naive Bayes probabilities to a neural network improve heart disease prediction? A group course project comparing Naive Bayes, a neural network, and a hybrid of the two across three heart disease datasets. The hybrid matched the neural network on the largest dataset but didn't improve on it. The more useful lesson was about class imbalance: on one dataset, every model missed almost all positive cases while still reporting 85% accuracy.",
					tags: ["Python", "scikit-learn", "TensorFlow", "Group project"],
					href: "https://github.com/nashira26/Hybrid-Naive-Bayes-MLP-for-Cardiovascular-Disease-Prediction",
					paperHref: "/assets/hybrid.pdf",
					paperLabel: "Read the report (PDF) ↗",
				},
				{
					id: "datacentre-reliability-survey",
					title: "Reliability Modelling in Cloud Data Centers",
					icon: "server-rack",
					rightLabel: "literature survey",
					description:
						"How are fault trees and reliability block diagrams used to model cloud data center reliability, and where does the research fall short? A literature survey with a group of three at TMU (2025), reviewing nine studies that use fault tree analysis (FTA) and reliability block diagrams (RBD) to model the reliability of cloud data centers. We built a taxonomy grouping the studies by subsystem (compute, storage, network, power and cooling), modelling approach and the metrics they evaluate.",
					keyResult:
						"FTA is mostly used to diagnose multi-cause failures in compute systems; RBD is preferred for evaluating redundancy in power and storage. Most studies model one subsystem in isolation, few use real failure data, and almost none use machine learning, despite the volume of monitoring data data centers produce.",
					tags: [
						"Reliability engineering",
						"Fault tree analysis",
						"Research writing",
					],
					paperHref: "/assets/Datacentre.pdf",
					paperLabel: "Read the report (PDF) ↗",
				},
				{
					id: "grade-book",
					title: "Grade-Book",
					icon: "gradebook",
					rightLabel: "full-stack",
					description:
						"A full-stack MERN app that helps teachers and school administrators manage term-test marks, generate reports and track how students are doing over time.",
					tags: ["MongoDB", "Express", "React", "Node.js"],
					href: "https://github.com/nashira26/Grade-Book",
				},
			],
			footerLink: {
				label: "everything else on GitHub ↗",
				href: "https://github.com/nashira26",
			},
		} satisfies ExpandableShelf,

		currentWork: {
			id: "now",
			title: "Currently working on",
			icon: "hourglass",
			lastUpdated: "November 2026",
			items: [
				{
					title: "CareQ evaluation",
					description:
						"Building a 40–60 question test set to measure retrieval accuracy, citation correctness and whether the assistant refuses when it should.",
					status: "In progress",
				},
				{
					title: "CareQ with LangGraph",
					description:
						"Rebuilding CareQ's assistant as a LangGraph workflow and comparing it with my hand-built agent on the same test set.",
					status: "Up next",
				},
				{
					title: "Predictive maintenance",
					description:
						"Training XGBoost and LightGBM to predict machine failures, tracked in MLflow and served as an API with FastAPI and Docker on Cloud Run.",
					status: "Up next",
				},
				{
					title: "Fine-tuned LLM judge",
					description:
						"Fine-tuning a small open model with QLoRA as a toxicity judge, and comparing its accuracy and calibration with the base model.",
					status: "Planned",
				},
			],
		} satisfies CurrentWorkSection,

		experience: {
			id: "experience",
			title: "Experience",
			icon: "shelf-experience",
			description: "Where I've worked.",
			columns: 1,
			items: [
				{
					id: "researcher-trustworthy-ai-lab",
					title: "Graduate Student Researcher, Trustworthy AI Lab, TMU",
					icon: "shelf-research",
					logo: "/logos/trustworthy-ai-lab.png",
					start: "2026-03",
					end: "2026-08",
					affiliation: {
						title: "Faculty Affiliate Researcher, Vector Institute",
						logo: "/logos/vector.png",
					},
					description:
						"Research in trustworthy AI, LLM evaluation and uncertainty quantification in the Trustworthy AI Lab, led by Dr. Reza Samavi. I designed and ran large-scale evaluations of uncertainty methods for LLM-as-a-Judge toxicity detection, and analysed where and why they fail.",
					href: "https://www.ee.torontomu.ca/~samavi/research.html",
					linkLabel: "About the lab ↗",
					internalLink: {
						label: "see LLM-as-a-Judge Uncertainty in Projects",
						targetShelfId: "projects",
						targetItemId: "llm-judge-uncertainty",
					},
				},
				{
					id: "swe-encyte",
					title: "Software Engineer, Encyte (Pvt) Ltd, Sri Lanka",
					icon: "server-rack",
					logo: "/logos/encyte.png",
					start: "2023-08",
					end: "2025-09",
					description:
						"Built a multi-tenant maintenance-management SaaS serving 3 enterprise clients. I wrote backend microservices and REST APIs in Node.js, Express, TypeScript and MongoDB across 7+ services (work orders, assets, customers, sites, analytics and the API gateway), built React/Next.js frontends from Figma designs, and delivered a contract-management module end to end, from clause and template versioning to staged review-and-approval workflows, pricing, reporting and email notifications. I also set up role-based access control with Auth0 and JWT (page-level restrictions and per-role data scoping), made the APIs 30% faster through query and schema refactoring, standardised error handling across services, and load-tested with Artillery. I contributed to migrating the core frontend to Next.js, and mentored 4+ interns and the web team through JavaScript, React/Redux and backend training sessions.",
					href: "https://www.fieldsmart.io/",
					linkLabel: "Fieldsmart, what I worked on ↗",
					tags: [
						"Node.js",
						"TypeScript",
						"MongoDB",
						"NestJS",
						"React",
						"Next.js",
						"Auth0",
					],
				},
			],
		} satisfies ExpandableShelf,

		achievements: {
			id: "achievements",
			title: "Achievements & certifications",
			icon: "trophy",
			description: "Things I'm proud of.",
			items: [
				{
					id: "wai-hackathon-2026",
					title: "3rd Place, WAI Canada Hackathon 2026",
					issuer: "Women in AI",
					logo: "/logos/wai.png",
					start: "2026-11",
					end: "2026-11",
					href: "https://www.womeninai.co/wai-hackathon-canada",
					accentBadge: "🥉",
					internalLink: {
						label: "see CareQ in Projects",
						targetShelfId: "projects",
						targetItemId: "careq",
					},
				},
				{
					id: "gcp-data-engineering",
					title: "Introduction to Data Engineering on Google Cloud",
					issuer: "Google Cloud",
					start: "2026-02",
					end: "2026-02",
					href: "https://drive.google.com/file/d/1VKw5HYxkyPbV4gzCgKJbRvljbmPSBRU_/view?usp=sharing",
				},
				{
					id: "sliit-ai-ml-engineer",
					title: "AI/ML Engineer (Stage 1 & Stage 2)",
					issuer: "SLIIT",
					start: "2024-09",
					end: "2025-01",
					links: [
						{
							label: "Stage 1",
							href: "https://code.sliit.org/certificates/ztqvrf2mgk",
						},
						{
							label: "Stage 2",
							href: "https://code.sliit.org/certificates/7ht2tbyhoo",
						},
					],
				},
				{
					id: "ml-specialization",
					title: "Machine Learning Specialization",
					issuer: "DeepLearning.AI (Coursera)",
					start: "2024-05",
					end: "2024-05",
					href: "https://www.coursera.org/account/accomplishments/specialization/JVR8LEPJREUH",
				},
				{
					id: "agile-scrum",
					title: "Agile and Scrum Fundamentals",
					issuer: "IBM via edX",
					start: "2024-01",
					end: "2024-01",
					href: "https://courses.edx.org/certificates/70ead67c5efc43608284fce335249e8a",
				},
				{
					id: "gssoc-2023",
					title: "Open Source Contributor",
					issuer: "GirlScript Summer of Code",
					start: "2023-05",
					end: "2023-08",
					href: "https://gssoc.girlscript.org/",
				},
				{
					id: "aws-cloud-practitioner",
					title: "AWS Cloud Practitioner Essentials",
					issuer: "edX",
					start: "2023-07",
					end: "2023-07",
					href: "https://courses.edx.org/certificates/3cbd68a7e7bf43c78033200abb0e20d2",
				},
			],
		} satisfies AchievementsShelf,

		education: {
			id: "education",
			title: "Education",
			icon: "shelf-background",
			description: "Where I've studied.",
			columns: 1,
			items: [
				{
					id: "meng-ai-tmu",
					title:
						"MEng in Artificial Intelligence, Toronto Metropolitan University",
					icon: "shelf-background",
					logo: "/logos/tmu.png",
					start: "2025-09",
					end: "2026-08",
					keyResult: "GPA: 4.17 / 4.33",
					labeledTags: {
						label: "Relevant coursework:",
						items: [
							"Machine Learning",
							"Deep Learning",
							"Secure Machine Learning",
							"Neural Networks",
							"Intelligent Systems",
							"Advanced Data Engineering",
							"Computer Systems Modeling",
							"Human-Computer Interaction",
						],
					},
				},
				// Update BSc start/end months (YYYY-MM) as needed:
				{
					id: "bsc-moratuwa",
					title:
						"BSc (Hons) Materials Science & Engineering, University of Moratuwa",
					icon: "degree-scroll",
					logo: "/logos/moratuwa.png",
					start: "2017-10",
					end: "2022-07",
					accentBadge: "📄 published",
					labeledTags: {
						label: "Modules covered:",
						items: [
							"Python Programming",
							"Visual Programming",
							"Real Analysis",
							"Calculus",
							"Linear Algebra",
							"Applied Statistics",
							"Numerical Methods",
						],
					},
					publication: {
						heading: "Publication",
						icon: "resume",
						title:
							"Modelling and Simulation of a Vertically Integrated Zinc Oxide Piezoelectric Nanogenerator",
						venue:
							"Moratuwa Engineering Research Conference (MERCon) · Jul 27, 2022",
						href: "https://ieeexplore.ieee.org/document/9906201",
						linkLabel: "View on IEEE Xplore ↗",
					},
				},
			],
		} satisfies ExpandableShelf,

		toolbox: {
			id: "toolbox",
			title: "Toolbox",
			icon: "shelf-toolbox",
			description: "What I reach for.",
			groups: [
				{
					label: "AI & ML",
					items: [
						"PyTorch",
						"TensorFlow",
						"Hugging Face Transformers",
						"scikit-learn",
						"NumPy",
						"pandas",
						"NLP",
						"computer vision",
						"LLM evaluation",
						"uncertainty quantification",
					],
				},
				{
					label: "Trustworthy AI",
					items: [
						"conformal prediction",
						"LLM-as-a-Judge evaluation",
						"differential privacy (DP-SGD)",
						"federated learning",
						"adversarial robustness",
					],
				},
				{
					label: "Generative AI",
					items: [
						"RAG",
						"embeddings",
						"vector search (MongoDB Atlas)",
						"LLM agents & function calling",
						"prompt engineering",
						"Gemini API",

						"guardrails",
					],
				},
				{
					label: "Languages",
					items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"],
				},
				{
					label: "Full-stack",
					items: [
						"FastAPI",
						"Node.js",
						"Express",
						"NestJS",
						"REST APIs",
						"React",
						"Next.js",
						"Redux",
						"MongoDB",
						"PostgreSQL",
						"Auth0",
						"JWT",
						"RBAC",
					],
				},
				{
					label: "Tools",
					items: [
						"Git",
						"Docker",
						"Linux",
						"AWS",
						"GCP",
						"Playwright",
						"Artillery",
						"Figma",
						"Render",
					],
				},
			] satisfies ToolboxGroup[],
		},

		journey: {
			id: "journey",
			title: "a little about my journey",
			icon: "sprout",
			paragraphs: [
				"I'm a Sri Lankan, from the tropical heaven. 🇱🇰 Born and raised in the hill country, before moving to Toronto in 2025.",
				"I grew up surrounded by computers and sci-fi movies, with an almost irresistible love for maths. So ending up in tech wasn't entirely surprising. 😄",
				"My journey wasn't exactly a straight line, though. I studied Materials Science and Engineering for my undergraduate degree. But somewhere along the way I realised my interests were pulling me elsewhere. I took a chance on programming, fell in love with those late-night bug fixes, and found my way into software engineering. I was working for over two years as a software engineer, self-learning bit by bit. I'm grateful to my first company for giving me the wings to fly.",
				"Life eventually brought me to Toronto, and into the world of AI. I recently graduated with an MEng in Artificial Intelligence from Toronto Metropolitan University. What a ride that was: a steep learning curve and plenty of challenges, as demanding as it was rewarding.",
				"These days I'm building with LLMs, experimenting with AI agents, exploring trustworthy AI, and trying to keep up with everything happening in the field (there's a LOT).",
				"Still curious, still learning.. Mostly, I'm busy reassuring friends and family that AI isn't taking over the world… yet. 🤖",
			],
		} satisfies JourneyShelf,

		offTheClock: {
			id: "off-the-clock",
			title: "Off the clock",
			icon: "shelf-offclock",
			description: "Trails, books, movies, and my planted aquarium.",
			columns: 2,
			items: [
				{
					id: "hiking",
					title: "Hiking",
					icon: "hiking-boot",
					description:
						"Out there with a mission to explore trails what AllTrails suggests around Ontario. Camping as soon as the weather permits. Ideal dinner date: Burger under the stars, with bugs. The goal is to go further north and eventually witness the Northern Lights.",
				},
				{
					id: "reading",
					title: "Reading",
					icon: "open-book",
					description:
						"Usually halfway through a novel that wanders out of reality. Currently reading Nights of Plague by Orhan Pamuk.",
				},
				{
					id: "cinema",
					title: "Cinema",
					icon: "cinema",
					description:
						"Always in the mood for a good thriller movie or a binge-worthy series. Vouching for Malayalm cinema. You can keep me grounded by talking about the latest releases, or by recommending a good classic.",
				},
				{
					id: "fishkeeping",
					title: "Fishkeeping",
					icon: "fish-tank",
					description:
						"Tending my planted freshwater tank and watching my fish making questionable decisions. Currently parenting a betta and a school of neon tetras! I also have a small plant corner in my apartment, and I enjoy keeping them alive and thriving. Hopefully, upgrading sooner, as long as my husband permits. 😅",
				},
			],
		} satisfies ExpandableShelf,
	},

	fishTank: {
		fish: [
			{ id: "fish-1", label: "First fish", speech: "blub." },
			{
				id: "fish-2",
				label: "Second fish",
				speech: "I'm not a neural network, I promise.",
			},
			{
				id: "fish-3",
				label: "Third fish",
				speech: "have you tried turning the filter off and on again?",
			},
		],
	},

	footer: {
		text: "still catching up with machines learning faster than me",
		links: [
			{ label: "GitHub", href: "https://github.com/nashira26", icon: "github" },
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/nashira-nasrudeen/",
				icon: "linkedin",
			},
			{
				label: "Instagram",
				href: "https://www.instagram.com/_naashira_/",
				icon: "instagram",
			},
		] satisfies FooterIconLink[],
	},
} as const;
