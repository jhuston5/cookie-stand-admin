
const TableBody = ({ stands }) => {
  return (
    <tbody>

      {stands.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td className="bg-emerald-400">{val}</td>
          ))}
        </tr>
      ))}

    </tbody>
  )
}

export default TableBody