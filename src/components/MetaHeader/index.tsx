import React from 'next';
import Head from 'next/head'

export interface PageProps {
  description?: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  url?: string;
  title?: string;
}

export const MetaHeader = ({
  description,
  imageUrl,
  type,
  url,
  title,
}: PageProps) => {
  const _title = `${title} | LeapChain`
    return (
      <Head>
        <title>{_title}</title>
        <meta name="description" property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  }