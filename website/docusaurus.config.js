/* eslint-disable */
const versions = require('./versions.json');

module.exports = {
  title: 'GraphQLCRUD',
  tagline: 'Specification that extends GraphQL with common data access use cases',
  url: 'https://graphqlcrud.org',
  baseUrl: '/',
  favicon: 'img/logo.png',

  organizationName: 'GraphQLCRUD', // Usually your GitHub org/user name.
  projectName: 'spec', // Usually your repo name.

  themeConfig: {
    disableDarkMode: true,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: 'GraphQLCRUD',
      logo: {
        alt: 'GraphQLCRUD Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/gettingstarted',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: versions[0],
              to: 'docs/getting-started',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/getting-started`,
            })),
            {
              label: 'Master/Unreleased',
              to: 'docs/next/getting-started',
            },
          ],
        },
        {
          to: 'versions',
          label: `v${versions[0]}`,
          position: 'right',
        },
        {
          href: 'https://github.com/GraphQLCRUD/spec',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: 'Releases',
              to: 'docs/release-notes',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/GraphQLCRUD/spec',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/mJ7j84m',
            },
          ],
        },
      ],
      logo: {
        alt: 'AeroGear Logo',
        src: 'img/aerogear.png',
        href: 'https://aerogear.org/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} AeroGear`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/aerogear/GraphQLCRUD/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
