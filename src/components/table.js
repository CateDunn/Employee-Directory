import React from "react";
import Header from "./Header"
import { useTable, useSortBy } from 'react-table'
import './styling.css'
import Search from "./search"

const employees = [
  {name: "Alex Karev", department: "Pediatrics", email: "alexkarev@grey-sloan.com"},
  {name: "Meredith Grey", department: "General Surgery", email: "meredithgrey@grey-sloan.com"},
  {name: "Catherine Fox", department: "Hospital Management", email: "catherinefox@grey-sloan.com"},
  {name: "Maggie Pierce", department: "Cardiothoracics", email: "maggiepierce@greysloan.com"},
  {name: "Amelia Shepherd", department: "Neurological", email: "ameliashepherd@greysloan.com"},
  {name: "Jackson Avery", department: "Plastic Surgery", email: "jacksonavery@grey-sloan.com"},
  {name: "Andrew Deluca", department: "Residents", email: "andrewdeluca@grey-sloan.com"},
  {name: "Owen Hunt", department: "Trauma", email: "owenhunt@grey-sloan.com"},
  {name: "Teddy Altman", department: "Cardiothoracics", email: "teddyaltman@greysloan.com"},
  {name: "Richard Webber", department: "General Surgery", email: "richardwebber@greysloan.com"}
]

function Table() {
  const data = employees
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Email',
        accessor: 'email',
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )
  const firstPageRows = rows.slice(0, 20)
  

  return (
    <>
    < Header />
    < Search />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )}
        )}
      </tbody>
    </table>
    <br />
   
  </>
  )
}

export default Table;
