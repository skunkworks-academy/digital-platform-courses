# Maria five-course payment, fulfilment and restricted-content architecture

**Status: release blocker.** This repository currently publishes course pages via public GitHub Pages. It does not provide commercial protection, live PayPal checkout or verified automated email enrolment.

## Reference transaction and learning workflow

```text
Public Academy course card -> Portal sign-in -> POST /api/course-orders
-> server validates approved SKU and USD 50 price -> PayPal Orders v2 create
-> hosted PayPal approval -> server-side PayPal capture & amount/merchant/currency validation
-> durable, idempotent completed order -> per-course entitlement
-> queued transactional receipt and enrolment email -> learner signs into Portal
-> authenticated GET /api/course-access -> private lesson API -> assessment database
-> human capstone grading -> verifiable Academy completion evidence
```

## Implementation rules

1. Confirm Maria's five titles, ownership, selling entity, use licences, buyer terms, refund policy and PayPal Business account before taking payment.
2. Create an authoritative SKU catalogue and single-purchase order endpoint. Never trust the browser's amount, course ID entitlement, payer status or email alone.
3. Create and capture PayPal Orders v2 **server-side** with secure credentials. Validate captured provider order state, payee, capture ID, amount, currency and reference. Do not enable access when merely redirected from PayPal.
4. Verify PayPal webhook signatures using the configured webhook ID and PayPal verification API. Persist provider event IDs and deduplicate webhook retries, repeated capture and email delivery. Reconcile pending orders asynchronously.
5. Process refund, reversal, dispute and chargeback events with policy-governed enrolment review or suspension and auditable financial records.
6. Bind each enrolment to a verified Academy identity; provide explicit gift transfer/verification flow where needed. Avoid sending permanent access links.
7. Create transactional mail outbox with retries and support escalation; send a receipt, course names and secure portal sign-in link, not unprotected proprietary course files.
8. Keep paid-only lesson bodies outside public GitHub Pages and public repositories. Client-side UI gating is not a security boundary. Deliver protected content only after server entitlement validation.
9. Store authoritative assessment attempts, progress, lab evidence and reviewed capstone marks on the server. Local diagnostic scores are not graded or authoritative.
10. Use least privilege, short-lived sessions and secure HttpOnly cookies. Enforce CSRF protection for mutations, strict origin allowlists and audit decisions without secrets. Follow POPIA and regional consumer/payment obligations.

## Minimum QA release gates

- PayPal sandbox: approved and captured; pending; declined; abandoned; wrong amount; wrong merchant; refunded and disputed.
- Replay resistance: duplicate orders, repeated capture, duplicate webhook delivery, forged notification and stale callback all denied or idempotent.
- Email: single receipt/enrolment after confirmed capture, retry on provider outage and no double-send.
- Security: no access before confirmed payment, no access after suspension, direct asset URL rejected, cross-origin request denied.
- Learning: five correct titles and prices, complete content, browser diagnostics, graded assessment, capstone moderation and valid completion record.
- Responsive/accessibility: 320px, 375px, 768px and desktop widths; iOS Safari and Android Chrome; keyboard, dark/light contrast and reduced motion.
- Operations: logging, payment reconciliation, idempotent refunds, backups, alarms, incident owner and rollback.

**Do not publish or sell as automatically fulfilled until these controls are built, connected and passed.**
