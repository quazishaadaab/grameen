import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    // gives post box and all componnents under this div a margin( so it creates a border around the components instead of the components being
    // having no margins and appearing from the left most edge to the right most edge)
    <div className="my-7 mx-auto max-w-5xl"> {/*  mx-auto will center it horizontally. auto is dynamic so when more text is inserted, it will automatically center itself*/}
   
      <Head>
        <title>Grammen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox/>
      <div className='flex'>
      <Feed/>
      </div>
{/* Post Box */}
<div>


</div>


    </div>
  )
}

export default Home
