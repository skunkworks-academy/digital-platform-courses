import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const courseItems=(s:string)=>[
 s+'/index',s+'/course-guide',
 {type:'category' as const,label:'1. Learn',collapsed:false,items:[
 s+'/modules/01',s+'/modules/02',s+'/modules/03',s+'/modules/04',s+'/modules/05',s+'/modules/06']},
 {type:'category' as const,label:'2. Practical labs',collapsed:true,items:[
 s+'/labs/lab-01',s+'/labs/lab-02',s+'/labs/lab-03']},
 {type:'category' as const,label:'3. Assess capability',collapsed:true,items:[
 s+'/assessment/knowledge-check',s+'/assessment/capstone',s+'/assessment/rubric']},
 s+'/references'
];
const sidebars:SidebarsConfig={catalog:[
 'index','learner-guide',
 {type:'category',label:'Beginner 1 — AI & ChatGPT',items:courseItems('beginner/ai')},
 {type:'category',label:'Beginner 2 — Cybersecurity',items:courseItems('beginner/cyber')},
 {type:'category',label:'Beginner 3 — IT Support',items:courseItems('beginner/it-support')},
 {type:'category',label:'Beginner 4 — Microsoft 365 & Excel',items:courseItems('beginner/microsoft-productivity')},
 {type:'category',label:'Beginner 5 — Cloud Computing',items:courseItems('beginner/cloud')},
 {type:'category',label:'Specialist courses (existing)',collapsed:true,items:[
 {type:'category',label:'GitHub Delivery',items:courseItems('github')},
 {type:'category',label:'CodeRabbit Review',items:courseItems('coderabbit')},
 {type:'category',label:'Shopify Operations',items:courseItems('shopify')},
 'maria/m365','maria/automation'
 ]},
 {type:'category',label:'Quality & Governance',items:['quality/assessment-policy','quality/standards']}
]};
export default sidebars;
