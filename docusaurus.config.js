// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "text/javascript",
      },
      innerHTML: `
                window.WhatapBrowserAgent = {
                    config: {
                        projectAccessKey: 'x41s721th3oan-x5028n4us9821p-z235q41qaorkbe',
                        pcode: 1927,
                        sampleRate: 100,
                        proxyBaseUrl: "https://rumote.whatap-browser-agent.io/",
                    },
                };
        `,
    },
    {
      tagName: "script",
      attributes: {
        src: "https://repo.whatap-browser-agent.io/rum/dev/v1/whatap-browser-agent.js",
      },
    },
  ],
  title: "WhaTap K8S",
  tagline: "와탭으로 쿠버네티스를 거침없이 항해",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://course.whatapk8s.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "whatap", // Usually your GitHub org/user name.
  projectName: "k8s-edu-web", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/whatap/k8s-edu-web/",
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/social-card.svg",
      navbar: {
        logo: {
          alt: "WhaTap Logo",
          src: "img/whatap_logo_dark.png",
          srcDark: "img/whatap_logo_light.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "학습하기",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/whatap/k8s-edu-web",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "학습하기",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "YouTube",
                href: "https://www.youtube.com/@WhaTapKubernetes",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/whatapk8s",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Docs",
                href: "https://docs.whatap.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/whatap/kuber-apm-boilerplate",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 WhaTap Labs Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
