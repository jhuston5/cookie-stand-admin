import type { NextPage } from 'next'
import Image from 'next/image'
import Header from './Header'
import HeadComponent from "./HeadComponent"
import Footer from './Footer'
import Main from './Main'
const Home: NextPage = () => {


  return (
    <div>
      <HeadComponent />
      <Header />
      <Main />
      <Footer />

    </div >
  )
}

export default Home
