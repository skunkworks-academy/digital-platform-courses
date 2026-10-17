import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const root=process.cwd(),has=p=>existsSync(join(root,p)),read=p=>readFileSync(join(root,p),'utf8');
const tracks=[['ai','SKW-BEG-AI-101'],['cyber','SKW-BEG-CYB-101'],['it-support','SKW-BEG-IT-101'],['microsoft-productivity','SKW-BEG-M365-101'],['cloud','SKW-BEG-CLD-101']];
const home=read('docs/index.mdx'),sidebar=read('sidebars.ts'),diagnostics=read('src/components/SkillsDiagnostic/index.tsx'),mastery=read('src/data/beginnerQuestionBank.ts');
assert.ok(has('src/components/BeginnerMasteryQuiz/index.tsx'),'Missing interactive knowledge check component');
const studio=read('src/components/VisualLearningStudio/index.tsx'),wrapper=read('src/theme/DocItem/Content/index.tsx'),data=read('src/data/learningStudio.ts'),config=read('docusaurus.config.ts');
assert.ok(studio.includes('aria-pressed') && studio.includes('role="status"'),'Studio interactions must be accessible');
assert.ok(studio.includes('useBaseUrl'),'Course illustrations must use deployed base path');
assert.ok(wrapper.includes('VisualLearningStudio key=') && wrapper.includes('PageWorkbook key='),'Every learner page must remount an interactive visual studio and workbook');
assert.ok(wrapper.includes('href="#learning-studio"')&&wrapper.includes('href="#page-workbook"'),'Learning page shortcuts missing');
assert.ok(has('src/components/PageWorkbook/index.tsx'),'Missing page workbook');
assert.ok(has('src/components/CourseCompletion/index.tsx'),'Missing end-of-course completion component');
assert.ok(sidebar.includes("s+'/references',s+'/assessment/completion'"),'Course ends must contain their own final page');
assert.ok(read('src/components/BeginnerMasteryQuiz/index.tsx').includes('skw-beginner-knowledge-v1'),'Required on-device formative score state is missing');
const workbook=read('src/components/PageWorkbook/index.tsx');
assert.ok(workbook.includes('navigator.clipboard')&&workbook.includes('localStorage')&&workbook.includes('Confirm clear saved work'),'Missing functional copy, persistence and safe reset controls');
for(const file of ['skunkworks-ui.js','skunkworks-footer.js'])assert.ok(config.includes('https://www.skunkworksacademy.com/assets/'+file),'Missing Academy shared chrome '+file);

for(const [slug,code] of tracks){
const base='docs/beginner/'+slug,doc=read(base+'/index.mdx'),quiz=read(base+'/assessment/knowledge-check.mdx');
assert.ok(doc.includes(code),'Incorrect code '+slug);
assert.ok(data.includes('"'+slug+'"'),'Missing course interactive data '+slug);
const illustration='static/img/learning-studio/'+slug+'.svg';
assert.ok(has(illustration),'Missing illustration '+illustration);
assert.ok(read(illustration).includes('<desc'),'Illustration needs accessible description '+slug);
assert.ok(home.includes('./beginner/'+slug+'/'),'Missing main catalogue '+slug);
assert.ok(sidebar.includes("courseItems('beginner/"+slug+"')")||sidebar.includes("items('beginner/"+slug+"')"),'Missing sidebar '+slug);
assert.ok(diagnostics.includes('"beginner-'+slug+'"'),'Missing diagnostic '+slug);
assert.ok(mastery.includes('"beginner-'+slug+'"'),'Missing scored quiz bank '+slug);
assert.ok(doc.includes('<SkillsDiagnostic course="beginner-'+slug+'" />'),'Missing before/after '+slug);
assert.ok(doc.includes('<CourseProgress course="beginner-'+slug+'" />'),'Missing progress tracking '+slug);
const required=['course-guide.mdx','references.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx','assessment/completion.mdx'];
for(let n=1;n<=6;n++){
 const modulePath=base+'/modules/'+String(n).padStart(2,'0')+'.mdx';
 const content=read(modulePath);
 assert.ok(content.includes('## Extended learning:'),'Missing expanded deep dive '+modulePath);
 assert.ok(content.split(/\s+/).length>=570,'Module lacks sufficient explanatory depth '+modulePath);
 required.push('modules/'+String(n).padStart(2,'0')+'.mdx');
}
for(let n=1;n<=3;n++)required.push('labs/lab-'+String(n).padStart(2,'0')+'.mdx');
for(const file of required){const path=base+'/'+file;assert.ok(has(path),'Missing '+path);assert.ok(read(path).length>250,'Incomplete '+path)}
assert.ok(quiz.includes('<BeginnerMasteryQuiz course="beginner-'+slug+'" />'),'Missing mounted interactive knowledge check '+slug);
const completion=read(base+'/assessment/completion.mdx');
assert.ok(completion.includes('pagination_next: null')&&completion.includes('<CourseCompletion slug="'+slug+'" />'),'Missing end-of-course boundary '+slug);
assert.equal((quiz.match(/^### \d+\./gm)||[]).length,12,'Not 12 questions '+slug);
const cap=read(base+'/assessment/capstone.mdx');assert.ok(cap.includes('70')&&cap.includes('20'),'Capstone rubric incomplete '+slug);
}
const gallery=read('docs/beginner/index.mdx');
assert.ok(studio.includes('aria-pressed')&&studio.includes('role="status"'),'Accessible practice interactions missing');
assert.ok(wrapper.includes('VisualLearningStudio key=')&&wrapper.includes('PageWorkbook key='),'Missing per-page interactive studio and workbook');
assert.ok(config.includes('assets/skunkworks-ui.js')&&config.includes('assets/skunkworks-footer.js'),'Missing shared Academy header/footer');
assert.ok(data.includes('studioCourses')&&data.includes('scenes'),'Missing topic-specific learning content');
for(const [slug] of tracks){
 assert.ok(gallery.includes('<CourseCover course="'+slug+'" />'),'Missing visual course gallery card for '+slug);
 assert.ok(has('static/img/learning-studio/'+slug+'.svg'),'Missing original learning illustration: '+slug);
 const base='docs/beginner/'+slug;
 const expected=['index.mdx','course-guide.mdx','references.mdx','assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx','assessment/completion.mdx',
   ...Array.from({length:6},(_,i)=>'modules/'+String(i+1).padStart(2,'0')+'.mdx'),
   ...Array.from({length:3},(_,i)=>'labs/lab-'+String(i+1).padStart(2,'0')+'.mdx')];
 assert.equal(expected.length,16,'16-page course and completion contract broken');
 for(const file of expected)assert.ok(has(base+'/'+file),'Missing public learning page '+base+'/'+file);
}
const css=read('src/css/custom.css');for(const hex of ['#03033a','#1e6bd0','#f7f9fc'])assert.ok(css.toLowerCase().includes(hex),'Missing brand colour '+hex);
assert.ok(home.includes('No PayPal or card payment is taken'),'Missing truthful payment disclaimer');
console.log('Five illustrated 15-page beginner courses validated: 30 modules, 15 practical labs, 5 capstones, 60 quiz questions, five diagnostics, theme and commerce disclaimers.');
