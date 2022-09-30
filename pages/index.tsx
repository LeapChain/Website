import type { NextPage } from 'next'
import { Header } from '../src/components/Header'
import { PageHeader } from '../src/components/PageHeader'

import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      
      <Header title='Home' />

      <PageHeader />
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          The next <span className="text-sky-400">LEAP</span> for crypto.
        </h1>

        <div className='mt-8 text-center'>
          <p>
            We are in active development.
          </p>
          <span>Stay tuned on <a href="">Discord</a> for updates and contribute to polls to make a difference.</span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
