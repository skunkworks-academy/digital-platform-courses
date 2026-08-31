import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const courseItems = (slug: string) => [
  `${slug}/index`, `${slug}/course-guide`,
  {type: 'category' as const, label: 'Learn', collapsed: false, items: [
    `${slug}/modules/01`, `${slug}/modules/02`, `${slug}/modules/03`,
    `${slug}/modules/04`, `${slug}/modules/05`, `${slug}/modules/06`,
  ]},
  {type: 'category' as const, label: 'Practise', collapsed: false, items: [
    `${slug}/labs/lab-01`, `${slug}/labs/lab-02`, `${slug}/labs/lab-03`,
  ]},
  {type: 'category' as const, label: 'Prove your skill', collapsed: false, items: [
    `${slug}/assessment/knowledge-check`, `${slug}/assessment/capstone`, `${slug}/assessment/rubric`,
  ]},
  `${slug}/references`,
];

const sidebars: SidebarsConfig = {
  catalog: [
    'index', 'learner-guide',
    {type: 'category', label: 'GitHub Foundations & Delivery', items: courseItems('github')},
    {type: 'category', label: 'CodeRabbit AI Code Review', items: courseItems('coderabbit')},
    {type: 'category', label: 'Shopify Store Operations', items: courseItems('shopify')},
    {type: 'category', label: 'Quality & Governance', items: ['quality/assessment-policy', 'quality/standards']},
  ],
};
export default sidebars;
