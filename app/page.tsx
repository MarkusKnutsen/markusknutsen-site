import Image from "next/image";
import { SectionNav } from "@/components/section-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const impactItems = [
	{
		title: "Automatic Pipelay Analysis Framework",
		text: "Reworked an internal Python tool from large, repetitive code files into a cleaner modular structure with better maintainability, clearer logic, and documentation for future developers.",
	},
	{
		title: "State tracking for simulations",
		text: "Designed a restart-safe state tracking flow so engineers can stop and resume simulations without losing progress in the simulation sequence or Hs reduction logic.",
	},
	{
		title: "Engineer-first user experience",
		text: "Focused on removing unnecessary technical friction by simplifying input setup, catching common user errors early, and reducing repeated manual work.",
	},
	{
		title: "Versioning and rollout",
		text: "Introduced version checks with optional automatic updates so teams work from the same release instead of drifting across local versions.",
	},
	{
		title: "Operational workflow improvements",
		text: "Added validation checks before long runs, Teams notifications for completed simulations via Power Automate, and post-update support for users.",
	},
	{
		title: "Usage analytics",
		text: "Implemented statistics collection to understand how the tool is used, which engineer choices are common, and where future improvements create most value.",
	},
];

const selectedProjects = [
	"Utsira Manifold",
	"Utsira Tie-In Manifold",
	"Utsira XT Hatches on Frame",
	"Utsira Centre Roof Hatch",
	"Ringvei ITS",
	"Statfjord A Covers",
	"Johan Sverdrup Phase 3 PiP Rigid Production Line",
	"Johan Sverdrup Phase 3 Covers",
	"LNG Mozambique Production Manifold",
	"LNG Mozambique Production Manifold Foundation",
];

const methods = [
	"Installation Analysis",
	"Offshore Operations",
	"Hydrodynamics",
	"Python",
	"OrcaFlex",
	"CFD",
	"Data Analysis",
	"Automation",
	"Power Automate",
	"Git",
	"DevOps",
	"Docker",
	"Linux",
	"JavaScript",
	"SQL",
	"LaTeX",
];

const timeline = [
	{
		role: "Analysis Engineer & Developer",
		company: "Entail",
		companyUrl: "https://www.entail.no/",
		period: "Aug 2026 — Present",
		location: "Oslo, Norway",
		bullets: [
			"Client-facing engineering analysis combining hydrodynamics, visualization, and complex dynamic simulations.",
			"Turning engineering methods into reliable software for analysis workflows and Entail's SaaS platform.",
			"Working across software development and offshore engineering teams to keep tools grounded in practical analysis needs.",
		],
	},
	{
		role: "Installation Analysis Engineer",
		company: "TechnipFMC",
		period: "Aug 2024 — Jul 2026",
		location: "Lysaker, Oslo",
		bullets: [
			"Installation analysis of offshore structures and pipelines for safe and efficient subsea operations.",
			"Python development for engineering workflows, data processing, and analysis automation.",
			"Technical data analysis and visualization combining OrcaFlex and Python.",
			"Offshore project engineering on installation vessels, directly supporting and executing subsea operations.",
		],
	},
	{
		role: "Operations Technician",
		company: "Kiona",
		period: "May 2023 — Jul 2024",
		location: "Trondheim, Norway",
		bullets: [
			"Worked in a 24/7 monitoring environment with large-scale sensor and alarm datasets across Norway and Sweden.",
			"Supported troubleshooting, operational follow-up, and customer-facing service work.",
		],
	},
	{
		role: "M.Sc. Marine Technology and Information Technology",
		company: "NTNU",
		period: "Aug 2018 — Jun 2024",
		location: "Trondheim, Norway",
		bullets: [
			"Specialized in hydrodynamics and CFD.",
			"Thesis: Numerical Investigation of Uniform Flow Around Dual Step Cylinders.",
		],
	},
];

