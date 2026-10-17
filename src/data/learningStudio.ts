/* Topic-specific instructional examples: fictional contexts, not official exams. */
export const studioCourses = {
  "ai": {
    "title": "Generative AI & ChatGPT",
    "tag": "Ask • verify • improve",
    "intro": "Move from a plausible AI answer to a responsible, evidence-led workplace result.",
    "flow": [
      "Define a safe task",
      "Generate and challenge",
      "Validate with a human"
    ],
    "scenes": [
      [
        "How AI works",
        "A language model can draft helpful text, but fluency is not evidence.",
        [
          "AI draft",
          "Producing plausible text does not prove that a claim is true."
        ],
        [
          "Source check",
          "Compare important claims with authoritative, current evidence."
        ],
        [
          "Human owner",
          "A named person remains accountable for the final decision."
        ],
        "A chatbot presents a confident but unsourced training price. What comes next?",
        [
          "Publish it because it sounds right",
          "Verify pricing against an approved price list",
          "Ask for a more confident response"
        ],
        1,
        "Use authoritative records before quoting price or contractual details."
      ],
      [
        "Writing a reliable prompt",
        "Specific constraints and success criteria reduce rework.",
        [
          "Task",
          "Describe the job, reader and desired outcome."
        ],
        [
          "Boundaries",
          "State what cannot be assumed or exposed."
        ],
        [
          "Review",
          "Request a checklist for missing facts before sending."
        ],
        "Which prompt gives a useful and safe result?",
        [
          "Write something professional",
          "Draft a 120-word reply using only these approved facts; flag missing dates",
          "Guess the missing date and draft a polished reply"
        ],
        1,
        "A strong prompt specifies audience, inputs, format and unknowns."
      ],
      [
        "Verify before sharing",
        "Separate observations, assumptions and claims in every research summary.",
        [
          "Claim",
          "Highlight every number and consequential statement."
        ],
        [
          "Evidence",
          "Check the original source and its publication date."
        ],
        [
          "Decision",
          "Document confidence and unresolved gaps."
        ],
        "Two websites disagree about a certification rule. What is safest?",
        [
          "Choose the first search result",
          "Ask AI to invent a compromise",
          "Review the current official provider requirements"
        ],
        2,
        "Official, current source materials should determine requirements."
      ],
      [
        "Better workplace documents",
        "Drafting saves time only if the result preserves facts and approval routes.",
        [
          "Capture",
          "Record approved source facts and audience."
        ],
        [
          "Draft",
          "Produce a clearly structured document."
        ],
        [
          "Approve",
          "Check names, deadlines, tone and permissions."
        ],
        "An AI summary assigns a deadline not found in the meeting notes. What should you do?",
        [
          "Remove or verify the deadline before sharing",
          "Assume it is a helpful suggestion",
          "Make the deadline earlier"
        ],
        0,
        "Never turn a generated suggestion into an asserted commitment."
      ],
      [
        "Work safely with numbers",
        "Calculation, interpretation and causal explanation are different activities.",
        [
          "Clean",
          "Check missing values and duplicated records."
        ],
        [
          "Calculate",
          "Recompute totals outside the model."
        ],
        [
          "Interpret",
          "Avoid claiming a cause without evidence."
        ],
        "An AI-generated spreadsheet total differs from your calculator. What next?",
        [
          "Use the prettier number",
          "Recheck source cells and formulas independently",
          "Average both numbers"
        ],
        1,
        "Reconcile arithmetic against underlying values."
      ],
      [
        "Design a safe AI workflow",
        "A repeatable workflow needs permissions, review and recovery.",
        [
          "Trigger",
          "Start with approved, non-sensitive inputs."
        ],
        [
          "Gate",
          "Require human confirmation before action."
        ],
        [
          "Audit",
          "Retain decisions and an exception path."
        ],
        "Which control best protects an AI-assisted client email?",
        [
          "Automate sending without review",
          "Let recipients fix mistakes",
          "Require human approval and logged evidence"
        ],
        2,
        "Do not send consequential output until an authorised reviewer approves it."
      ]
    ]
  },
  "cyber": {
    "title": "Cybersecurity Essentials",
    "tag": "Identify • protect • recover",
    "intro": "Practice safer decisions using authorised, fictional security scenarios.",
    "flow": [
      "Identify the risk",
      "Apply least privilege",
      "Verify and respond"
    ],
    "scenes": [
      [
        "Security fundamentals",
        "Confidentiality, integrity and availability describe three distinct security goals.",
        [
          "Asset",
          "Identify what matters and who owns it."
        ],
        [
          "Threat",
          "Describe a plausible cause of harm."
        ],
        [
          "Control",
          "Choose a safeguard and how to test it."
        ],
        "A shared café laptop contains customer bookings. What is the first useful step?",
        [
          "Publish all bookings for transparency",
          "Identify data owners and who needs access",
          "Disable backups"
        ],
        1,
        "Asset ownership and access needs inform proportionate security controls."
      ],
      [
        "Passwords and MFA",
        "Strong authentication reduces the impact of password theft.",
        [
          "Unique secret",
          "Use distinct passwords or passkeys per service."
        ],
        [
          "Second factor",
          "Require a separate, phishing-resistant factor where available."
        ],
        [
          "Recovery",
          "Protect account recovery methods and devices."
        ],
        "A staff member reuses one password on five sites. Best recommendation?",
        [
          "Keep it but rotate every year",
          "Use a password manager and unique credentials",
          "Email the password to management"
        ],
        1,
        "Credential reuse multiplies the impact of one compromise."
      ],
      [
        "Spot social engineering",
        "Urgency, secrecy and unfamiliar payment instructions deserve verification.",
        [
          "Pause",
          "Identify the requested action and potential harm."
        ],
        [
          "Verify",
          "Use a known, independent contact channel."
        ],
        [
          "Report",
          "Preserve evidence and inform the authorised team."
        ],
        "An email says 'pay now' and shows a new bank account. What is safest?",
        [
          "Call the existing finance contact using a known number",
          "Reply with card details",
          "Forward the email to everyone"
        ],
        0,
        "Independently verify payment changes through a known channel."
      ],
      [
        "Secure your devices",
        "Safe configuration reduces ordinary endpoint risks.",
        [
          "Update",
          "Use trusted vendor security updates."
        ],
        [
          "Restrict",
          "Use standard accounts and device locks."
        ],
        [
          "Back up",
          "Maintain a separate, recoverable copy."
        ],
        "A colleague offers an unknown USB stick with software. What should you do?",
        [
          "Install it immediately",
          "Use approved software sources and escalation channels",
          "Disable the device security controls"
        ],
        1,
        "Unknown media must not bypass device and software policies."
      ],
      [
        "Network and privacy",
        "Encrypted connections and secure sharing protect data in transit.",
        [
          "Classify",
          "Know which information is sensitive."
        ],
        [
          "Share",
          "Choose approved identities and permissions."
        ],
        [
          "Review",
          "Expire unnecessary links and access."
        ],
        "Which sharing action is most protective?",
        [
          "Send a public edit link",
          "Give everyone administrator access",
          "Share only with named recipients who need it"
        ],
        2,
        "Least-privilege access reduces accidental exposure."
      ],
      [
        "Respond and recover",
        "An incident response is structured, not improvised.",
        [
          "Contain",
          "Limit additional damage through approved steps."
        ],
        [
          "Record",
          "Preserve timeline and relevant evidence."
        ],
        [
          "Recover",
          "Restore safely and review root cause."
        ],
        "You suspect an account was compromised. What should you do?",
        [
          "Hide it until it becomes serious",
          "Follow the incident reporting and account recovery process",
          "Delete all logs"
        ],
        1,
        "Escalate promptly and preserve evidence."
      ]
    ]
  },
  "it-support": {
    "title": "IT Support Fundamentals",
    "tag": "Observe • test • resolve",
    "intro": "Solve user issues through reproducible checks and clear service communication.",
    "flow": [
      "Describe the symptom",
      "Isolate one cause",
      "Document the result"
    ],
    "scenes": [
      [
        "Know the computer",
        "Different symptoms point to different hardware or software layers.",
        [
          "Hardware",
          "Identify RAM, storage, power and connected devices."
        ],
        [
          "Operating system",
          "Confirm device and OS version before changes."
        ],
        [
          "Evidence",
          "Record symptoms and observed state."
        ],
        "A computer will not start. Which action comes first?",
        [
          "Wipe the operating system",
          "Check power, connections and observed indicators",
          "Replace all hardware"
        ],
        1,
        "Begin with safe, basic evidence collection."
      ],
      [
        "Manage support tickets",
        "A good ticket makes the next technician effective.",
        [
          "Impact",
          "Record who is affected and how severely."
        ],
        [
          "History",
          "List steps already attempted and their results."
        ],
        [
          "Closure",
          "Confirm the user can repeat the expected outcome."
        ],
        "Which ticket is easiest to investigate?",
        [
          "Computer broken",
          "Cannot sign in; started 09:10; error recorded; three users affected",
          "Please fix ASAP"
        ],
        1,
        "Specific symptoms, time and impact make issues reproducible."
      ],
      [
        "Inspect operating systems",
        "Start with read-only diagnostics, not destructive commands.",
        [
          "Identify",
          "Confirm OS, version and device name."
        ],
        [
          "Inspect",
          "Use approved status tools and event logs."
        ],
        [
          "Change",
          "Escalate privileged remediation before applying it."
        ],
        "A learner wants to solve slow startup. What is the safer first step?",
        [
          "Disable every service",
          "Collect startup and resource observations",
          "Reinstall without backup"
        ],
        1,
        "Measure system health before making changes."
      ],
      [
        "Trace a network fault",
        "Work outward from the device through the network stack.",
        [
          "Local",
          "Check adapter, Wi‑Fi and IP configuration."
        ],
        [
          "Path",
          "Test router and network connectivity."
        ],
        [
          "Service",
          "Distinguish DNS failure from reachability."
        ],
        "You can ping an IP address but not open its hostname. Which area do you test?",
        [
          "Monitor brightness",
          "DNS resolution",
          "Keyboard layout"
        ],
        1,
        "A name-only failure suggests checking DNS."
      ],
      [
        "Maintain and back up",
        "Updates and backup require rollback and restoration checks.",
        [
          "Plan",
          "Confirm support window, owner and backup."
        ],
        [
          "Apply",
          "Use approved changes with checkpoints."
        ],
        [
          "Recover",
          "Verify rollback or restore in a safe environment."
        ],
        "What demonstrates a backup works?",
        [
          "A green icon only",
          "A recent, successful restore test",
          "An email promising a backup"
        ],
        1,
        "Restore testing establishes usable recovery evidence."
      ],
      [
        "Communicate and close",
        "Resolution includes a clear explanation and agreed result.",
        [
          "Listen",
          "Restate symptoms without blame."
        ],
        [
          "Explain",
          "Translate technical steps into user language."
        ],
        [
          "Confirm",
          "Ask the user to verify the desired workflow."
        ],
        "The technician says 'fixed' but the user cannot log in. What next?",
        [
          "Close the ticket anyway",
          "Verify the expected login with the user",
          "Delete the ticket"
        ],
        1,
        "User acceptance must be tied to an observed outcome."
      ]
    ]
  },
  "microsoft-productivity": {
    "title": "Microsoft 365 & Excel",
    "tag": "Organise • calculate • collaborate",
    "intro": "Turn everyday office workflows into accurate, accessible and permission-aware results.",
    "flow": [
      "Prepare information",
      "Create the deliverable",
      "Check and share"
    ],
    "scenes": [
      [
        "Navigate productivity tools",
        "Choose the right Microsoft 365 tool and file location.",
        [
          "Outlook",
          "Communicate with clear recipients and subjects."
        ],
        [
          "OneDrive",
          "Store personal working documents securely."
        ],
        [
          "Teams",
          "Collaborate on shared work with permissions."
        ],
        "Where should a draft personal work document usually live?",
        [
          "An anonymous public link",
          "Your approved OneDrive location",
          "A shared password email"
        ],
        1,
        "Choose approved storage and permissions appropriate to the work."
      ],
      [
        "Write accessible documents",
        "Consistent document structure helps every reader.",
        [
          "Headings",
          "Use semantic heading styles."
        ],
        [
          "Meaning",
          "Write descriptive link and image descriptions."
        ],
        [
          "Review",
          "Check spelling, clarity and reading order."
        ],
        "Which makes a Word document easier for screen readers?",
        [
          "Manually bold every heading",
          "Use built-in heading styles",
          "Insert empty text boxes"
        ],
        1,
        "Semantic heading styles provide meaningful document structure."
      ],
      [
        "Collaborate securely",
        "Sharing a file does not require sharing it with everyone.",
        [
          "Recipients",
          "Choose the smallest appropriate audience."
        ],
        [
          "Rights",
          "Use view access when editing is not needed."
        ],
        [
          "Audit",
          "Review and remove obsolete access."
        ],
        "A colleague only needs to read a report. Give them:",
        [
          "An anonymous edit link",
          "Owner permissions",
          "Read-only access to the appropriate file"
        ],
        2,
        "Grant only the permissions needed for the task."
      ],
      [
        "Use Excel formulas",
        "Well-formed formulas refer to clear ranges and can be recalculated.",
        [
          "Structure",
          "Use headers and consistent data types."
        ],
        [
          "Formula",
          "Test sums, averages and reference ranges."
        ],
        [
          "Verify",
          "Reconcile formulas with a manual sample."
        ],
        "Which formula totals cells B2 through B10?",
        [
          "=SUM(B2:B10)",
          "=COUNT(A1)",
          "=B2-B10"
        ],
        0,
        "SUM aggregates numeric values in the selected range."
      ],
      [
        "Analyse and visualise data",
        "A useful chart has a clear comparison and honest scale.",
        [
          "Prepare",
          "Remove duplicates and label units."
        ],
        [
          "Compare",
          "Choose suitable rows, columns and chart types."
        ],
        [
          "Explain",
          "Describe observations, not unsupported causes."
        ],
        "Which chart most clearly compares sales by category?",
        [
          "A decorative 3D pie with no labels",
          "A labelled bar chart",
          "A blank graph"
        ],
        1,
        "A labelled bar chart enables readable category comparison."
      ],
      [
        "Coordinate office workflows",
        "Meeting notes are valuable when decisions and owners are explicit.",
        [
          "Capture",
          "Separate actions from background discussion."
        ],
        [
          "Assign",
          "Confirm an owner and an agreed date."
        ],
        [
          "Track",
          "Update status and unresolved dependencies."
        ],
        "An AI summary invents a project owner. What do you do?",
        [
          "Publish and assign the person",
          "Verify ownership against the meeting record",
          "Delete the entire document"
        ],
        1,
        "Actions require verified ownership and agreement."
      ]
    ]
  },
  "cloud": {
    "title": "Cloud Computing Fundamentals",
    "tag": "Choose • secure • monitor",
    "intro": "Understand shared responsibility, services and basic cost controls without a cloud subscription.",
    "flow": [
      "Classify a workload",
      "Design safe access",
      "Monitor cost and outcome"
    ],
    "scenes": [
      [
        "What makes cloud different",
        "Cloud services trade owned infrastructure for metered, managed capacity.",
        [
          "On demand",
          "Provision resources when needed."
        ],
        [
          "Elastic",
          "Scale capacity as demand changes."
        ],
        [
          "Metered",
          "Track consumption and costs."
        ],
        "What does elasticity describe?",
        [
          "Unlimited free storage",
          "Capacity adjusting to demand",
          "A single permanent computer"
        ],
        1,
        "Elasticity allows resources to grow or shrink with demand."
      ],
      [
        "Compare cloud service models",
        "IaaS, PaaS and SaaS divide operational responsibility differently.",
        [
          "IaaS",
          "You manage guest operating systems and applications."
        ],
        [
          "PaaS",
          "The provider operates more of the runtime platform."
        ],
        [
          "SaaS",
          "The provider supplies the complete application."
        ],
        "Which model usually gives a user a ready-made email application?",
        [
          "SaaS",
          "IaaS only",
          "A bare metal rack"
        ],
        0,
        "SaaS offers an application as a managed service."
      ],
      [
        "Explore regions and availability",
        "Physical placement affects latency, compliance and resilience.",
        [
          "Region",
          "Choose an appropriate geographic data location."
        ],
        [
          "Zone",
          "Use independent fault domains where offered."
        ],
        [
          "Restore",
          "Test recovery beyond a single component."
        ],
        "Which choice reduces dependence on one availability zone?",
        [
          "Put everything in one zone",
          "Deploy across suitable zones with recovery planning",
          "Disable backups"
        ],
        1,
        "Distributing services can reduce single-zone failure exposure."
      ],
      [
        "Identity and shared responsibility",
        "Cloud security starts with access control and data classification.",
        [
          "Provider",
          "Understand which layers the provider operates."
        ],
        [
          "Customer",
          "Protect identities, permissions and configurations."
        ],
        [
          "Evidence",
          "Review logs and access periodically."
        ],
        "A cloud database is publicly accessible by mistake. Who must review its configuration?",
        [
          "The customer team responsible for the database",
          "Only the Internet provider",
          "Nobody in a shared environment"
        ],
        0,
        "Customers are responsible for their own access configuration under shared responsibility."
      ],
      [
        "Understand cloud costs",
        "Small unmonitored resources can produce avoidable spend.",
        [
          "Estimate",
          "Predict storage, compute and traffic usage."
        ],
        [
          "Limit",
          "Set budgets and alerts."
        ],
        [
          "Review",
          "Stop unused resources and compare actual spend."
        ],
        "What helps prevent surprise usage bills?",
        [
          "Ignore invoices",
          "Use budgets, alerts and resource reviews",
          "Make all services permanent"
        ],
        1,
        "Cost controls require visibility and deliberate limits."
      ],
      [
        "Plan a beginner cloud solution",
        "Document functional, security and operational requirements before launch.",
        [
          "Design",
          "Choose a service model and target users."
        ],
        [
          "Protect",
          "Set least privilege, backups and region."
        ],
        [
          "Validate",
          "Test availability, cost and restore evidence."
        ],
        "Which is a reasonable first deployment plan?",
        [
          "A diagram, owner, budget, controls and rollback",
          "An undocumented production launch",
          "A shared administrator password"
        ],
        0,
        "A documented design enables safe implementation and review."
      ]
    ]
  }
} as const;
