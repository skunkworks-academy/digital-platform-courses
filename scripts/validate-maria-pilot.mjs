import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import assert from 'node:assert/strict';
const root=process.cwd(), read=(p)=>readFileSync(join(root,p),'utf8');
const required=['docs/index.mdx','src/components/SkillsDiagnostic/index.tsx','src/css/custom.css','sidebars.ts','architecture/MARIA-PAYMENT-AND-ACCESS.md'];
const courseIds=['github','coderabbit','shopify','m365','automation'];
for(const p of required)assert.ok(existsSync(join(root,p)),`Missing ${p}`);
const catalog=read('docs/index.mdx'), sidebars=read('sidebars.ts'),component=read('src/components/SkillsDiagnostic/index.tsx');
const expectedCodes=['SKW-GH-101','SKW-CR-201','SKW-SH-101','SKW-M365-101','SKW-AUTO-101'];
for(const code of expectedCodes)assert.ok(catalog.includes(code),`Missing SKU ${code}`);
for(const slug of courseIds){
 const path=['github','coderabbit','shopify'].includes(slug)?`docs/${slug}/index.mdx`:`docs/maria/${slug}.mdx`;
 const doc=read(path);
 assert.match(doc,new RegExp(`<SkillsDiagnostic\\s+course="${slug}"\\s*/>`),`Missing baseline/final assessment for ${slug}`);
 assert.ok(sidebars.includes(slug),`Missing ${slug} sidebar`);
 assert.ok(component.includes(`${slug}:[`),`Missing ${slug} diagnostic bank`);
}
for(const slug of ['github','coderabbit','shopify']){
 const base=`docs/${slug}`;
 for(let i=1;i<=6;i++)assert.ok(existsSync(join(root,`${base}/modules/${String(i).padStart(2,'0')}.mdx`)));
 for(let i=1;i<=3;i++)assert.ok(existsSync(join(root,`${base}/labs/lab-${String(i).padStart(2,'0')}.mdx`)));
 for(const file of ['assessment/knowledge-check.mdx','assessment/capstone.mdx','assessment/rubric.mdx'])assert.ok(existsSync(join(root,`${base}/${file}`)));
}
for(const slug of ['m365','automation']){
 const doc=read(`docs/maria/${slug}.mdx`);
 assert.equal((doc.match(/### Module [1-6] —/g)||[]).length,6,`Need six modules for ${slug}`);
 assert.equal((doc.match(/### Lab [1-3]:/g)||[]).length,3,`Need three labs for ${slug}`);
 assert.ok(doc.includes('12 questions')&&doc.includes('## Capstone:')&&doc.includes('## Official references'),`Missing assessment or sources for ${slug}`);
 assert.ok(doc.includes('70/100')&&doc.includes('80%'),`Missing thresholds for ${slug}`);
}
const theme=read('src/css/custom.css');
for(const token of ['#03033a','#1e6bd0','#f7f9fc'])assert.ok(theme.toLowerCase().includes(token),`Missing theme token ${token}`);
for(const dangerous of [/paypal\.me\//i,/client_secret\s*:/i,/PAYPAL_CLIENT_SECRET\s*=/i])assert.ok(!dangerous.test(catalog),`Unsafe checkout configuration exposed`);
assert.ok(read('architecture/MARIA-PAYMENT-AND-ACCESS.md').includes('server-side'), 'Missing payment security design');
console.log('Maria five-course pilot validation passed: five diagnostic banks, course paths, 6x modules, 3x labs, knowledge checks, rubrics, accessible theme tokens and payment boundary.');
