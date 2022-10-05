import { MetaHeader } from '@/src/components/MetaHeader'
import { PageHeader } from '@/src/components/NavHeader'
import { Footer } from '@/src/components/Footer'
import { PageLayout } from '@/src/layouts/PageLayout'

import styles from '../../styles/Home.module.css'

import { Poll as PollDetail, PollStatus } from '@/src/types/Polls'
import Link from 'next/link'

type Props = {
  polls: PollDetail[]
}

type Poll = {
  _id: PollDetail['_id']
  title: PollDetail['title']
  description: PollDetail['description']
}

const Poll = ({ _id, title, description }: Poll) => (
  <li className="border rounded m-2 hover:opacity-80">
    <a className="p-4 max-w-lg flex flex-col" href={`polls/${_id}`}>
      <>
        <h4 className="text-md font-bold py-2">{title}</h4>
        <span className="text-sm">{description}</span>
      </>
    </a>
  </li>
)

const Polls = ({ polls }: Props) => {  
  const activePolls = polls.filter(poll => poll.status === PollStatus.InProgress)
  const completedPolls = polls.filter((poll) => poll.status === PollStatus.Completed);

  return (
    <>
      <MetaHeader title='Home' />
      
      <PageHeader />

      <PageLayout>
        
        <main className={styles.main}>
          <div className='mt-8'>
            <h2 className="text-center mb-4">{activePolls.length > 0 ? 'Active' : 'No Active'} Polls</h2>
            <ul className="list-none content-center flex flex-col">
            {
              activePolls?.map(
                (poll: Poll) => {
                  return (
                    <Poll key={poll._id} _id={poll._id} title={poll.title} description={poll.description} />
                  )
                }
              )
            }
            </ul>
          </div>
          
          <div className='border-t pt-8 mt-8 text-center'>
            <h2>{completedPolls?.length > 0 ? `${completedPolls.length} Completed Polls` : 'No Polls have finished'}</h2>

            {completedPolls?.map((poll: any) => {
              return (<li key={poll._id}>{poll.title} {poll.description}</li>)
            })}
          </div>
        </main>
      </PageLayout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/v1/polls`)

  const polls = await res?.json()
  return {
    props: {
      polls,
    }, // will be passed to the page component as props
  }
}

export default Polls
