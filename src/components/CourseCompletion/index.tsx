import React,{useEffect,useState} from 'react';
import Link from '@docusaurus/Link';

type Props={slug:'ai'|'cyber'|'it-support'|'microsoft-productivity'|'cloud'};
const names={
  ai:{title:'Generative AI & ChatGPT for Beginners',id:'SKW-BEG-AI-101'},
  cyber:{title:'Cybersecurity Essentials & Online Safety',id:'SKW-BEG-CYB-101'},
  'it-support':{title:'IT Support & Computer Troubleshooting Fundamentals',id:'SKW-BEG-IT-101'},
  'microsoft-productivity':{title:'Microsoft 365 & Excel Productivity Essentials',id:'SKW-BEG-M365-101'},
  cloud:{title:'Cloud Computing Fundamentals',id:'SKW-BEG-CLD-101'}
} as const;
const required=[...Array.from({length:6},(_,i)=>'Module '+(i+1)),
...Array.from({length:3},(_,i)=>'Practical lab '+(i+1)),'Knowledge check','Capstone evidence'];
type Quiz={correct:number;total:number;passed:boolean;recordedAt:string};
const readQuiz=(slug:string):Quiz|null=>{
 try{const raw=localStorage.getItem('skw-beginner-knowledge-v1:beginner-'+slug);
 if(!raw)return null;
 const v=JSON.parse(raw) as Quiz;
 return Number.isInteger(v.correct)&&v.total===12&&v.correct>=0&&v.correct<=12? v:null;}catch{return null;}
};
export default function CourseCompletion({slug}:Props){
 const [ready,setReady]=useState(false);
 const [completed,setCompleted]=useState<string[]>([]);
 const [quiz,setQuiz]=useState<Quiz|null>(null);
 const [name,setName]=useState('');
 const [status,setStatus]=useState('');
 useEffect(()=>{
  setReady(false);setCompleted([]);setQuiz(null);setName('');setStatus('');
  try{
   const raw=localStorage.getItem('skw-maria-progress-beginner-'+slug);
   if(raw){const progress=JSON.parse(raw) as Record<string,boolean>;
    setCompleted(required.filter(label=>progress[label]===true));}
  }catch{setStatus('Browser progress storage could not be read. You can still return to the lessons.')}
  setQuiz(readQuiz(slug));setReady(true);
 },[slug]);
 const course=names[slug],passed=quiz?.correct!==undefined&&quiz.correct>=10;
 const checklistDone=completed.length===required.length;
 const selfReady=Boolean(passed&&checklistDone);
 const portal='https://portal.skunkworksacademy.com/?certificate='+encodeURIComponent(course.id);
 return <section className="academyCompletion" aria-label={course.title+' course conclusion'} id="course-completion">
   <p className="academyCompletionEyebrow">End of course · {course.id}</p>
   <h2>{course.title} — completion and awards</h2>
   <p>You have reached the <strong>end of this course</strong>. The next course will not open automatically. When you are finished here, return to the five-course beginner catalogue and select a different course when you are ready.</p>
   <div className="academyCompletionSteps" aria-live="polite">
     <div><strong>{ready?completed.length+'/11':'Checking…'}</strong><span>Learning checkpoints marked complete on this device</span></div>
     <div><strong>{quiz?quiz.correct+'/12':'Not recorded'}</strong><span>Latest formative knowledge check (10/12 required)</span></div>
     <div><strong>{selfReady?'Ready for review':'Not yet ready'}</strong><span>Self-reported preparation for a moderated capstone review</span></div>
   </div>
   {!selfReady&&<div className="academyCompletionInfo" role="status">
      <strong>To finish your learning preparation:</strong> Mark all six modules, three labs, the knowledge check and capstone evidence on the course progress checklist, and score at least 10/12 in the interactive knowledge check. These are self-reported steps—not a verified qualification.
      <p><Link to={'/beginner/'+slug+'/'}>Return to this course's checklist</Link> · <Link to={'/beginner/'+slug+'/assessment/knowledge-check/'}>Take or retry the knowledge check</Link></p>
   </div>}
   <div className="academyCompletionAward">
     <div className="academyCompletionSeal" aria-hidden="true">SW<span>Academy</span></div>
     <div>
       <h3>Certificate of Course Completion & digital badge</h3>
       {selfReady?<p>Your browser indicates that you have prepared the learning evidence. <strong>An authorised Academy reviewer must still verify the practical capstone, critical safety checks, learner identity and result</strong> before an official certificate or badge can be issued.</p>:
       <p>Certificate and badge issuance is locked until a successful assessment and authorised Academy review. No browser-only progress can create an official award.</p>}
       <label htmlFor="completion-display-name">Name for your reviewer request (optional; never used to self-issue a certificate)</label>
       <input id="completion-display-name" type="text" autoComplete="name" maxLength={120} value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/>
       <div className="academyCompletionButtons">
         <a className="academyCompletionPrimary" href={portal}>View my verified awards in the Academy Portal</a>
         <a href={'mailto:training@skunkworks.africa?subject='+encodeURIComponent('Assessment review: '+course.id)+'&body='+encodeURIComponent('Please advise on submitting my final evidence for '+course.title+'.'+(name.trim()?'\nLearner: '+name.trim():'')+'\nI understand that an authorised reviewer must approve completion.')}>Request capstone review</a>
       </div>
       <p className="academyCompletionNote">Once approved in the Academy Portal, a learner can download the official Academy-branded certificate signed “Raydo Matthee” and the corresponding digital badge. Access requires signing in and an issued record. Self-reported learning progress alone is insufficient.</p>
     </div>
   </div>
   <div className="academyCompletionFinish">
     <h3>Course finished — return to beginner courses</h3>
     <p>There is no automatic next-course link after this conclusion. Choose your next learning pathway from the catalogue.</p>
     <Link className="academyCompletionPrimary" to="/beginner/">Back to all beginner courses</Link>
   </div>
   {status&&<p role="status">{status}</p>}
 </section>;
}
