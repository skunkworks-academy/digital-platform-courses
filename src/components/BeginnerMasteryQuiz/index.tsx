import React,{useState} from 'react';
import {beginnerQuestionBank} from '@site/src/data/beginnerQuestionBank';
export default function BeginnerMasteryQuiz({course}:{course:string}){
 const questions=beginnerQuestionBank[course]??[];const [answers,setAnswers]=useState<Record<number,number>>({});
 const [score,setScore]=useState<number|null>(null);const [status,setStatus]=useState('');
 if(questions.length===0)return <p>Question bank unavailable. Contact Academy support.</p>;
 function mark(i:number,j:number){if(score!==null)return;setAnswers(old=>({...old,[i]:j}));setStatus('')}
 function grade(){if(Object.keys(answers).length!==questions.length){setStatus('Please answer all twelve questions before scoring.');return}
 const correct=questions.reduce((n,q,i)=>n+(q.correct===answers[i]?1:0),0);setScore(correct);setStatus(correct>=10?'Self-check passed; finish the capstone and have evidence assessed.':'Review feedback and relevant lessons, then retry.')}
 return <section className="masteryQuiz" aria-label="Interactive knowledge assessment">
 <h2>Interactive 12-question knowledge check</h2>
 <p>Choose one answer per item, then score your attempt for immediate feedback. A score of 10/12 meets the conceptual threshold. <strong>This is a formative browser exercise, not a stored official Academy grade or certificate.</strong></p>
 {questions.map((q,i)=><fieldset key={i} className="masteryQuestion"><legend>{i+1}. {q.prompt}</legend>
 {q.options.map((opt,j)=><label key={j}><input type="radio" name={course+'-question-'+i} checked={answers[i]===j} disabled={score!==null} onChange={()=>mark(i,j)} />{opt}</label>)}
 {score!==null&&<p className="masteryFeedback"><strong>{answers[i]===q.correct?'Correct':'Review'}.</strong> Answer: {q.options[q.correct]}. {q.reason}</p>}
 </fieldset>)}
 <div className="masteryActions">{score===null?<button type="button" onClick={grade}>Score my attempt</button>:<button type="button" onClick={()=>{setAnswers({});setScore(null);setStatus('Ready for another attempt.')}}>Try again</button>}
 {score!==null&&<strong>Result: {score}/12 · {Math.round(score/questions.length*100)}%</strong>}</div>
 {status&&<p role="status" aria-live="polite">{status}</p>}
 </section>;
}
