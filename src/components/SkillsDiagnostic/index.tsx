import React,{useEffect,useState} from 'react';
const questions:Record<string,{prompt:string;options:[string,string,string,string];correct:number;reason:string}[]> = {
github:[
{prompt:'Where are changes prepared for the next Git commit?',options:['Remote branch','Staging index','Release asset','Issue label'],correct:1,reason:'The index stages the next commit snapshot.'},
{prompt:'What enforces a protected branch review rule?',options:['A README file','A repository ruleset','A commit message','An issue comment'],correct:1,reason:'Rulesets can enforce approvals and status checks.'},
{prompt:'What follows an exposed live token?',options:['Rotate or revoke it','Wait for a test','Move it to another file','Publish it'],correct:0,reason:'An exposed token must be treated as compromised.'},
{prompt:'Why use npm ci with a lockfile?',options:['Reproducible dependency installation','To reset passwords','To delete branches','To enable customer checkout'],correct:0,reason:'It installs the locked dependency graph.'},
{prompt:'Who owns the final decision on an AI code review?',options:['The AI alone','The responsible human reviewer','The public visitor','No one'],correct:1,reason:'A human reviewer is accountable for the change.'}],
coderabbit:[
{prompt:'How should an AI review suggestion be treated?',options:['Guaranteed correct','A finding requiring validation','An automatic merge','A payment receipt'],correct:1,reason:'Human reviewers must test and evaluate findings.'},
{prompt:'Which source can carry prompt injection?',options:['Untrusted pull request content','Verified policy','A signed changelog','An approved rubric'],correct:0,reason:'Repository content may be controlled by contributors.'},
{prompt:'What proves a defect is corrected?',options:['Comment closed','Reproduction and regression test passing','PR renamed','No code change'],correct:1,reason:'Tests and observed behavior demonstrate remediation.'},
{prompt:'What is the right token scope?',options:['Organization admin for all work','Least privilege for the integration','Public read/write token','Unlimited access'],correct:1,reason:'Narrow permissions reduce the impact of a breach.'},
{prompt:'Which metric helps judge AI review quality?',options:['Validated defect rate and false positives','Number of comments only','Colors in UI','PR title length'],correct:0,reason:'Review utility depends on correct relevant findings.'}],
shopify:[
{prompt:'What should be validated before a product launch?',options:['Title only','Price, inventory, variants, shipping and policies','Theme accent only','Owner avatar'],correct:1,reason:'Commercial readiness involves the full checkout/fulfilment flow.'},
{prompt:'What is a sound store staff-access control?',options:['Shared owner password','Minimal assigned staff permission','Public API credentials','Disabled MFA'],correct:1,reason:'Separate duties and require only necessary privileges.'},
{prompt:'How should a refund request be handled?',options:['Delete the order','Check payment, order state and published policy','Promise any requested outcome','Disable audit'],correct:1,reason:'Order evidence and policies govern the process.'},
{prompt:'Why run a test checkout?',options:['To verify calculations, payment, shipping and notices','To bypass tax','To access private admin routes','To alter products anonymously'],correct:0,reason:'End-to-end testing proves the buying path.'},
{prompt:'What is safer customer analytics practice?',options:['Unlimited personal data capture','Purpose-limited consent-aware collection','Copying card numbers','No privacy notice'],correct:1,reason:'Data minimization and lawful processing apply.'}],
m365:[
{prompt:'What defines a Microsoft 365 identity boundary?',options:['An Entra tenant','A Word file','A licence','A Teams message'],correct:0,reason:'A tenant defines the identity and administration boundary.'},
{prompt:'Which privilege is appropriate for routine administration?',options:['Shared Global Administrator','Least-privileged named identity','Guest with all permissions','Anonymous sign-in'],correct:1,reason:'Use named identities and minimum required roles.'},
{prompt:'Why pilot Conditional Access?',options:['To assess impact before enforcing','To remove all MFA','To stop logging','To disable the tenant'],correct:0,reason:'Testing helps prevent lockout and interruption.'},
{prompt:'Which DNS record controls inbound mail routing?',options:['MX','SPF','DKIM','DMARC'],correct:0,reason:'MX specifies receiving mail servers.'},
{prompt:'What belongs in an offboarding review?',options:['Only username change','Session revocation and delegated access','Theme color','Printer model'],correct:1,reason:'Residual sessions and grants can retain access.'}],
automation:[
{prompt:'What is the first step in a valuable automation?',options:['Measure process and outcome','Publish an API secret','Use the biggest model','Disable validation'],correct:0,reason:'Baseline and owner come before tooling.'},
{prompt:'How should AI model output be handled?',options:['Automatically trusted','Schema validated and policy checked','Treated as proof of payment','Logged as credentials'],correct:1,reason:'AI text is not proof or authorization.'},
{prompt:'What makes repeated webhooks safe?',options:['Idempotency with durable state','More browser tabs','Longer prompts','Ignoring retries'],correct:0,reason:'Duplicates should not repeat business effects.'},
{prompt:'Where should payment provider secrets live?',options:['Public repo','Browser localStorage','Protected backend secret store','Email subject'],correct:2,reason:'Secrets must stay server-side.'},
{prompt:'When is enrolment granted?',options:['When a redirect loads','After verified provider capture','When customer types paid','Before payment'],correct:1,reason:'A backend must verify completed capture and order details.'}]
};
export default function SkillsDiagnostic({course}:{course:string}){
const bank=questions[course]||[];const [phase,setPhase]=useState<'pre'|'post'>('pre');const [answers,setAnswers]=useState<Record<number,number>>({});const [scores,setScores]=useState<{pre?:number;post?:number}>({});const [message,setMessage]=useState('');
useEffect(()=>{try{const raw=localStorage.getItem('skw-maria-diagnostic-'+course);if(raw){const p=JSON.parse(raw);if(typeof p.pre==='number'||typeof p.post==='number')setScores(p)}}catch{}},[course]);
if(!bank.length)return null;const stored=phase==='pre'?scores.pre:scores.post;
function submit(){if(Object.keys(answers).length!==bank.length){setMessage('Answer all five questions first.');return}const points=bank.reduce((n,q,i)=>n+(answers[i]===q.correct?1:0),0);const next={...scores,[phase]:points};setScores(next);try{localStorage.setItem('skw-maria-diagnostic-'+course,JSON.stringify(next))}catch{}setMessage('Your self-check was scored. Review feedback below.')}
return <section className="skillsDiagnostic" aria-label="Before and after learning diagnostic">
<h2>Before/after learning diagnostic</h2>
<p>Complete once before studying and once after your capstone. These five-question results are formative and stored only on this device; they are not a verified grade, certificate or paid access right.</p>
<div className="diagnosticControls"><button type="button" aria-pressed={phase==='pre'} onClick={()=>{setPhase('pre');setAnswers({});setMessage('')}}>Before learning</button><button type="button" aria-pressed={phase==='post'} onClick={()=>{setPhase('post');setAnswers({});setMessage('')}}>After learning</button></div>
<p role="status"><strong>Baseline:</strong> {scores.pre===undefined?'Not taken':scores.pre+'/5'} · <strong>Final:</strong> {scores.post===undefined?'Not taken':scores.post+'/5'}{scores.pre!==undefined&&scores.post!==undefined?' · Growth: '+(scores.post-scores.pre)+' points':''}</p>
{bank.map((q,i)=><fieldset className="diagnosticQuestion" key={i}><legend>{i+1}. {q.prompt}</legend>{q.options.map((o,j)=><label key={j}><input type="radio" name={course+phase+i} checked={answers[i]===j} onChange={()=>{setAnswers(a=>({...a,[i]:j}));setMessage('')}} /> {o}</label>)}{stored!==undefined&&<p className="diagnosticFeedback">Correct answer: {q.options[q.correct]}. {q.reason}</p>}</fieldset>)}
<button type="button" className="diagnosticSubmit" onClick={submit}>Score {phase==='pre'?'baseline':'final'} diagnostic</button>{message&&<p role="status">{message}</p>}</section>
}
