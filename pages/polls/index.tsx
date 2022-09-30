import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/NavHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'

import styles from '../../styles/Home.module.css'

import { Poll, PollStatus } from '@/src/types/Polls'

type Props = {
  polls: Poll[]
}

const Polls = ({ polls }: Props) => {  
  const activePolls = polls.filter(poll => poll.status === PollStatus.InProgress)
  const completedPolls = polls.filter((poll) => poll.status === PollStatus.Completed);
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
            <h2>{activePolls.length > 0 ? 'Active' : 'No Active'} Polls</h2>
            {activePolls?.map((poll: any) => {
              return (<li key={poll._id}>{poll}</li>)
            })}
          </div>

          <div className='mt-8 text-center'>
            <h2>Completed Polls</h2>
            {completedPolls?.map((poll: any) => {
              return (<li key={poll._id}>{poll}</li>)
            })}
          </div>
        </main>
      </PageLayout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://7nfr0m.deta.dev/api/v1/polls')
  const polls = await res.json()

  return {
    props: {
      polls,
    }, // will be passed to the page component as props
  }
}

export default Polls
