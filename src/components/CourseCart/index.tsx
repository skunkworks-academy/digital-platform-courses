import React,{useMemo,useState} from 'react';
const courses=[
{id:'SKW-BEG-AI-101',name:"Generative AI & ChatGPT for Beginners"},
{id:'SKW-BEG-CYB-101',name:"Cybersecurity Essentials & Online Safety"},
{id:'SKW-BEG-IT-101',name:"IT Support & Computer Troubleshooting Fundamentals"},
{id:'SKW-BEG-M365-101',name:"Microsoft 365 & Excel Productivity Essentials"},
{id:'SKW-BEG-CLD-101',name:"Cloud Computing Fundamentals"}
] as const;
export default function CourseCart(){
 const [chosen,setChosen]=useState<string[]>([]);
 const total=chosen.length*50;
 const selected=useMemo(()=>courses.filter(c=>chosen.includes(c.id)),[chosen]);
 function toggle(id:string){setChosen(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id])}
 function request(){
  const body=['Beginner IT course enquiry (quotation/checkout not yet active):','',...selected.map(c=>c.id+' — '+c.name),'','Proposed subtotal: USD '+total,'','Please confirm whether this catalogue is available and how payment and enrolment will be completed.'].join('\n');
  const mail='mailto:training@skunkworks.africa?subject='+encodeURIComponent('Maria course pilot — request checkout')+'&body='+encodeURIComponent(body);
  if(typeof window!=='undefined')window.location.assign(mail);
 }
 return <section className="mariaCart" aria-labelledby="maria-cart-heading">
  <h2 id="maria-cart-heading">Choose your learning courses</h2>
  <p>Select one or more draft courses to prepare an information request. <strong>PayPal checkout is not active in this preview.</strong> This preview cannot accept payment. A request generates an email to the Academy team.</p>
  <div className="mariaCartGrid">{courses.map(c=><label key={c.id} className="mariaCartItem">
   <input type="checkbox" checked={chosen.includes(c.id)} onChange={()=>toggle(c.id)} aria-label={'Choose '+c.name} />
   <span><strong>{c.name}</strong><small>{c.id}</small></span><b>US$50</b>
  </label>)}</div>
  <div className="mariaCartSummary" aria-live="polite"><span>{chosen.length} of {courses.length} selected</span><strong>Proposed total: US${total}</strong></div>
  <button type="button" className="mariaRequest" disabled={chosen.length===0} onClick={request}>Request checkout information</button>
  <p className="mariaCartNotice">This sends a draft email using your email app; it does not create an order or grant course access. Automated payment, enrolment and secure delivery are release blockers.</p>
 </section>
}
