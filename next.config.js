const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  distDir: "out",
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};

