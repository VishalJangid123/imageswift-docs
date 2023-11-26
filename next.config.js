const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  distDir: "out",
  assetPrefix : "/imageswift-docs/",
  basePath: "/imageswift-docs"
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};

