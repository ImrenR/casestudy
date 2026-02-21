import Link from 'next/link'
import React from 'react'

const UserList = ({data}) => {
  return (
    <div >

    <table className='mt-4 w-full border bg-white rounded-lg'>
      <thead className="hidden md:table-header-group" >
        <tr>
       <th>USER</th>
       <th>EMAIL</th>
       <th>PHONE NUMBER</th>
       <th>STATUS</th>
       <th></th>
        </tr>
      </thead>
      <tbody>
       {data.map((item)=> (
  <tr key={item.id}>
          <td className='flex flex-row items-center space-x-1 p-2'>
            <img 
            className='w-10 h-10 rounded-full '
            src={item.avatar} alt={item.first_name} />
            <p>{item.first_name + " "+item.last_name}</p>
      
            </td>
          <td className="hidden md:table-cell">{item.email}</td>
          <td className="hidden md:table-cell">{item.phone_number}</td>
          <td>
            {/* Desktop  */}
          <span
           className={`hidden md:inline-block  rounded-md font-medium text-xs py-1 px-3 border ${item.active ? "border-green-500 text-green-800 bg-green-400" : "border-red-500 text-red-800  bg-red-400"}`}
          >{item.active ? "Active" : "Inactive"}</span>
          {/* Mobile */}
            <span
           className={`inline-block md:hidden w-3 h-3 border rounded-full 
            ${item.active 
              ? "bg-green-500 border-green-500" 
              : "bg-red-500 border-red-500"}`}
          ></span>
          </td>
          <td>
            <Link href={`/user/${item.id}`}>
            View
            </Link>
          </td>
        </tr>
       ))} 
      
      </tbody>
    </table>
    </div>
  )
}

export default UserList