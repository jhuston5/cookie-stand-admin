import { useState } from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

const Main = () => {
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

    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-emerald-50">
      <CreateForm locationHandler={locationHandler} />
      <p className="text-grey-100">No Cookie Stands</p>
      <ReportTable stand={stand} />



    </main >
  )
}

export default Main