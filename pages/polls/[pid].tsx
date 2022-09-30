import { useState } from 'react'
import { useRouter } from 'next/router'
import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/NavHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'

import styles from '../../styles/Home.module.css'

const PollDetail = () => {
  const router = useRouter()
  const {pid} = router.query
  const [polls, setPolls] = useState([])

  return (
    <>
      <MetaHeader title='Home' />
      
      <PageHeader />

      <PageLayout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Polls
          </h1>

          <div className='mt-8 text-center'>
          </div>
        </main>
      </PageLayout>
      <Footer />
    </>
  )
}

export default PollDetail
