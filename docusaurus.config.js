// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WhaTap K8S',
  tagline: '와탭으로 쿠버네티스를 거침없이 항해',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://course.whatapk8s.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'whatap', // Usually your GitHub org/user name.
  projectName: 'k8s-edu-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/whatap/k8s-edu-web/',
          // showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        // blog: {
        //   showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        themeConfig:{
          colorMode:{
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false
          }
        },
      // Replace with your project's social card
      image: 'img/social-card.svg',
      navbar: {
        title: 'WhaTap',
        logo: {
          alt: 'WhaTap Logo',
          src: 'img/whatap.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/whatap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@WhaTapKubernetes',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/whatapk8s',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                href: 'https://docs.whatap.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/whatap',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 WhaTap Labs Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
