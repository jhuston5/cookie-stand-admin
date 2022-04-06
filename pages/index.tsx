import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cookie Stand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex items-center justify-between p-4 bg-emerald-500 text-black-50">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        <p></p>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-emerald-50">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <form className="w-3/4 p-4 my-4 rounded bg-emerald-400">
          <h2>Create Cookie Stand</h2>
          <div className="mb-6">
            <label>Location</label>
            <input name="stand" className="flex-auto w-3/4 m-4 bg-slate-200"></input>
          </div>
          <div className="flex items-center justify-center flex-1 w-3/4">
            <label>Minimum Customers per Hour</label>
            <input name="minCustomer" className="flex-auto m-4"></input>
            <label>Maximum Customers per Hour</label>
            <input name="maxCustomer" className="flex-auto m-4"></input>
            <label>Average Cookies per Sale</label>
            <input name="avgSale" className="flex-auto m-4"></input>
            <button className="px-2 pl-1 rounded bg-emerald-500">Create</button>
          </div>
        </form>

        <p className="text-grey-100">Report Table Coming Soon...</p>

      </main>

      <footer className="flex items-start justify-start w-full h-24 border-t bg-emerald-500">
        <nav>
          <p className='m-2'>@2021</p>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
        </nav>
      </footer>
    </div >
  )
}

export default Home
