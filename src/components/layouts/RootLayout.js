import React from 'react'
import Head from 'next/head';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';

export default function Layout({ children }) {
  const websiteTitle = "Squaddeck - Sports Club Management Software";
  const websiteDesc = "Created by NETMOW";
  return (
    <div>
      <Head>
        <title>{websiteTitle}</title>
        <meta name="description" content={websiteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
