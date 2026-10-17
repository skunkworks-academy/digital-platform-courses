import type {Config} from '@docusaurus/types';
import type {Options as PresetOptions, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skunkworks Academy | Digital Platforms',
  tagline: 'Practical beginner IT skills through five interactive self-paced courses',
  favicon: 'img/favicon.svg',
  url: process.env.SKW_CANONICAL_SITE_URL || 'https://skunkworks-academy.github.io',
  baseUrl: '/digital-platform-courses/',
  organizationName: 'skunkworks-academy',
  projectName: 'digital-platform-courses',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'throw'}},
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: {routeBasePath:'/',sidebarPath:'./sidebars.ts',editUrl:'https://github.com/skunkworks-academy/digital-platform-courses/tree/main/',showLastUpdateAuthor:false,showLastUpdateTime:false},
    blog:false,theme:{customCss:'./src/css/custom.css'}
  } satisfies PresetOptions]],
  themeConfig: {
    image:'img/social-card.svg',
    metadata:[{name:'description',content:'Five beginner and specialist assessed self-paced courses from Skunkworks Academy.'},{name:'robots',content:process.env.SKW_CANONICAL_SITE_URL ? 'index, follow' : 'noindex, follow'}],
    navbar:{title:'Skunkworks Academy',logo:{alt:'Skunkworks Academy',src:'img/favicon.svg'},items:[
      {to:'/beginner/ai/',label:'AI',position:'left'},
      {to:'/beginner/cyber/',label:'Cybersecurity',position:'left'},
      {to:'/beginner/it-support/',label:'IT Support',position:'left'},
      {to:'/beginner/microsoft-productivity/',label:'Microsoft 365',position:'left'},
      {to:'/beginner/cloud/',label:'Cloud',position:'left'},
      {to:'/quality/assessment-policy',label:'Assessment policy',position:'right'}
    ]},
    footer:{style:'dark',links:[{title:'Courses',items:[{label:'Five beginner IT courses',to:'/beginner/'},
      {label:'GitHub',to:'/github/'},{label:'CodeRabbit',to:'/coderabbit/'},{label:'Shopify',to:'/shopify/'},
      {label:'Microsoft 365',to:'/m365/'},{label:'AI Automation',to:'/automation/'}
    ]},{title:'Support',items:[{label:'Academy',href:'https://www.skunkworksacademy.com/'},{label:'Email',href:'mailto:training@skunkworks.africa'}]}],copyright:`Copyright © ${new Date().getFullYear()} Skunkworks Academy.`},
    docs:{sidebar:{hideable:true,autoCollapseCategories:true}},
    mermaid:{theme:{light:'neutral',dark:'dark'}}
  } satisfies ThemeConfig,
};
export default config;
