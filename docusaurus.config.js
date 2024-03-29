module.exports = {
  title: "김도영 (Kim Do Young)",
  tagline: "TS 풀스택 프로그래머를 꿈꾸는 프론트 주력의 개발자 입니다.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dosimpact | TIL 🚀",
      logo: {
        alt: "My Site Logo",
        src:
          "https://avatars0.githubusercontent.com/u/55613273?s=460&u=0b72dd7b4a2e89a3da8a4917644f3de24d8af0b1&v=4",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/DosImpact/TIL",
          label: "GitHub",
          position: "right",
        },
        {
          href:
            "https://www.notion.so/Kim-Do-Young-623609d5699849b3a5db5b1cc248c609",
          label: "Notion",
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
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // ✅ Please change this to your repo.
          editUrl: "https://github.com/DosImpact/TIL/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // ✅ Please change this to your repo.
          editUrl: "https://github.com/DosImpact/TIL/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
