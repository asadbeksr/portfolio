import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function SEO({
  title = "Asadbek's Portfolio",
  description = 'Creative Portfolio',
  image = '',
  url = '',
  twitterUsername = 'asadbeksr',
}) {
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = [
    '_________🛻',
    '________🛻_',
    '_______🛻__',
    '______🛻___',
    '_____🛻____',
    '____🛻_____',
    '___🛻______',
    '__🛻_______',
    '_🛻________',
    '🛻_________',
    '__________',
  ];
  const handleScroll = () => {
    setTimeout(() => {
      if (currentTitle === titles.length - 1) {
        setCurrentTitle(0);
      } else {
        setCurrentTitle(currentTitle + 1);
      }
    }, 200);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      setTimeout(() => {
        setCurrentTitle(null);
      }, 5000);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentTitle]);

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      />
      <meta name='theme-color' content='#123e4e' />
      <meta name='robots' content='index,follow' />

      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/images/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/images/favicons/favicon-16x16.png'
      />
      <link
        rel='apple-touch-icon'
        href='/images/favicons/apple-touch-icon.png'
      />
      <link rel='manifest' href='/images/favicons/site.webmanifest' />
      <link
        rel='android-chrome'
        sizes='192x192'
        href='/images/favicons/android-chrome-192x192.png'
      />
      <link
        rel='android-chrome'
        sizes='512x512'
        href='/images/favicons/android-chrome-512x512.png'
      />

      <title>{titles[currentTitle] ?? title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='portfolio, creative, unique, inspiring, react, next, software engineer, javascript, developer, frontend, asadbek, savronov, asadbek savronov,  udevs, udevs.io'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={title} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:site' content={`@${twitterUsername}`} />
      <meta name='twitter:creator' content={`@${twitterUsername}`} />
    </Head>
  );
}
