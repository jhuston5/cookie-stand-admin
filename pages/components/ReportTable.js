import TableBody from './TableBody'
const ReportTable = ({ stands }) => {

  const updateTable = (event) => {
    event.preventDefault();

  }
  return (

    <table className="w-1/2 mx-auto my-4 bg-emerald-500">
      <thead>
        <tr>
          <th className="border border-gray-700">Location</th>
          <th className="border border-gray-700">Minimum Customer</th>
          <th className="border border-gray-700">Maximum Customer</th>
          <th className="border border-gray-700">Average Sale</th>

        </tr>
      </thead>
      <TableBody
        stands={stands} />
    </table>
  )
}

export default ReportTable