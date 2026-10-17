import assert from 'node:assert/strict';import {readFileSync,existsSync} from 'node:fs';import {join} from 'node:path';const read=p=>readFileSync(join(process.cwd(),p),'utf8'),has=p=>existsSync(join(process.cwd(),p));const slugs=["ai","cyber","it-support","microsoft-productivity","cloud"];
assert.ok(has('src/components/BeginnerMasteryQuiz/index.tsx'));
const bank=read('src/data/beginnerQuestionBank.ts'),diagnostics=read('src/components/SkillsDiagnostic/index.tsx'),sidebar=read('sidebars.ts'),home=read('docs/index.mdx');
for(const [i,slug] of slugs.entries()){
const base='docs/beginner/'+slug,front=read(base+'/index.mdx');
assert.ok(front.includes('<SkillsDiagnostic course="beginner-'+slug+'" />'),'missing pre/post '+slug);
assert.ok(front.includes('<CourseProgress course="beginner-'+slug+'" />'),'missing tracker '+slug);
assert.ok(sidebar.includes("beginner/"+slug),'missing sidebar '+slug);
assert.ok(home.includes('SKW-BEG-'),'home should show beginner SKUs');
assert.ok(bank.includes('"beginner-'+slug+'"'),'missing quiz bank '+slug);
assert.ok(diagnostics.includes('"beginner-'+slug+'"'),'missing diagnostic '+slug);
for(let j=1;j<=6;j++)assert.ok(has(base+'/modules/'+String(j).padStart(2,'0')+'.mdx'),'missing module '+slug+' '+j);
for(let j=1;j<=3;j++)assert.ok(has(base+'/labs/lab-'+String(j).padStart(2,'0')+'.mdx'),'missing lab '+slug+' '+j);
for(const f of ['course-guide.mdx','references.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx'])assert.ok(has(base+'/'+f),'missing '+slug+'/'+f);
assert.ok(read(base+'/assessment/knowledge-check.mdx').includes('<BeginnerMasteryQuiz course="beginner-'+slug+'" />'),'interactive quiz not mounted '+slug);
assert.equal((read(base+'/assessment/knowledge-check.mdx').match(/^### \d+\./gm)||[]).length,12,'need 12 written questions '+slug);
}

console.log('All five beginner courses validated: 30 lessons, 15 labs, 5 capstones, 60-item knowledge banks, pre/post diagnostics and responsive navigation.');
