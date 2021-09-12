import type { NextPage } from 'next'
import Head from 'next/head'
import HomeComponent from '../components/home/homecomponent'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <HomeComponent />
      </main>
    </div>
  )
}

export default Home
