import React,{useState} from 'react';
import {beginnerQuestionBank} from '@site/src/data/beginnerQuestionBank';

export default function BeginnerMasteryQuiz({course}:{course:string}){
 const questions=beginnerQuestionBank[course]??[];
 const [answers,setAnswers]=useState<Record<number,number>>({});
 const [score,setScore]=useState<number|null>(null);
 const [status,setStatus]=useState('');
 if(!questions.length)return <p role="alert">Knowledge-check questions are unavailable. Contact Academy support.</p>;
 const answered=questions.filter((_,i)=>answers[i]!==undefined).length;
 function mark(i:number,j:number){if(score!==null)return;setAnswers(old=>({...old,[i]:j}));setStatus('')}
 function grade(){
  if(answered!==questions.length){
   setStatus('Answer all questions before scoring. '+(questions.length-answered)+' remaining.');
   const missing=questions.findIndex((_,i)=>answers[i]===undefined);
   const target=document.getElementById('mastery-question-'+course+'-'+missing);
   target?.scrollIntoView({block:'center',behavior:'auto'});
   target?.querySelector('input')?.focus();
   return;
  }
  const correct=questions.reduce((n,q,i)=>n+(q.correct===answers[i]?1:0),0);
  setScore(correct);
  setStatus(correct>=10?'Formative self-check passed. Complete the capstone and request an authorised review.':'Review explanations, revisit the relevant lessons, then retry.');
 }
 function reset(){
  setAnswers({});setScore(null);setStatus('Ready for a new practice attempt.');
 }
 return <section className="masteryQuiz" aria-label="Interactive knowledge assessment">
  <h2>Interactive {questions.length}-question knowledge check</h2>
  <p>Choose one answer for each question and select Score my attempt for individual explanations. The conceptual threshold is 10/12. <strong>This browser self-check is formative, not a recorded official Academy grade or certificate.</strong></p>
  <p role="status" aria-live="polite"><strong>{answered} of {questions.length} answered</strong>{score!==null?' · '+score+' correct':''}</p>
  <progress value={answered} max={questions.length} aria-label="Knowledge-check questions answered" />
  {questions.map((q,i)=><fieldset id={'mastery-question-'+course+'-'+i} key={i} className="masteryQuestion">
   <legend>{i+1}. {q.prompt}</legend>
   {q.options.map((opt,j)=><label key={j}>
    <input type="radio" name={course+'-question-'+i} checked={answers[i]===j} disabled={score!==null} onChange={()=>mark(i,j)}/>{opt}
   </label>)}
   {score!==null&&<p className="masteryFeedback" data-correct={answers[i]===q.correct}>
    <strong>{answers[i]===q.correct?'Correct.':'Review.'}</strong> Answer: {q.options[q.correct]}. {q.reason}
   </p>}
  </fieldset>)}
  <div className="masteryActions">
    {score===null&&<button type="button" onClick={grade}>Score my attempt</button>}
    {answered>0&&<button type="button" onClick={reset}>{score===null?'Clear answers':'Try again'}</button>}
    {score!==null&&<strong>Result: {score}/{questions.length} · {Math.round(score/questions.length*100)}%</strong>}
  </div>
  {status&&<p role="status" aria-live="polite">{status}</p>}
 </section>;
}
