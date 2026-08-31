import type {Config} from '@docusaurus/types';
import type {Options as PresetOptions, ThemeConfig} from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skunkworks Academy | Digital Platforms',
  tagline: 'Job-ready GitHub, CodeRabbit, and Shopify skills',
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
  presets: [[
    'classic',
    {
      docs: {
        routeBasePath: '/',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/skunkworks-academy/digital-platform-courses/tree/main/',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    } satisfies PresetOptions,
  ]],
  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {name: 'description', content: 'Three assessed, self-paced digital platform courses from Skunkworks Academy.'},
      {name: 'keywords', content: 'GitHub, CodeRabbit, Shopify, self-paced learning, skills assessment, Skunkworks Academy'},
    ],
    navbar: {
      title: 'Digital Platform Courses',
      logo: {alt: 'Skunkworks Academy', src: 'img/favicon.svg'},
      items: [
        {to: '/github/', label: 'GitHub', position: 'left'},
        {to: '/coderabbit/', label: 'CodeRabbit', position: 'left'},
        {to: '/shopify/', label: 'Shopify', position: 'left'},
        {to: '/quality/standards', label: 'Quality', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Courses', items: [
          {label: 'GitHub Foundations & Delivery', to: '/github/'},
          {label: 'CodeRabbit AI Code Review', to: '/coderabbit/'},
          {label: 'Shopify Store Operations', to: '/shopify/'},
        ]},
        {title: 'Learner support', items: [
          {label: 'Study and accessibility guide', to: '/learner-guide'},
          {label: 'Assessment policy', to: '/quality/assessment-policy'},
          {label: 'Standards alignment', to: '/quality/standards'},
        ]},
        {title: 'Skunkworks Academy', items: [
          {label: 'Academy website', href: 'https://www.skunkworks.africa/'},
          {label: 'GitHub organization', href: 'https://github.com/skunkworks-academy'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skunkworks Academy. Built with Docusaurus.`,
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    mermaid: {theme: {light: 'neutral', dark: 'dark'}},
  } satisfies ThemeConfig,
};

export default config;


