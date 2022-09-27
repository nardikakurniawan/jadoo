import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jadoo</title>
        <meta name='description' content='Jadoo App Travel' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-white">Hello World</div>
    </div>
  )
}
