import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd();
const read=p=>readFileSync(join(root,p),'utf8');
const tracks=[
 ['ai','SKW-BEG-AI-101'],
 ['cybersecurity','SKW-BEG-SEC-101'],
 ['it-support','SKW-BEG-IT-101'],
 ['microsoft-productivity','SKW-BEG-M365-101'],
 ['cloud','SKW-BEG-CLD-101']
];
const shell=read('docs/index.mdx'),sidebar=read('sidebars.ts'),diagnostics=read('src/components/SkillsDiagnostic/index.tsx');
for(const [slug,id] of tracks){
 const prefix='docs/beginner/'+slug;
 const home=read(prefix+'/index.mdx');
 assert.ok(home.includes(id),'Wrong course code '+slug);
 assert.ok(shell.includes('./beginner/'+slug+'/'),'Missing storefront link '+slug);
 assert.ok(sidebar.includes("courseItems('beginner/"+slug+"')"),'Missing sidebar '+slug);
 assert.ok(diagnostics.includes("'beginner-"+slug+"':["),'Missing self-check bank '+slug);
 assert.ok(home.includes('<SkillsDiagnostic course="beginner-'+slug+'" />'),'Missing skill widget '+slug);
 assert.ok(home.includes('<CourseProgress course="beginner-'+slug+'" />'),'Missing progress widget '+slug);
 const files=['course-guide.mdx','references.mdx','index.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx'];
 for(let i=1;i<=6;i++)files.push('modules/'+String(i).padStart(2,'0')+'.mdx');
 for(let i=1;i<=3;i++)files.push('labs/lab-'+String(i).padStart(2,'0')+'.mdx');
 for(const f of files){const path=prefix+'/'+f;assert.ok(existsSync(join(root,path)),'Missing '+path);assert.ok(read(path).length>250,'Incomplete '+path);}
 const q=read(prefix+'/assessment/knowledge-check.mdx');
 assert.ok(q.includes('12')&&q.includes('<details>'),'Missing final quiz '+slug);
 const cap=read(prefix+'/assessment/capstone.mdx');
 assert.ok(cap.includes('70')&&cap.includes('25'),'Missing analytic rubric '+slug);
}
assert.ok(shell.includes('No PayPal or card payment is taken'),'Missing payment boundary');
console.log('Beginner IT collection validated: five courses, 30 modules, 15 labs, diagnostics, learner progress, quizzes and capstones.');
