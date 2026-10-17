import React,{useState} from 'react';
import {studioCourses} from '@site/src/data/learningStudio';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Progressive disclosure is explicit and works by keyboard, touch and pointer.
type CourseSlug=keyof typeof studioCourses;
const valid=(value:string):value is CourseSlug=>Object.prototype.hasOwnProperty.call(studioCourses,value);

export default function VisualLearningStudio({docId}:{docId:string}){
  const parts=docId.split('/');
  const slug=parts[1]||'';
  const course=valid(slug)?studioCourses[slug]:null;
  const rawModule=parts[2]==='modules'?Number(parts[3]):0;
  const rawLab=parts[2]==='labs'?Number((parts[3]||'').replace('lab-','')):0;
  const index=rawModule>=1&&rawModule<=6?rawModule-1:rawLab>=1&&rawLab<=3?(rawLab-1)*2:0;
  const scene=course?.scenes[index]??null;
  const [turned,setTurned]=useState<Record<number,boolean>>({});
  const [choice,setChoice]=useState<number|null>(null);
  const [showProcess,setShowProcess]=useState(false);
  // Hooks must run unconditionally, including across client-side course navigation.
  const illustration=useBaseUrl('/img/learning-studio/'+slug+'.svg');
  if(!course||!scene)return null;
  const [topic,point,c1,c2,c3,question,options,correct,explanation]=scene;
  const cards=[c1,c2,c3];
  const isLab=parts[2]==='labs';
  const pageType=isLab?'Lab practice':rawModule?'Learning module':parts[2]==='assessment'?'Assessment support':'Guided learning';
  return <section className="studio" aria-label={'Interactive learning studio for '+course.title} key={docId}>
    <div className="studioHeader">
      <div className="studioHero">
        <div className="studioHeroCopy">
          <p className="studioKicker">Interactive learning studio · {pageType}</p>
          <h2>{topic}: learn by doing</h2>
          <p>{point} Explore the illustrated workflow, reveal concept cards, then decide what you would do in the scenario.</p>
          <p><strong>Topic:</strong> {course.title} · {course.tag}</p>
        </div>
        <img className="studioHeroArt" src={illustration} alt={'Illustrated visual guide for '+course.title+' showing three learning stages'} loading="lazy" width="800" height="480" />
      </div>
    </div>
    <div className="studioSection">
      <h3>Visual workflow</h3>
      <p className="studioIntro">Follow these steps from left to right. Use them to explain your approach before attempting the practical activity.</p>
      <ol className="studioFlow">
        {course.flow.map((step,i)=><li key={step}><span className="studioFlowNumber">STEP {i+1}</span><strong>{step}</strong></li>)}
      </ol>
      <button type="button" className="studioReset" aria-expanded={showProcess} onClick={()=>setShowProcess(v=>!v)}>{showProcess?'Hide':'Show'} the worked approach</button>
      {showProcess&&<div className="studioEvidence"><strong>Worked approach:</strong> Start with the available facts. Work through <em>{course.flow[0]}</em>, then <em>{course.flow[1]}</em>. Record the observed outcome for <em>{course.flow[2]}</em>, together with evidence or an escalation note. Explain any unresolved uncertainty.</div>}
    </div>
    <div className="studioSection">
      <h3>Flip cards: concepts and examples</h3>
      <p className="studioIntro">Predict each answer before revealing it. Buttons work with Enter, Space, touch and mouse.</p>
      <div className="studioCardGrid">
        {cards.map(([front,back],i)=><button key={front} className="studioFlip" type="button" aria-pressed={Boolean(turned[i])} aria-label={(turned[i]?'Hide explanation: ':'Reveal explanation for ')+front} onClick={()=>setTurned(current=>({...current,[i]:!current[i]}))}>
          <span className="studioFlipIcon" aria-hidden="true">{i===0?'01':i===1?'02':'03'}</span>
          <span className="studioFlipTitle">{front}</span>
          <span className="studioFlipBody">{turned[i]?back:'Think about what this means in a real workplace.'}</span>
          <span className="studioFlipHint">{turned[i]?'Select to return to prompt':'Select to reveal explanation'}</span>
        </button>)}
      </div>
    </div>
    <div className="studioSection">
      <h3>Make a decision</h3>
      <p><strong>{question}</strong></p>
      <div className="studioChoices" role="group" aria-label="Scenario answer choices">
        {options.map((answer,i)=><button key={answer} type="button" className="studioChoice" aria-pressed={choice===i} onClick={()=>setChoice(i)}>{String.fromCharCode(65+i)}. {answer}</button>)}
      </div>
      {choice!==null&&<div className="studioFeedback" data-correct={choice===correct} role="status" aria-live="polite">
        <strong>{choice===correct?'Good decision.':'Try the evidence-led option.'}</strong> {explanation}
        {choice!==correct&&<p className="studioNote">Review the concept cards above and try another choice. A different answer can be selected without losing progress.</p>}
      </div>}
      <button type="button" className="studioReset" onClick={()=>{setChoice(null);setTurned({});setShowProcess(false)}}>Reset this activity</button>
      <p className="studioSmallPrint">This is an ungraded practice activity. Answers are not transmitted or stored as an official assessment.</p>
    </div>
  </section>;
}
