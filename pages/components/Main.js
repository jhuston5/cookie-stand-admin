import { useState } from 'react'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

const Main = () => {
  const [stands, setStandDetails] = useState([])
  const [addStand, setNewStand] = useState({
    location: '',
    minCustomer: '',
    maxCustomer: '',
    avgSale: '',

  })
  console.log("All Stands", stands)
  console.log("Add Stand", addStand)

  function locationHandler(event) {
    event.preventDefault();

    const newStand = {
      location: addStand.location,
      minCustomer: addStand.minCustomer,
      maxCustomer: addStand.maxCustomer,
      avgSale: addStand.avgSale,
    }

    const newStands = [...stands, newStand]

    console.log(newStands);
    setStandDetails(newStands);

    event.target.reset()
  }

  function handleAddFormChange(event) {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addStand };
    newFormData[fieldName] = fieldValue;
    setNewStand(newFormData)
  }
  return (

    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center bg-emerald-50">
      <CreateForm
        locationHandler={locationHandler}
        handleAddFormChange={handleAddFormChange} />
      {stands.length == 0 &&
        <h2>No Cookie Stands</h2>}

      {stands.length > 0 &&
        <ReportTable stands={stands} />
      }



    </main >
  )
}

export default Main