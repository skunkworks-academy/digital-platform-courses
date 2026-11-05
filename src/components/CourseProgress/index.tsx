import React,{useEffect,useState} from 'react';
type Props={course:string};
const sections=[...Array.from({length:6},(_,i)=>'Module '+(i+1)),...Array.from({length:3},(_,i)=>'Practical lab '+(i+1)),'Knowledge check','Capstone evidence'];
const key=(course:string)=>'skw-maria-progress-'+course;
export default function CourseProgress({course}:Props){
 const [checked,setChecked]=useState<Record<string,boolean>>({});
 const [ready,setReady]=useState(false);
 const [confirmReset,setConfirmReset]=useState(false);
 const [status,setStatus]=useState('');
 useEffect(()=>{
  setChecked({});setReady(false);setConfirmReset(false);setStatus('');
  try{const data=localStorage.getItem(key(course));if(data){const x=JSON.parse(data);
    if(x&&typeof x==='object'&&!Array.isArray(x)){
      setChecked(Object.fromEntries(sections.map(s=>[s,x[s]===true])));
    }
  }}catch{setStatus('Browser storage is unavailable; this tracker may reset after refresh.')}
  setReady(true);
 },[course]);
 const completed=sections.filter(s=>checked[s]===true).length,percent=Math.round(completed/sections.length*100);
 function persist(next:Record<string,boolean>){
  setChecked(next);setConfirmReset(false);
  try{localStorage.setItem(key(course),JSON.stringify(next));setStatus('Progress saved in this browser.')}
  catch{setStatus('Progress updated for this session; persistent storage is blocked.')}
 }
 function reset(){
  if(!confirmReset){setConfirmReset(true);setStatus('Select Confirm reset to clear your local progress.');return;}
  persist({});setStatus('Local progress tracker cleared.');
 }
 return <section className="courseProgress" aria-label="Self-paced course progress">
  <h2>Learning progress checklist</h2>
  <p>Record what you have studied and practised. Progress stays on this browser and is not a verified enrolment or formal completion record.</p>
  <p aria-live="polite"><strong>{ready?percent+'%':'Loading…'}</strong> self-reported progress · {completed} of {sections.length} checkpoints</p>
  <progress value={completed} max={sections.length} aria-label="Self-reported course progress"/>
  <div className="progressItems">{sections.map(s=><label key={s}>
    <input type="checkbox" checked={checked[s]===true} onChange={event=>persist({...checked,[s]:event.target.checked})}/><span>{s}</span>
  </label>)}</div>
  <div className="progressControls">
   <button type="button" onClick={reset}>{confirmReset?'Confirm reset':'Reset progress'}</button>
   {confirmReset&&<button type="button" onClick={()=>{setConfirmReset(false);setStatus('Reset cancelled.')}}>Cancel</button>}
  </div>
  {status&&<p role="status" aria-live="polite">{status}</p>}
  <p className="progressDisclaimer">Only mark an item complete after recording relevant evidence. Official completion requires authenticated enrolment and approved assessment.</p>
 </section>;
}
