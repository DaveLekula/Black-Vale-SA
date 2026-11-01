export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: 'when-your-business-has-outgrown-spreadsheets',
    title: 'When your business has outgrown spreadsheets',
    excerpt: 'Spreadsheets are remarkably capable tools — until they are not. The signs are usually gradual, then sudden.',
    readTime: '4 min read',
    body: [
      `Spreadsheets are where most operational logic begins. A new process gets documented, a calculation gets built, a tracking list gets shared. For a long time, this works well.`,
      `The signs that a business has outgrown them tend to be gradual. A formula breaks when someone moves a row. Two people edit the same file and one version gets lost. A report takes three hours to assemble each week from five different tabs. A new team member cannot follow the logic without a guided walkthrough.`,
      `These are not failures of the spreadsheet — they are signals that the process has grown to a scale and complexity that requires a different kind of tool.`,
      `The decision to build a dedicated system is often delayed because it feels like a large commitment. In most cases, the right approach is narrower than expected: identify the single process causing the most friction, define what the system actually needs to do, and build that precisely. Not a platform. Not a suite. A focused, well-built tool for a specific job.`,
      `The questions worth asking before committing: How many people use this process? How often does it change? What breaks when it fails? If the answers suggest that a manual error or a lost file has meaningful consequences for the business, the case for a purpose-built system is usually straightforward.`,
      `Custom software does not replace the thinking that goes into a good spreadsheet — it preserves it, makes it available to the whole team consistently, and removes the fragility that comes from managing complexity in a format not designed for it.`,
    ],
  },
  {
    slug: 'a-website-should-do-more-than-look-good',
    title: 'A website should do more than look good',
    excerpt: 'A well-designed website earns attention. A well-built one converts it. The distinction matters more than most briefs acknowledge.',
    readTime: '3 min read',
    body: [
      `A website brief almost always begins with aesthetics. Clean, modern, professional. These are legitimate requirements, but they describe the surface, not the function.`,
      `The more useful question is: what should this website actually do? For most businesses, the answer involves some combination of establishing credibility, explaining an offer clearly, and making it easy to take a next step — whether that is an enquiry, a booking, a download or a call.`,
      `Design serves all of these, but so does structure. A potential client who cannot quickly find what they are looking for will leave. A form that breaks on mobile will lose an enquiry. A page that takes five seconds to load will underperform in search and frustrate users before they have seen a word of content.`,
      `The practical implication is that a website project benefits from being specified beyond look and feel. What are the entry points? What does success look like — a contact form submission, a phone call, a resource download? What information does a typical visitor need before they are ready to act?`,
      `Answering these questions before design begins does not constrain creativity — it focuses it. The strongest websites are ones where the design decisions are in service of something clear, and where the build is solid enough that the design can actually do its job.`,
      `A website that looks good and works reliably is not a high bar. It is, however, a more specific one than most projects set out to meet.`,
    ],
  },
  {
    slug: 'where-automation-starts-to-make-business-sense',
    title: 'Where automation starts to make business sense',
    excerpt: 'Not every process worth automating is obvious. The ones worth finding share a few common characteristics.',
    readTime: '5 min read',
    body: [
      `Automation is frequently described in terms of scale — the argument that it pays off at high volume. This is true, but it misses a category of processes where automation makes sense even when volume is modest: those where consistency and accuracy matter more than speed.`,
      `An approval workflow that sometimes takes a day and sometimes takes two weeks does not cost the business in volume terms, but the inconsistency creates downstream problems — delayed projects, uncertain cashflow, team frustration. Automating the routing and reminders does not require sophisticated technology. It requires mapping the process, identifying where it stalls, and building a reliable path through it.`,
      `The processes most worth looking at first tend to share a few characteristics. They are rule-based: given a certain input or condition, the outcome is predictable. They are repetitive: the same steps happen again and again. They are consequential: when they are done poorly, something else breaks. And they are currently manual: a person is doing work that a system could handle.`,
      `Document generation is a common example. If your team produces proposals, contracts or reports by copying content between templates and filling in variable fields, that is an automation opportunity — not because it is difficult for a person to do, but because a person doing it introduces errors, slows things down, and takes time from higher-value work.`,
      `AI adds a genuinely useful layer in specific contexts: reviewing documents for completeness, classifying incoming requests, surfacing relevant information from large data sets. These applications are practical and verifiable. They sit alongside automation rather than replacing it. The useful question is not "what can AI do for us?" but "where does unclear, unstructured input currently slow our operations down, and could AI help us handle that input more reliably?"`,
      `The practical starting point is mapping your most friction-filled processes before deciding on any technology. The technology follows from the problem, not the other way around.`,
    ],
  },
];
