import React,{useEffect,useState} from 'react';

const milestones=[
  'I can explain the main idea using my own words',
  'I completed a safe practice task or documented a simulation',
  'I checked the result against evidence and recorded a limitation'
] as const;
type State={marks:boolean[];notes:string};
const makeKey=(docId:string)=>'skw-beginner-workbook-v1:'+docId;
const empty=():State=>({marks:[false,false,false],notes:''});
const isState=(data:unknown):data is State=>Boolean(data&&typeof data==='object'&&
  Array.isArray((data as State).marks)&&typeof (data as State).notes==='string');
function makeTemplate(id:string){
 return [
  'Skunkworks Academy — practice evidence',
  'Lesson: '+id,
  'Date and learner initials: ',
  'What I learned (in my own words): ',
  'Safe or simulated task and expected result: ',
  'Observed result and supporting evidence: ',
  'Failure case, correction and remaining uncertainty: ',
  'Next action or question for the reviewer: '
 ].join('\n');
}
/** Formative workbook, local to this browser. Never send learner data to server. */
export default function PageWorkbook({docId}:{docId:string}){
 const [data,setData]=useState<State>(empty);
 const [loaded,setLoaded]=useState(false);
 const [message,setMessage]=useState('');
 const [confirmClear,setConfirmClear]=useState(false);
 const [copyFallback,setCopyFallback]=useState(false);
 useEffect(()=>{
   setLoaded(false);setData(empty());setMessage('');setConfirmClear(false);setCopyFallback(false);
   try {
     const raw=window.localStorage.getItem(makeKey(docId));
     if(raw){const value:unknown=JSON.parse(raw);
       if(isState(value))setData({marks:milestones.map((_,i)=>value.marks[i]===true),notes:value.notes.slice(0,1800)});
     }
   }catch{setMessage('Browser storage is unavailable; you can still practise, but changes may not persist.')}
   setLoaded(true);
 },[docId]);
 function store(next:State){
   setData(next);setConfirmClear(false);
   try{window.localStorage.setItem(makeKey(docId),JSON.stringify(next));setMessage('Saved on this device only.')}
   catch{setMessage('Updated for this session. Your browser prevented persistent storage.')}
 }
 function clear(){
   if(!confirmClear){setConfirmClear(true);setMessage('Select Clear saved work again to confirm.');return;}
   store(empty());setMessage('This page workbook has been cleared.');
 }
 async function copy(){
   const value=makeTemplate(docId);
   try{
     if(!navigator.clipboard?.writeText)throw Error('Clipboard is not available');
     await navigator.clipboard.writeText(value);
     setMessage('Blank evidence template copied. Paste it into a private document.');
     setCopyFallback(false);
   }catch{
     setCopyFallback(true);
     setMessage('Clipboard access was blocked. Select and copy the template in the field below.');
   }
 }
 const done=data.marks.filter(Boolean).length;
 return <section id="page-workbook" className="pageWorkbook" aria-label="Practice workbook for this learning page">
  <div className="workbookHeading">
    <div><p className="studioKicker">Your practical learning aid</p><h2>Evidence and reflection workbook</h2></div>
    <strong className="workbookCount" aria-live="polite">{done}/{milestones.length} checks</strong>
  </div>
  <p>Use this page to turn reading into practical capability. Record <strong>only fictional or approved non-sensitive information</strong>; never enter passwords, real customer details or private keys. The workbook is optional, self-reported and not a certificate or formal submission.</p>
  <fieldset className="workbookChecks"><legend>Practice checkpoints</legend>
   {milestones.map((label,i)=><label key={label}>
     <input type="checkbox" checked={data.marks[i]} onChange={e=>store({...data,marks:data.marks.map((v,j)=>i===j?e.target.checked:v)})}/>
     <span>{label}</span>
   </label>)}
  </fieldset>
  <label htmlFor={'workbook-notes-'+docId.replaceAll('/','-')} className="workbookLabel">Your observations, example and next question</label>
  <textarea id={'workbook-notes-'+docId.replaceAll('/','-')} value={data.notes} onChange={e=>setData({...data,notes:e.target.value})}
    rows={5} maxLength={1800} placeholder="Use fictional information: What did you try? What happened? What would you check next?" />
  <p className="workbookCounter">{data.notes.length}/1800 characters</p>
  <div className="workbookActions">
    <button type="button" onClick={()=>store(data)}>Save my notes</button>
    <button type="button" onClick={copy}>Copy blank evidence template</button>
    <button type="button" className={confirmClear?'workbookDanger':''} onClick={clear}>{confirmClear?'Confirm clear saved work':'Clear saved work'}</button>
    {confirmClear&&<button type="button" onClick={()=>{setConfirmClear(false);setMessage('Clear cancelled.')}}>Cancel clear</button>}
  </div>
  {copyFallback&&<label className="workbookFallback">Copy this template manually
    <textarea readOnly rows={8} value={makeTemplate(docId)} onFocus={e=>e.currentTarget.select()} />
  </label>}
  <p className="workbookStatus" role="status" aria-live="polite">{loaded?message:'Loading your local notes…'}</p>
  <p className="studioSmallPrint">Saved locally in this browser when storage is enabled. Clearing browsing data removes it. No upload, sign-in, paid enrolment or verified grading occurs here.</p>
 </section>;
}
