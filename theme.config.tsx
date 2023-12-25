import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>ImageSwift</span>,
  project: {
    link: 'https://github.com/VishalJangid123',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/VishalJangid123',
  footer: {
    text: 'ImageSwift',
  },

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – ImageSwift'
      }
    }
  }
}


export default config
