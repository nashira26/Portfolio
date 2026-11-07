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
	| "child-care";

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
	internalLink?: InternalActionLink;
	statusNote?: string;
	chart?: AurocChartData;
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
		{ id: "projects", label: "Projects", icon: "shelf-swe" },
		{ id: "experience", label: "Experience", icon: "shelf-experience" },
		{ id: "education", label: "Education", icon: "shelf-background" },
		{ id: "toolbox", label: "Toolbox", icon: "shelf-toolbox" },
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
					accentBadge: "WAI Hackathon 2026",
					description:
						"One portal for Ontario's fragmented child-care waitlists. Parents find licensed centres on a Leaflet/OpenStreetMap map built from Ontario's open data, apply once, and track every application and offer from a single dashboard. Centres get their own portal to review applications and update statuses. A Gemini-powered assistant reads each centre's published policies and forms, flags missing information, and drafts applications and follow-ups for the parent to approve. A full-stack TypeScript app (React, Express, MongoDB), built with Team Coalesce for the Women in AI Canada Hackathon 2026.",
					keyResult:
						"grounded in centre documents · human approval before anything is sent",
					tags: [
						"TypeScript",
						"React",
						"Express",
						"MongoDB",
						"Gemini",
						"Leaflet",
						"Tailwind CSS",
					],
					href: "https://github.com/nashira26/CareQ",
					linkLabel: "View on GitHub ↗",
					demoHref: "https://careq-gfe9.onrender.com/",
					demoLabel: "Try the live demo ↗",
				},
				{
					id: "llm-judge-uncertainty",
					title: "LLM-as-a-Judge Uncertainty",
					icon: "magnifying-glass",
					rightLabel: "research",
					description:
						"LLMs are increasingly used to judge whether content is safe, but how do you know when the judge itself is wrong? For my MEng research at TMU's Trustworthy AI Lab, I built a Python evaluation framework comparing 14+ semantic, NLI, lexical and consistency-based uncertainty methods for toxicity detection across several models and safety datasets. I also evaluated Adaptive Conformal Semantic Entropy (ACSE), and dug into why consistency-based methods miss judges that are confidently wrong (single-cluster collapse and soft-assignment compression).",
					keyResult: "NLI 0.817 / Lexical 0.895 AUROC on ToxicChat",
					chart: {
						title: "AUROC on ToxicChat",
						ariaLabel:
							"Horizontal bar chart titled AUROC on ToxicChat showing NLI 0.817 and Lexical 0.895 compared against a coin flip baseline at 0.5",
						baselineValue: 0.5,
						baselineLabel: "coin flip",
						bars: [
							{ label: "NLI", value: 0.817, displayValue: "0.817" },
							{ label: "Lexical", value: 0.895, displayValue: "0.895" },
						],
					},
					tags: [
						"Python",
						"Hugging Face Transformers",
						"scikit-learn",
						"Uncertainty quantification",
						"LLM evaluation",
					],
					statusNote: "paper in progress",
				},
				{
					id: "ai-web-form-agent",
					title: "AI Web-Form Agent",
					icon: "robot-hand",
					rightLabel: "AI agent",
					description:
						"Most form-filling bots break when a page changes. This one looks at the page first. Gemini drives a real Playwright browser through tool-based actions in an observe-and-act loop, so it works from what's actually on screen rather than hardcoded selectors. It runs as an HTTP API with input validation, retry handling, scheduled runs and job-overlap protection, so it can run unattended.",
					tags: ["TypeScript", "Gemini", "Vercel AI SDK", "Playwright"],
					href: "https://github.com/nashira26/Web-form-agent",
				},
				{
					id: "emotion-conditioned-dialogue",
					title: "Emotion-Conditioned Dialogue",
					icon: "speech-bubble",
					rightLabel: "NLP",
					description:
						"Can a chatbot reply with the right emotion, not just the right words? I fine-tuned BART on the DailyDialog dataset for emotion-conditioned response generation, and analysed how adding emotional context changes what the model says.",
					keyResult:
						"3-class accuracy 50.95% → 54.70%, macro-F1 37.12% → 40.25%",
					tags: ["PyTorch", "BART", "Hugging Face"],
					href: "https://github.com/nashira26/Emotion-Conditioned-Conversational-Language-Modeling",
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
						"Built a multi-tenant maintenance-management SaaS serving 3 enterprise clients. I wrote backend microservices and REST APIs in Node.js, Express, TypeScript and MongoDB across 7+ services (work orders, assets, customers, sites, analytics and the API gateway), and delivered a contract-management module end to end in React/Next.js, from clause and template versioning to approval workflows, pricing, reporting and email notifications. I also set up role-based access with Auth0 and JWT, made the APIs 30% faster through query and schema refactoring, load-tested with Artillery, led the migration of core services to NestJS, and mentored 4+ interns.",
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
						"scikit-learn",
						"Hugging Face",
						"NumPy",
						"pandas",
						"NLP",
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
						"React",
						"Next.js",
						"Redux",
						"MongoDB",
						"PostgreSQL",
					],
				},
				{
					label: "Tools",
					items: ["Git", "Docker", "Linux", "AWS", "GCP", "Playwright"],
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
