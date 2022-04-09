
const ReportTable = ({ stand }) => {
  return (

    <table className="w-1/2 mx-auto my-4">
      <thead>
        <tr>
          <th className="border border-gray-700">Location</th>
          <th className="border border-gray-700">Minimum Customer</th>
          <th className="border border-gray-700">Maximum Customer</th>
          <th className="border border-gray-700">Average Sale</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pl-2 border border-gray-700">{stand.location}</td>
          <td className="pl-2 border border-gray-700">{stand.minCustomer}</td>
          <td className="pl-2 border border-gray-700">{stand.maxCustomer}</td>
          <td className="pl-2 border border-gray-700">{stand.avgSale}</td>

        </tr>
      </tbody>
    </table>
  )
}

export default ReportTable