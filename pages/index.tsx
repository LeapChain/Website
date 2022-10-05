import type { NextPage } from 'next'

import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/NavHeader'
import { Footer } from '@/src/components/Footer'
import {DISCORD_URL} from '@/src/constants/links'

import styles from '../styles/Home.module.css'
import { PageLayout } from '@/src/layouts/PageLayout'


const Home: NextPage = () => {
  return (
    
    <>
      <MetaHeader title='Home' />
      <PageHeader />
      <PageLayout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            The next <span className="text-sky-400">LEAP</span> for crypto.
          </h1>

          <div className='mt-8 text-center'>
            <p>
              We are in active development.
            </p>
            <span>Stay tuned on <a target="_blank" rel="noreferrer" className="text-sky-400 underline" href={DISCORD_URL}>Discord</a> for updates and contribute to polls to make a difference.</span>
          </div>
        </main>
      </PageLayout>
      <Footer />      
    </>
  )
}

export default Home
