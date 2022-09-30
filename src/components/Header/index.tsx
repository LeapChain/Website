import React from 'next';
import Head from 'next/head'

export interface PageProps {
  description?: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'profile' | 'book';
  url?: string;
  title?: string;
}

export const Header = ({
  description,
  imageUrl,
  type,
  url,
  title,
}: PageProps) => (
  <Head>
    <title>{title} | LeapChain</title>
    <meta name="description" property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)