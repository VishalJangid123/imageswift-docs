const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  distDir: "out",
  defaultShowCopyCode: true
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  assetPrefix : "/imageswift-docs/",
  basePath: "/imageswift-docs"
};
