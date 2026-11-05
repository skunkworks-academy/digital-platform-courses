# Skunkworks Academy Beginner IT Collection

**Public Docusaurus website:** https://skunkworks-academy.github.io/digital-platform-courses/

## Five beginner courses

| Code | Course | Duration | Public route |
|---|---|---|---|
| SKW-BEG-AI-101 | Generative AI & ChatGPT for Beginners | 6–8 hours | /beginner/ai/ |
| SKW-BEG-SEC-101 | Cybersecurity Essentials & Online Safety | 6–8 hours | /beginner/cybersecurity/ |
| SKW-BEG-IT-101 | IT Support & Computer Troubleshooting | 8–10 hours | /beginner/it-support/ |
| SKW-BEG-M365-101 | Microsoft 365 & Excel Productivity Essentials | 8–10 hours | /beginner/microsoft-productivity/ |
| SKW-BEG-CLD-101 | Cloud Computing Fundamentals | 6–8 hours | /beginner/cloud/ |

Every course has **six lessons**, **three practical labs**, a twelve-question knowledge check with feedback, a weighted evidence-based capstone, course guide, references and interactive five-item before/after learning diagnostics. A local browser checklist allows students to mark module and practical progress.

## Course operations

This edition publishes full course lessons publicly for learning. Price of USD 50 per course is a **proposed commercial model**, not an active checkout or paid entitlement. No PayPal credentials or private learner records are present in the static site. The Academy Portal payment issue remains open until a backend can verify one-time purchases, bind per-course enrolments, send welcome emails and issue verified achievements.

## Build and QA

```sh
npm ci
npm run validate:pilot
npm run validate:beginner
npm run typecheck
npm run build
```

GitHub Actions validates PRs before merger, then deploys the `build` directory to Pages on `main`. Do not call the collection live until the Pages deployment is successful and the public URLs have been verified.
