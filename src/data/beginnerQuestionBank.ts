export type MasteryQuestion={prompt:string;options:[string,string,string,string];correct:number;reason:string};
export const beginnerQuestionBank:Record<string,MasteryQuestion[]> = {
  "beginner-ai": [
    {
      "prompt": "What best describes a generative language model?",
      "options": [
        "A system that predicts and generates content from patterns",
        "A guaranteed source of truth",
        "A replacement for human accountability",
        "A database that knows every new fact"
      ],
      "correct": 0,
      "reason": "Generation can be plausible but wrong."
    },
    {
      "prompt": "Which prompt is more testable?",
      "options": [
        "Make something good",
        "Draft 150 words for a named audience with an explicit format and fact constraints",
        "Do whatever seems right",
        "Ignore limits"
      ],
      "correct": 1,
      "reason": "Constraints allow quality review."
    },
    {
      "prompt": "A chatbot invents a source URL. What should you do?",
      "options": [
        "Publish it anyway",
        "Check a primary source and remove unverifiable claims",
        "Ask it to sound more certain",
        "Forward to a client"
      ],
      "correct": 1,
      "reason": "Verify independent evidence."
    },
    {
      "prompt": "A meeting note has no owner. How should a summary report the action?",
      "options": [
        "Assign a random colleague",
        "State owner not specified",
        "Delete the task",
        "Choose the model as owner"
      ],
      "correct": 1,
      "reason": "Never invent responsibility."
    },
    {
      "prompt": "Which input requires extra protection?",
      "options": [
        "A fictional practice ticket",
        "A public marketing slogan",
        "A customer identity document",
        "An empty outline"
      ],
      "correct": 2,
      "reason": "Sensitive personal data needs approved handling."
    },
    {
      "prompt": "Why verify AI calculations in a spreadsheet?",
      "options": [
        "Because AI never calculates",
        "For deterministic and traceable validation",
        "To make charts colourful",
        "To remove all errors automatically"
      ],
      "correct": 1,
      "reason": "Independent calculation checks numeric outputs."
    },
    {
      "prompt": "What is a safe AI email workflow?",
      "options": [
        "AI sends without review",
        "Draft then human checks facts and authorizes sending",
        "Expose every customer record",
        "Ignore recipient accuracy"
      ],
      "correct": 1,
      "reason": "Human accountability is necessary."
    },
    {
      "prompt": "Which statement about AI confidence is correct?",
      "options": [
        "High confidence proves fact",
        "Confidence alone does not replace evidence",
        "No model makes mistakes",
        "Every citation is authentic"
      ],
      "correct": 1,
      "reason": "Sources and testing matter."
    },
    {
      "prompt": "What belongs in an effective prompt?",
      "options": [
        "Task, context, constraints and output format",
        "Only the word please",
        "An unapproved secret",
        "No instructions"
      ],
      "correct": 0,
      "reason": "A clear brief guides better output."
    },
    {
      "prompt": "How should an injection instruction in a supplied document be handled?",
      "options": [
        "As authoritative system policy",
        "As untrusted content",
        "As proof of payment",
        "As a mandatory command"
      ],
      "correct": 1,
      "reason": "Untrusted document text is data."
    },
    {
      "prompt": "What belongs in a quality checklist?",
      "options": [
        "Accuracy, omissions, privacy and audience suitability",
        "Only word count",
        "Only visual design",
        "Only model speed"
      ],
      "correct": 0,
      "reason": "Multiple quality dimensions apply."
    },
    {
      "prompt": "How should automation savings be estimated?",
      "options": [
        "Drafting time only",
        "Total time including verification and correction",
        "Number of prompts",
        "Length of output"
      ],
      "correct": 1,
      "reason": "Net value includes operating cost."
    }
  ],
  "beginner-cyber": [
    {
      "prompt": "What are the three primary security objectives?",
      "options": [
        "Confidentiality, integrity and availability",
        "Cost, speed and design",
        "Routers, printers and apps",
        "Cloud, code and cables"
      ],
      "correct": 0,
      "reason": "The CIA triad defines common protection goals."
    },
    {
      "prompt": "How is risk usually framed?",
      "options": [
        "Impact and likelihood",
        "Number of icons",
        "Number of devices alone",
        "Cost of internet service"
      ],
      "correct": 0,
      "reason": "Risk concerns the chance and consequences of harm."
    },
    {
      "prompt": "Which action is safest for changed supplier bank details?",
      "options": [
        "Use the link in the request",
        "Confirm using an independently known contact",
        "Send the money immediately",
        "Ask the message to verify itself"
      ],
      "correct": 1,
      "reason": "Independent out-of-band verification reduces fraud exposure."
    },
    {
      "prompt": "What does HTTPS prove?",
      "options": [
        "The website is honest",
        "Traffic uses transport encryption to the site",
        "There is no phishing risk",
        "The site is owned by your employer"
      ],
      "correct": 1,
      "reason": "A scam site can have HTTPS too."
    },
    {
      "prompt": "Which login defence is strongest against many phishing attacks?",
      "options": [
        "Shared short password",
        "FIDO2 passkey or security key",
        "Reuse one password",
        "Disable MFA"
      ],
      "correct": 1,
      "reason": "Phishing-resistant authenticators resist fake sign-in pages."
    },
    {
      "prompt": "Unexpected MFA pushes should be:",
      "options": [
        "Approved quickly",
        "Denied and reported",
        "Forwarded to strangers",
        "Ignored indefinitely"
      ],
      "correct": 1,
      "reason": "They may indicate a compromised credential."
    },
    {
      "prompt": "Why test backup restoration?",
      "options": [
        "To prove files can actually be recovered",
        "To delete old data",
        "To avoid encryption",
        "To speed up Wi-Fi"
      ],
      "correct": 0,
      "reason": "Untested backups may fail in a real incident."
    },
    {
      "prompt": "Which Wi-Fi configuration protects a business network?",
      "options": [
        "Open guest devices on finance LAN",
        "Separate guests, update router, use WPA2/WPA3",
        "Share admin credentials",
        "Never patch routers"
      ],
      "correct": 1,
      "reason": "Segmenting and updating reduce exposure."
    },
    {
      "prompt": "Which item belongs in an incident record?",
      "options": [
        "Time, system, facts and actions taken",
        "Only a guess about attacker identity",
        "Only the employee's opinion",
        "The account password"
      ],
      "correct": 0,
      "reason": "An audit trail supports triage and recovery."
    },
    {
      "prompt": "What should you do with suspicious links during training?",
      "options": [
        "Use safe offline samples",
        "Test live malicious links",
        "Download unknown files",
        "Forward to colleagues"
      ],
      "correct": 0,
      "reason": "Training must avoid unnecessary exposure."
    },
    {
      "prompt": "Least privilege means:",
      "options": [
        "Everyone has admin access",
        "Only necessary permissions are assigned",
        "Accounts use the same password",
        "No access review"
      ],
      "correct": 1,
      "reason": "Permissions should be scoped to required work."
    },
    {
      "prompt": "After containing an incident, what follows?",
      "options": [
        "Recovery validation and lessons learned",
        "Delete all evidence",
        "Disable all logs",
        "Assume it is over"
      ],
      "correct": 0,
      "reason": "Recovery and improvement complete the response cycle."
    }
  ],
  "beginner-it-support": [
    {
      "prompt": "Which component holds working data temporarily?",
      "options": [
        "SSD",
        "RAM",
        "Router",
        "Monitor"
      ],
      "correct": 1,
      "reason": "RAM is volatile working memory."
    },
    {
      "prompt": "What is an incident?",
      "options": [
        "A planned purchase",
        "An unplanned service interruption",
        "A routine permission request",
        "A software licence"
      ],
      "correct": 1,
      "reason": "An incident disrupts normal service."
    },
    {
      "prompt": "What should happen before installing a random driver?",
      "options": [
        "Check vendor, version, approval and rollback",
        "Disable all protection",
        "Accept every download",
        "Delete the registry"
      ],
      "correct": 0,
      "reason": "Driver changes require verification."
    },
    {
      "prompt": "What should a support ticket capture?",
      "options": [
        "Symptom, impact, timestamps and attempts",
        "Only the user's name",
        "Only ticket colour",
        "The user's password"
      ],
      "correct": 0,
      "reason": "Evidence and context support diagnosis."
    },
    {
      "prompt": "What assigns many network devices their IP configuration?",
      "options": [
        "DHCP",
        "SMTP",
        "HTML",
        "USB"
      ],
      "correct": 0,
      "reason": "DHCP provides configuration leases."
    },
    {
      "prompt": "What does DNS generally resolve?",
      "options": [
        "Names to network records",
        "Hard disks",
        "RAM faults",
        "Printer ink levels"
      ],
      "correct": 0,
      "reason": "DNS maps names to records including IP addresses."
    },
    {
      "prompt": "A site fails by name but IP connectivity works. What should be checked?",
      "options": [
        "DNS among other causes",
        "Replace processor immediately",
        "Unplug all storage",
        "Install antivirus without approval"
      ],
      "correct": 0,
      "reason": "Name resolution is one likely fault domain."
    },
    {
      "prompt": "Why avoid deleting system files to free space?",
      "options": [
        "Destructive and may break the OS",
        "It always speeds up the laptop",
        "It improves backup quality",
        "It resolves every crash"
      ],
      "correct": 0,
      "reason": "Safe diagnostics precede irreversible changes."
    },
    {
      "prompt": "Which is a good priority input?",
      "options": [
        "Impact and urgency",
        "Customer volume alone",
        "Technician preference",
        "Brand of laptop"
      ],
      "correct": 0,
      "reason": "Priority is driven by impact and urgency."
    },
    {
      "prompt": "Why verify a fix with the user?",
      "options": [
        "To confirm the original task works in context",
        "To avoid documenting it",
        "Because tools are always wrong",
        "To reveal credentials"
      ],
      "correct": 0,
      "reason": "Closure needs acceptance evidence."
    },
    {
      "prompt": "What is safer for patching?",
      "options": [
        "Approval, backup, test and rollback",
        "Unplanned production change",
        "No evidence",
        "Disable logging"
      ],
      "correct": 0,
      "reason": "Controlled change lowers service risk."
    },
    {
      "prompt": "What should escalation include?",
      "options": [
        "Diagnostic evidence and next responsible action",
        "Only the phrase doesn't work",
        "A user password",
        "An unrelated complaint"
      ],
      "correct": 0,
      "reason": "A clear hand-off avoids repeated work."
    }
  ],
  "beginner-microsoft-productivity": [
    {
      "prompt": "What is OneDrive typically for?",
      "options": [
        "Personal or individually owned cloud files with controlled sharing",
        "A network router",
        "A replacement for authentication",
        "Only email routing"
      ],
      "correct": 0,
      "reason": "OneDrive stores and shares authorised files."
    },
    {
      "prompt": "How should headings be formatted for accessible Word documents?",
      "options": [
        "With semantic heading styles",
        "With only random large text",
        "Using screenshots of words",
        "With blank spaces"
      ],
      "correct": 0,
      "reason": "Heading styles give structure for navigation."
    },
    {
      "prompt": "What does a formula usually begin with in Excel?",
      "options": [
        "=",
        "#",
        "@",
        "&"
      ],
      "correct": 0,
      "reason": "The equals sign introduces a calculation."
    },
    {
      "prompt": "What is an absolute Excel cell reference?",
      "options": [
        "A2",
        "$B$1",
        "B5",
        "C9"
      ],
      "correct": 1,
      "reason": "Dollar markers fix row and column."
    },
    {
      "prompt": "What does SUM(A1:A3) calculate?",
      "options": [
        "Total of numeric cells in range",
        "Highest text string",
        "Number of blank rows",
        "A chat message"
      ],
      "correct": 0,
      "reason": "SUM adds numeric values."
    },
    {
      "prompt": "What may happen if you sort only one column in a table?",
      "options": [
        "Records can become misaligned",
        "Nothing changes",
        "Dates encrypt",
        "PivotTables disappear"
      ],
      "correct": 0,
      "reason": "Keep rows together when sorting."
    },
    {
      "prompt": "What is a PivotTable used for?",
      "options": [
        "Summarising and grouping structured data",
        "Applying MFA",
        "Encrypting a computer",
        "Sending meeting invites"
      ],
      "correct": 0,
      "reason": "PivotTables aggregate records."
    },
    {
      "prompt": "Why should a chart include labels and units?",
      "options": [
        "To make measures understandable and prevent misreading",
        "To make it slower",
        "To hide assumptions",
        "To replace source data"
      ],
      "correct": 0,
      "reason": "Context is essential for accurate interpretation."
    },
    {
      "prompt": "What does Cc commonly mean in an email?",
      "options": [
        "Recipients visible as copied",
        "Secret encryption",
        "A rejected invitation",
        "Spreadsheet formula"
      ],
      "correct": 0,
      "reason": "Cc sends visible copies."
    },
    {
      "prompt": "Which sharing option generally limits recipients?",
      "options": [
        "Specific people",
        "Anyone with link",
        "Public search indexing",
        "Anonymous visitors"
      ],
      "correct": 0,
      "reason": "Specific-person links restrict access."
    },
    {
      "prompt": "What is a good report KPI?",
      "options": [
        "A documented metric with source and timeframe",
        "Any number without definition",
        "Only a coloured chart",
        "An assumed trend"
      ],
      "correct": 0,
      "reason": "KPIs require consistent scope."
    },
    {
      "prompt": "What should precede sending an external financial report?",
      "options": [
        "Check recipients, facts, formulas and approval",
        "Only choose a font",
        "Disable history",
        "Use a public guest link"
      ],
      "correct": 0,
      "reason": "Review reduces errors and disclosure risk."
    }
  ],
  "beginner-cloud": [
    {
      "prompt": "What makes cloud capacity elastic?",
      "options": [
        "It can increase or decrease with demand",
        "It is always free",
        "It never requires networking",
        "It stores no information"
      ],
      "correct": 0,
      "reason": "Elasticity changes resource capacity as demand varies."
    },
    {
      "prompt": "Which model provides a finished hosted application?",
      "options": [
        "SaaS",
        "IaaS",
        "Local bare metal",
        "Direct-attached storage"
      ],
      "correct": 0,
      "reason": "SaaS delivers provider-managed application functionality."
    },
    {
      "prompt": "Who generally manages the guest OS of an IaaS VM?",
      "options": [
        "Customer",
        "Internet registry",
        "Student examiner",
        "Public visitors"
      ],
      "correct": 0,
      "reason": "The IaaS customer typically manages the guest OS."
    },
    {
      "prompt": "What is a region?",
      "options": [
        "Geographic cloud deployment area",
        "A password format",
        "A text editor",
        "A single user account"
      ],
      "correct": 0,
      "reason": "Region choice has latency, data and availability implications."
    },
    {
      "prompt": "What is least privilege?",
      "options": [
        "Only necessary permissions",
        "All users as admin",
        "No sign-in checks",
        "Public API tokens"
      ],
      "correct": 0,
      "reason": "Narrow access reduces exposure."
    },
    {
      "prompt": "Which storage suits photos and documents as objects?",
      "options": [
        "Object storage",
        "CPU cache only",
        "RAM registers",
        "Router table"
      ],
      "correct": 0,
      "reason": "Blob/object stores support unstructured objects."
    },
    {
      "prompt": "RPO primarily measures what?",
      "options": [
        "Tolerable period of lost data",
        "Total bandwidth",
        "Number of staff",
        "Disk model"
      ],
      "correct": 0,
      "reason": "RPO specifies the acceptable data-loss window."
    },
    {
      "prompt": "RTO primarily measures what?",
      "options": [
        "Target time to restore service",
        "Cloud tax rate",
        "Storage unit",
        "Authentication method"
      ],
      "correct": 0,
      "reason": "RTO defines the service recovery target."
    },
    {
      "prompt": "Does replication alone guarantee recovery from accidental deletion?",
      "options": [
        "No",
        "Yes",
        "Only at night",
        "Only on Windows"
      ],
      "correct": 0,
      "reason": "Deletion can replicate; backups need restore tests."
    },
    {
      "prompt": "Which expense can surprise a cloud pilot?",
      "options": [
        "Network egress and continued resource runtime",
        "Screen brightness",
        "Keyboard language",
        "User avatar"
      ],
      "correct": 0,
      "reason": "Metered charges need budget controls."
    },
    {
      "prompt": "How should secrets be managed?",
      "options": [
        "Server-side protected store",
        "Public GitHub files",
        "Browser JavaScript source",
        "Email subject"
      ],
      "correct": 0,
      "reason": "Secret managers reduce accidental exposure."
    },
    {
      "prompt": "What must happen when a pilot ends?",
      "options": [
        "Remove or hand over resources through a controlled teardown",
        "Forget the running resources",
        "Share admin passwords",
        "Disable billing alerts"
      ],
      "correct": 0,
      "reason": "A teardown limits future charges and attack surface."
    }
  ]
};
