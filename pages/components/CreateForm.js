

const CreateForm = ({ locationHandler, handleAddFormChange }) => {
  return (
    <form onSubmit={locationHandler} onChange={handleAddFormChange} className="w-3/4 p-4 my-4 rounded bg-emerald-400">
      <h2>Create Cookie Stand</h2>
      <div className="mb-6">
        <label>Location</label>
        <input name="location" className="flex-auto w-3/4 m-4 bg-slate-200"></input>
      </div>
      <div className="flex mt-12 text-center">
        <label className="m-1 bg-emerald-300"><span>Minimum Customers per Hour</span>
          <input
            name="minCustomer"
            type="number"
            min="0"
            className="flex-auto m-4"></input>
        </label>
        <label className="m-1 bg-emerald-300"><span>Maximum Customers per Hour</span>
          <input
            name="maxCustomer"
            type="number"
            min="0"
            className="flex-auto m-4"></input>
        </label>
        <label className="m-1 bg-emerald-300"><span>Average Cookies per Sale</span>
          <input
            name="avgSale"
            type="number"
            min="0"
            className="flex-auto m-4"></input>
        </label>
        <button className="w-4/12 p-4 m-1 rounded bg-emerald-500" type="submit">Create</button>
      </div>
    </form>
  )
}

export default CreateForm