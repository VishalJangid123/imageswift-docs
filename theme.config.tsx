import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import Script from 'next/script'

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
  editLink : { text :""},
  feedback : {content : ""},

  head: () => { return (<>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Optimize Unity visuals effortlessly! ImageSwift offers dynamic image manipulation, creative effects, and seamless integration for a polished user experience. Elevate your Unity projects with ease. #UnityImageProcessing #GameDev #GraphicsTools #ImageSwift" />
    <meta name="og:title" content="ImageSwift for Unity Image Processing and Texture Customization" />
    <meta property="og:image" content="https://vishaljangid123.github.io/portfolio//Images/ImageSwift_cover.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://vishaljangid123.github.io/imageswift-docs/" />
    <meta property="twitter:title" content="ImageSwift for Unity Image Processing and Texture Customization" />
    <meta property="twitter:description" content="Optimize Unity visuals effortlessly! ImageSwift offers dynamic image manipulation, creative effects, and seamless integration for a polished user experience. Elevate your Unity projects with ease. #UnityImageProcessing #GameDev #GraphicsTools #ImageSwift" />
    <meta property="twitter:image" content="https://vishaljangid123.github.io/portfolio//Images/ImageSwift_cover.png" />
    
    <link rel="icon" type="image/png" sizes="32x32" href="/imageswift-docs/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imageswift-docs/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imageswift-docs/icons/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MLE4PNXL6G"></script>
        <script src="/imageswift-docs/ga.js"></script>

      
  </>
)}

  
  ,
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
