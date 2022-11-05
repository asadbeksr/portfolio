import React from 'react'
import Head from 'next/head'

export default function SEO({ title }) {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0'
      />
      <meta charSet='utf-8' />
      <title>{title || "Asadbek's Portfolio "}</title>
      <meta name='description' content='Creative Portfolio' />
      <meta
        name='keywords'
        content='Portfolio, creative, react, next, javascript, developer, frontend, asadbek, asadbekov, asadbekovasadbek, udevs'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title || "Asadbek's Portfolio"}
        key='ogtitle'
      />
      <meta property='og:description' content='Creative Portfolio' key='ogdesc' />
      <meta
        property='og:site_name'
        content={title || "Asadbek's Portfolio"}
        key='ogsitename'
      />
      <meta
        property='og:image'
        // content='https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be'
        key='ogimage'
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title || "Asadbek's Portfolio"} />
      <meta name='twitter:description' content='Next js' />
      <meta name='twitter:site' content={title || "Asadbek's Portfolio"} />
      <meta name='twitter:creator' content='Asadbek Savronov' />
      <meta
        name='twitter:image'
        // content='https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be'
      />

      <link rel='icon' href='/favicon.ico' />
      {/* <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;600;700&display=swap'
        rel='stylesheet'
      /> */}
    </Head>
  )
}
