import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props{
  tweets: Tweet[]
}

const Home = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl ">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
      
    </div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps = async (context) => {

  const tweets = await fetchTweets();

  return{
    props: {
      tweets,
    }
  }
}