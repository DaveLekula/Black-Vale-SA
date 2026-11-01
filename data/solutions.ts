export interface Solution {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  linkText: string;
  need: string;
  build: string;
  outcome: string;
  intro: string;
  businessNeeds: string[];
  scopeExamples: string[];
  deliverables: string[];
  workingApproach: string;
  image: string;
  imagePosition: string;
  imageAlt: string;
}

export const solutions: Solution[] = [
  {
    id: 'digital-experiences',
    slug: 'websites-digital-experiences',
    number: 'N°01',
    title: 'DIGITAL EXPERIENCES',
    tagline: 'A stronger first impression.',
    description: 'Websites and digital experiences that make your business easier to discover, understand and engage with.',
    linkText: 'Explore Websites & Digital Experiences',
    need: 'Limited online visibility',
    build: 'Responsive websites and web applications',
    outcome: 'A credible, high-performing digital presence',
    intro: 'Your website is often the first thing a potential client or partner encounters. We design and build digital experiences that accurately represent what you do — clear, fast and built to convert.',
    businessNeeds: [
      'Your current website no longer reflects the quality of your work',
      'Potential clients struggle to understand what you offer',
      'Your site is slow, hard to update, or not mobile-friendly',
      'You need a client portal, booking system or web application',
    ],
    scopeExamples: [
      'Business websites and landing pages',
      'Client portals and member areas',
      'Web applications with custom interfaces',
      'Accessibility-compliant, SEO-optimised builds',
    ],
    deliverables: [
      'Designed and developed website or web application',
      'Responsive across all major devices and browsers',
      'SEO foundations, meta, structured data',
      'Performance-optimised assets and code',
      'Handover documentation and content guidance',
    ],
    workingApproach: 'We start with your goals and audience, design with feedback loops, build in structured phases and hand over a system you can maintain.',
    image: '/images/svc-websites.png',
    imagePosition: 'center center',
    imageAlt: 'Desktop monitor and smartphone showing a matching luxury website design',
  },
  {
    id: 'software-engineering',
    slug: 'custom-software',
    number: 'N°02',
    title: 'SOFTWARE ENGINEERING',
    tagline: 'Built around the way you work.',
    description: 'Purpose-built applications, portals and APIs that support the processes your business depends on.',
    linkText: 'Explore Custom Software',
    need: 'Processes that outgrow spreadsheets',
    build: 'Java/Spring Boot backends, Angular interfaces, APIs',
    outcome: 'Reliable systems your team can depend on',
    intro: 'Off-the-shelf software rarely fits the way your business actually operates. We engineer custom systems — from administration tools to connected platforms — built around your specific processes and built to scale.',
    businessNeeds: [
      'You are managing operations through spreadsheets and manual handovers',
      'You need a system that mirrors how your team actually works',
      'Existing software cannot be adapted to your requirements',
      'You need a reliable API layer to connect your data and services',
    ],
    scopeExamples: [
      'Business administration systems',
      'Custom portals and dashboards',
      'RESTful APIs and microservices',
      'Angular frontend interfaces with Spring Boot backends',
    ],
    deliverables: [
      'Fully engineered application or system',
      'Documented API and data structures',
      'Test coverage for critical paths',
      'Deployment-ready build with infrastructure guidance',
      'Operational handover and support transition plan',
    ],
    workingApproach: 'We define scope carefully, build in iterations and validate at each stage. We favour clear architecture and code that is maintainable by your team after delivery.',
    image: '/images/svc-software.png',
    imagePosition: 'center center',
    imageAlt: 'Laptop showing a development environment alongside a business application dashboard',
  },
  {
    id: 'ai-automation',
    slug: 'ai-workflow-automation',
    number: 'N°03',
    title: 'INTELLIGENT AUTOMATION',
    tagline: 'Less repetition. More possibility.',
    description: 'Connect your tools, simplify routine work and introduce practical AI where it creates measurable value.',
    linkText: 'Explore AI & Automation',
    need: 'Repetitive manual processes',
    build: 'Workflow automation and AI integrations',
    outcome: 'Fewer manual handovers, more consistent outcomes',
    intro: 'The value of automation is not novelty — it is time reclaimed and errors prevented. We identify where your business repeats itself unnecessarily and build practical solutions that reduce that friction.',
    businessNeeds: [
      'Your team spends significant time on repetitive, rule-based tasks',
      'Data moves between systems manually and introduces errors',
      'Approval workflows and document handling are slow',
      'You want to explore where AI can genuinely help your processes',
    ],
    scopeExamples: [
      'Business process automation and workflow orchestration',
      'Document generation and processing pipelines',
      'AI-assisted review, classification and summarisation tools',
      'System integrations and event-driven triggers',
    ],
    deliverables: [
      'Mapped and scoped automation plan',
      'Implemented and tested automation workflows',
      'Integration connectors and API bridges',
      'Monitoring and alerting for critical flows',
      'Handover documentation and operating guidelines',
    ],
    workingApproach: 'We begin with a discovery phase to identify the highest-value automation opportunities before building anything. AI features are introduced where they are practical and verifiable.',
    image: '/images/svc-automation.png',
    imagePosition: 'center 40%',
    imageAlt: 'Gold tracks carrying illuminated data beads through processing gates on a dark marble surface',
  },
  {
    id: 'systems-integration',
    slug: 'systems-integration-modernisation',
    number: 'N°04',
    title: 'SYSTEMS INTEGRATION',
    tagline: 'Connected tools. Cleaner operations.',
    description: 'Connect existing systems, replace manual handovers, modernise legacy applications and design maintainable APIs.',
    linkText: 'Explore Systems Integration',
    need: 'Fragmented tools and disconnected data',
    build: 'API connections and workflow bridges',
    outcome: 'Fewer manual handovers and a cleaner operational picture',
    intro: 'Most organisations have built up a collection of tools and systems over time that do not talk to each other. We design the connections that allow your data and processes to flow reliably between them.',
    businessNeeds: [
      'You re-enter data across multiple systems manually',
      'Your reporting pulls from disconnected sources',
      'You have a legacy system that works but cannot connect to modern tools',
      'You need a clear, maintainable API strategy for your platform',
    ],
    scopeExamples: [
      'API design and integration development',
      'Legacy system adapters and bridges',
      'Data synchronisation and ETL pipelines',
      'Third-party platform integrations',
    ],
    deliverables: [
      'Integration architecture and mapping documentation',
      'Developed and tested integration connectors',
      'Error handling, retry logic and monitoring',
      'API documentation and developer guide',
      'Transition and rollout plan',
    ],
    workingApproach: 'We map the current state thoroughly before touching anything, identify the minimal viable integration and build with maintainability as a primary concern.',
    image: '/images/svc-integration.png',
    imagePosition: 'center center',
    imageAlt: 'Dark computing modules connected by gold cables on a slate surface',
  },
  {
    id: 'cloud-delivery',
    slug: 'cloud-delivery-reliability',
    number: 'N°05',
    title: 'CLOUD & DELIVERY',
    tagline: 'Stable infrastructure. Dependable delivery.',
    description: 'Containerised deployments, CI/CD, observability and ongoing application care, scoped to your environment.',
    linkText: 'Explore Cloud & Delivery',
    need: 'Unreliable deployments and limited visibility',
    build: 'CI/CD pipelines, containers and observability',
    outcome: 'Predictable releases and faster recovery from issues',
    intro: 'Building good software is only part of the story. It needs to be deployed reliably, monitored continuously and maintained over time. We help you put the delivery foundations in place that keep your application performing as it should.',
    businessNeeds: [
      'Deployments are manual, risky or inconsistent',
      'You have limited visibility into how your application is performing',
      'You need a reliable way to deliver changes without downtime',
      'Your infrastructure is growing beyond what you can manage manually',
    ],
    scopeExamples: [
      'Containerisation with Docker and Kubernetes',
      'CI/CD pipeline setup and optimisation',
      'Application monitoring, logging and alerting',
      'Infrastructure-as-code and environment standardisation',
    ],
    deliverables: [
      'Deployment pipeline and environment configuration',
      'Container definitions and orchestration setup',
      'Monitoring dashboards and alert configuration',
      'Runbooks and operational documentation',
      'Ongoing care agreement (scoped separately)',
    ],
    workingApproach: 'We assess your current delivery process, identify the riskiest points and build improvements incrementally, starting with the changes that have the most immediate impact.',
    image: '/images/svc-cloud.png',
    imagePosition: 'center center',
    imageAlt: 'Dark server-room aisle lit with warm gold light from rack indicators',
  },
];

export const featuredSolutions = solutions.slice(0, 3);

export const solutionAnatomyItems = solutions.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
  need: s.need,
  build: s.build,
  outcome: s.outcome,
}));
