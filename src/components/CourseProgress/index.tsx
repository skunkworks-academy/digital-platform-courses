import React,{useEffect,useState} from 'react';
type Props={course:string};
const sections=[...Array.from({length:6},(_,i)=>'Module '+(i+1)),...Array.from({length:3},(_,i)=>'Practical lab '+(i+1)),'Knowledge check','Capstone evidence'];
export default function CourseProgress({course}:Props){
 const [checked,setChecked]=useState<Record<string,boolean>>({});
 const [ready,setReady]=useState(false);
 useEffect(()=>{try{const data=localStorage.getItem('skw-maria-progress-'+course);if(data){const x=JSON.parse(data);if(x&&typeof x==='object'&&!Array.isArray(x))setChecked(x)}}catch{}setReady(true)},[course]);
 const completed=sections.filter(s=>checked[s]===true).length,percent=Math.round(completed/sections.length*100);
 function mark(k:string,v:boolean){const next={...checked,[k]:v};setChecked(next);try{localStorage.setItem('skw-maria-progress-'+course,JSON.stringify(next))}catch{}}
 return <section className="courseProgress" aria-label="Self-paced course progress">
  <h2>Learning progress checklist</h2>
  <p>Record what you have studied and practised. This tracker is saved only in your browser and is not a verified enrolment or formal completion record.</p>
  <p aria-live="polite"><strong>{ready?percent+'%':'Loading…'}</strong> self-reported progress · {completed} of {sections.length} checkpoints</p>
  <progress value={completed} max={sections.length} aria-label="Self-reported course progress" />
  <div className="progressItems">{sections.map(s=><label key={s}><input type="checkbox" checked={checked[s]===true} onChange={event=>mark(s,event.target.checked)}/><span>{s}</span></label>)}</div>
  <p className="progressDisclaimer">Only mark an item complete after recording relevant evidence. Official course completion still requires authenticated enrolment and approved assessment.</p>
 </section>
}