export default function HomePage() {
	return (
		<main className="pageShell">
			<div className="ambient ambient--one" />
			<div className="ambient ambient--two" />

			<header className="topbar">
				<div className="topbar__desktop">
					<a href="#top" className="brand">
						Markus Knutsen
					</a>
					<div className="topbar__actions">
						<SectionNav />
						<ThemeToggle />
					</div>
				</div>

				<details className="topbarMobile">
					<summary className="topbarMobile__summary">
						<span className="brand">Markus Knutsen</span>
						<span className="srOnly"> — Toggle navigation</span>
						<span className="topbarMobile__toggle" aria-hidden="true">
							<span className="topbarMobile__line topbarMobile__line--one" />
							<span className="topbarMobile__line topbarMobile__line--two" />
						</span>
					</summary>

					<div className="topbarMobile__panel">
						<div className="topbarMobile__nav">
							<SectionNav />
						</div>
						<div className="topbarMobile__theme">
							<ThemeToggle />
						</div>
					</div>
				</details>
			</header>

			<section id="top" className="hero">
				<div className="hero__inner card">
					<div className="hero__content">
						<p className="eyebrow">
							Analysis Engineer &amp; Developer · Entail
						</p>

						<h1>
							Building practical engineering software for offshore analysis and
							operations.
						</h1>

						<p className="hero__lead">
							I work as an Analysis Engineer &amp; Developer at{" "}
							<a className="textLink" href="https://www.entail.no/">Entail</a>
							, combining client-facing analysis with engineering software
							development. My work brings together hydrodynamics, dynamic
							simulation, and visualization to turn engineering methods into
							reliable, practical tools.
						</p>

						<div className="hero__meta">
							<a href="mailto:markus.knutsen@hotmail.com">
								markus.knutsen@hotmail.com
							</a>
							<a
								href="https://linkedin.com/in/markus-knutsen-38a03059"
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/MarkusKnutsen"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</div>

						<div className="hero__ctaRow">
							<a
								className="button button--primary"
								href="/Markus_CV.pdf"
								target="_blank"
								rel="noreferrer"
							>
								Open CV
							</a>
							<a
								className="button button--primary"
								href="/Master_Thesis.pdf"
								target="_blank"
								rel="noreferrer"
							>
								Open Thesis
							</a>
							<a className="button button--ghost" href="#impact">
								View selected work
							</a>
						</div>
					</div>

					<div className="hero__aside">
						<div className="portraitWrap">
							<Image
								src="/profile.jpg"
								alt="Portrait of Markus Knutsen"
								width={520}
								height={620}
								priority
								className="portrait"
							/>
						</div>

						<p className="heroLocation">Oslo, Norway</p>

						<div className="heroCardMini">
							<p className="heroCardMini__label">Now at Entail</p>
							<p className="heroCardMini__text">
								Client analysis and software development, connected by hands-on engineering.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="gridTwoCol">
				<article className="card proseCard">
					<p className="sectionLabel">About</p>
					<h2>Engineering mindset with a builder’s approach</h2>
					<p>
						My background combines marine technology, information technology,
						hydrodynamics, and hands-on offshore experience. That mix has shaped
						how I approach problems: understand the real operation, identify
						what slows people down, and build something that is both technically
						solid and practical to use.
					</p>
					<p>
						At <a className="textLink" href="https://www.entail.no/">Entail</a>,
						I combine customer analysis projects with the development of
						engineering software. I work between software developers and
						offshore engineers, helping translate analysis methods into
						robust applications for the company&apos;s SaaS platform.
					</p>
					<p>
						Previously at TechnipFMC, I worked with installation analysis of
						structures and pipelines, Python-based automation, data analysis,
						and project engineering offshore. The work I enjoy most is when a
						vague need turns into a concrete tool, workflow, or improvement that
						helps other engineers work better.
					</p>
				</article>

				<article className="card statsCard">
					<p className="sectionLabel">Snapshot</p>
					<div className="statsList">
						<div>
							<span>Current role</span>
							<strong>Analysis Engineer &amp; Developer</strong>
						</div>
						<div>
							<span>Current company</span>
							<strong><a className="textLink" href="https://www.entail.no/">Entail</a></strong>
						</div>
						<div>
							<span>Core stack</span>
							<strong>Python · OrcaFlex · Automation</strong>
						</div>
						<div>
							<span>Domain</span>
							<strong>Hydrodynamics, dynamic analysis, and offshore operations</strong>
						</div>
						<div>
							<span>Strength</span>
							<strong>
								Bridging engineering work and software development
							</strong>
						</div>
					</div>
				</article>
			</section>

			<section id="impact" className="card sectionBlock">
				<div className="sectionHeading">
					<div>
						<p className="sectionLabel">Selected impact</p>
						<h2>
							Automated Pipelay Analysis Framework and workflow improvements
						</h2>
					</div>
					<p className="sectionIntro">
						At TechnipFMC, a large part of my work involved improving an internal Python-based
						automatic pipelay analysis framework by making it more maintainable,
						more robust, and easier for engineers to use.
					</p>
				</div>

				<div className="impactGrid">
					{impactItems.map((item) => (
						<article key={item.title} className="impactCard">
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>

			<section id="projects" className="gridTwoCol gridTwoCol--wideRight">
				<article className="card sectionBlock">
					<p className="sectionLabel">Projects</p>
					<h2>Selected project work at TechnipFMC</h2>
					<div className="projectList">
						{selectedProjects.map((project) => (
							<span key={project} className="pill">
								{project}
							</span>
						))}
					</div>
				</article>

				<article className="card sectionBlock">
					<p className="sectionLabel">Methods & tools</p>
					<h2>Technical areas I work with</h2>
					<div className="projectList">
						{methods.map((method) => (
							<span key={method} className="pill pill--soft">
								{method}
							</span>
						))}
					</div>
					<p className="supportText">
						I am especially motivated by development work that stays
						close to real engineering problems — offshore operations,
						hydrodynamics, simulation, and internal tooling with measurable
						practical value.
					</p>
				</article>
			</section>

			<section className="card sectionBlock">
				<p className="sectionLabel">Deep dive</p>
				<h2>Why offshore experience changed how I engineer</h2>
				<div className="storyGrid">
					<p>
						Going offshore gave me a much better understanding of what analysis
						work actually feeds into. It is one thing to study procedures and
						models from the office. It is another to see how many disciplines
						and decisions need to line up onboard for an operation to work
						safely and efficiently.
					</p>
					<p>
						That experience made me more practical. It changed how I think about
						analysis requests, design decisions, and operational trade-offs.
						Sometimes the best solution is not a new tool or a new beam — it is
						choosing the simpler and more workable option early.
					</p>
				</div>
			</section>

			<section id="experience" className="card sectionBlock">
				<div className="sectionHeading">
					<div>
						<p className="sectionLabel">Experience</p>
						<h2>Career timeline</h2>
					</div>
				</div>

				<div className="timeline">
					{timeline.map((entry) => (
						<article
							key={`${entry.role}-${entry.period}`}
							className="timelineItem"
						>
							<div className="timelineItem__meta">
								<span>{entry.period}</span>
								{entry.location && <span>{entry.location}</span>}
							</div>
							<div className="timelineItem__content">
								<h3>{entry.role}</h3>
								<p className="timelineItem__company">
									{entry.companyUrl ? (
										<a className="textLink" href={entry.companyUrl}>{entry.company}</a>
									) : entry.company}
								</p>
								<ul>
									{entry.bullets.map((bullet) => (
										<li key={bullet}>{bullet}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="gridTwoCol">
				<article className="card sectionBlock">
					<p className="sectionLabel">Other work at TechnipFMC</p>
					<h2>Additional contributions</h2>
					<ul className="cleanList">
						<li>
							Large-scale verification work for offshore weather-based
							installation methods, including generation, simulation, analysis
							and data processing and visualization of more than 40 000 load
							cases.
						</li>
						<li>
							Contributor to the codebase for TechnipFMC&apos;s lifting analysis
							tool.
						</li>
						<li>
							Developed smaller internal scripts for team-specific tasks and
							efficiency gains.
						</li>
						<li>
							Offshore- and Mobilization work for Utsira High iEPCI project
							during RFO and Intervention campaign
						</li>
					</ul>
				</article>

				<article className="card sectionBlock">
					<p className="sectionLabel">Current chapter</p>
					<h2>Connecting analysis and software</h2>
					<p>
						Since August 2026, I have worked at Entail as an Analysis
						Engineer &amp; Developer. My role combines customer-facing
						engineering analysis with developing the software behind it,
						from focused analytical studies to complex simulation campaigns.
					</p>
					<p>
						Working on both sides helps me keep the software close to real
						engineering needs. I help turn analysis methods into maintainable
						applications, collaborating with software and offshore engineering
						teams as Entail develops its SaaS platform.
					</p>
					<a className="button button--ghost" href="https://www.entail.no/">About Entail ↗</a>
				</article>
			</section>

			<section id="contact" className="card contactCard">
				<div>
					<p className="sectionLabel">Contact</p>
					<h2>Let’s connect</h2>
					<p>
						Feel free to reach out if you want to talk about engineering
						software, offshore operations, Python development, or shared
						technical interests.
					</p>
				</div>

				<div className="contactActions">
					<a
						className="button button--primary"
						href="mailto:markus.knutsen@hotmail.com"
					>
						Email me
					</a>
					<a
						className="button button--ghost"
						href="https://linkedin.com/in/markus-knutsen-38a03059"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					<a
						className="button button--ghost"
						href="https://github.com/MarkusKnutsen"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</div>
			</section>
		</main>
	);
}
