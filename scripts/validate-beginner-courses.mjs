import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd(),has=p=>existsSync(join(root,p)),read=p=>readFileSync(join(root,p),'utf8');
const tracks=[['ai','SKW-BEG-AI-101'],['cyber','SKW-BEG-CYB-101'],['it-support','SKW-BEG-IT-101'],['microsoft-productivity','SKW-BEG-M365-101'],['cloud','SKW-BEG-CLD-101']];
const home=read('docs/index.mdx'),sidebar=read('sidebars.ts'),diagnostics=read('src/components/SkillsDiagnostic/index.tsx'),mastery=read('src/data/beginnerQuestionBank.ts');
assert.ok(has('src/components/BeginnerMasteryQuiz/index.tsx'),'Missing interactive knowledge check component');
for(const [slug,code] of tracks){
const base='docs/beginner/'+slug,doc=read(base+'/index.mdx'),quiz=read(base+'/assessment/knowledge-check.mdx');
assert.ok(doc.includes(code),'Incorrect code '+slug);
assert.ok(home.includes('./beginner/'+slug+'/'),'Missing main catalogue '+slug);
assert.ok(sidebar.includes("courseItems('beginner/"+slug+"')")||sidebar.includes("items('beginner/"+slug+"')"),'Missing sidebar '+slug);
assert.ok(diagnostics.includes('"beginner-'+slug+'"'),'Missing diagnostic '+slug);
assert.ok(mastery.includes('"beginner-'+slug+'"'),'Missing scored quiz bank '+slug);
assert.ok(doc.includes('<SkillsDiagnostic course="beginner-'+slug+'" />'),'Missing before/after '+slug);
assert.ok(doc.includes('<CourseProgress course="beginner-'+slug+'" />'),'Missing progress tracking '+slug);
const required=['course-guide.mdx','references.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx'];
for(let n=1;n<=6;n++)required.push('modules/'+String(n).padStart(2,'0')+'.mdx');
for(let n=1;n<=3;n++)required.push('labs/lab-'+String(n).padStart(2,'0')+'.mdx');
for(const file of required){const path=base+'/'+file;assert.ok(has(path),'Missing '+path);assert.ok(read(path).length>250,'Incomplete '+path)}
assert.ok(quiz.includes('<BeginnerMasteryQuiz course="beginner-'+slug+'" />'),'Missing mounted interactive knowledge check '+slug);
assert.equal((quiz.match(/^### \d+\./gm)||[]).length,12,'Not 12 questions '+slug);
const cap=read(base+'/assessment/capstone.mdx');assert.ok(cap.includes('70')&&cap.includes('20'),'Capstone rubric incomplete '+slug);
}
const gallery=read('docs/beginner/index.mdx');
const studio=read('src/components/VisualLearningStudio/index.tsx');
const layout=read('src/theme/DocItem/Content/index.tsx');
const data=read('src/data/learningStudio.ts');
const chrome=read('docusaurus.config.ts');
assert.ok(studio.includes('aria-pressed')&&studio.includes('role="status"'),'Accessible practice interactions missing');
assert.ok(layout.includes('<VisualLearningStudio docId={id}/>'),'Missing global document studio integration');
assert.ok(chrome.includes('assets/skunkworks-ui.js')&&chrome.includes('assets/skunkworks-footer.js'),'Missing shared Academy header/footer');
assert.ok(data.includes('const')&&data.includes('scenes'),'Missing topic-specific learning content');
for(const [slug] of tracks){
 assert.ok(gallery.includes('<CourseCover course="'+slug+'" />'),'Missing visual course gallery card for '+slug);
 assert.ok(has('static/img/learning-studio/'+slug+'.svg'),'Missing original learning illustration: '+slug);
 const base='docs/beginner/'+slug;
 const expected=['index.mdx','course-guide.mdx','references.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx',
   ...Array.from({length:6},(_,i)=>'modules/'+String(i+1).padStart(2,'0')+'.mdx'),
   ...Array.from({length:3},(_,i)=>'labs/lab-'+String(i+1).padStart(2,'0')+'.mdx')];
 assert.equal(expected.length,15,'15-page course contract broken');
 for(const file of expected)assert.ok(has(base+'/'+file),'Missing public learning page '+base+'/'+file);
}
const css=read('src/css/custom.css');for(const hex of ['#03033a','#1e6bd0','#f7f9fc'])assert.ok(css.toLowerCase().includes(hex),'Missing brand colour '+hex);
assert.ok(home.includes('No PayPal or card payment is taken'),'Missing truthful payment disclaimer');
console.log('Five illustrated 15-page beginner courses validated: 30 modules, 15 practical labs, 5 capstones, 60 quiz questions, five diagnostics, theme and commerce disclaimers.');
