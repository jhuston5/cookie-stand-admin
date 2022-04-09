import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Header from './components/Header'
import HeadComponent from './components/HeadComponent'
import Footer from './components/Footer'
import Main from './components/Main'
const Home: NextPage = () => {

  const [stand, setStandDetails] = useState({})
  console.log("Const Stand", stand)
  function locationHandler(event) {
    event.preventDefault();

    const jresp = ["JSON Data"]
    const stand = {
      location: event.target.location.value,
      minCustomer: event.target.minCustomer.value,
      maxCustomer: event.target.maxCustomer.value,
      avgSale: event.target.avgSale.value,
    }
    // const new_stand = Object.keys(stand).map(function (key, index) {
    //   new_stand.push()
    // });

    console.log(stand);
    setStandDetails(stand);
  }

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
