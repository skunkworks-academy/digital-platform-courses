import React,{useEffect,useState} from 'react';
const questions:Record<string,{prompt:string;options:[string,string,string,string];correct:number;reason:string}[]> = {
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
