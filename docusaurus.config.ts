import type {Config} from '@docusaurus/types';
import type {Options as PresetOptions, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skunkworks Academy | Digital Platforms',
  tagline: 'Five practical assessed self-paced courses',
  favicon: 'img/favicon.svg',
  url: 'https://skunkworks-academy.github.io',
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
    metadata:[{name:'description',content:'Five practical assessed self-paced courses from Skunkworks Academy.'}],
    navbar:{title:'Skunkworks Academy',logo:{alt:'Skunkworks Academy',src:'img/favicon.svg'},items:[
      {to:'/github/',label:'GitHub',position:'left'},
      {to:'/coderabbit/',label:'CodeRabbit',position:'left'},
      {to:'/shopify/',label:'Shopify',position:'left'},
      {to:'/m365/',label:'Microsoft 365',position:'left'},
      {to:'/automation/',label:'AI Automation',position:'left'},
      {to:'/quality/standards',label:'Quality',position:'right'}
    ]},
    footer:{style:'dark',links:[{title:'Courses',items:[
      {label:'GitHub',to:'/github/'},{label:'CodeRabbit',to:'/coderabbit/'},{label:'Shopify',to:'/shopify/'},
      {label:'Microsoft 365',to:'/m365/'},{label:'AI Automation',to:'/automation/'}
    ]},{title:'Support',items:[{label:'Academy',href:'https://www.skunkworksacademy.com/'},{label:'Email',href:'mailto:training@skunkworks.africa'}]}],copyright:`Copyright © ${new Date().getFullYear()} Skunkworks Academy.`},
    docs:{sidebar:{hideable:true,autoCollapseCategories:true}},
    mermaid:{theme:{light:'neutral',dark:'dark'}}
  } satisfies ThemeConfig,
};
export default config;
