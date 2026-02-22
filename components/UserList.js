import Link from 'next/link'


const UserList = ({page,setPage,totalPages,paginatedData,total}) => {
   
  return (
    <div >

    <table className='mt-4 w-full border bg-white rounded-2xl'>
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
       {paginatedData.map((item)=> (
  <tr key={item.id}>
          <td className="w-1/2 p-2 md:w-auto">
            <div className="flex gap-2 items-center ">
            <img 
            className='w-10 h-10 rounded-full '
            src={item.avatar} alt={item.first_name} />
            <div className='flex flex-col'>
            <p>{item.first_name + " "+item.last_name}</p>
            {/* Mobile email */}
            <span className='text-xs text-gray-500 md:hidden'>{item.email}</span>
            </div>
      </div>
            </td>

          <td className="hidden md:table-cell text-gray-500">{item.email}</td>
          <td className="hidden md:table-cell text-gray-500">{item.phone_number}</td>
          <td className='w-1/4 text-center md:w-auto'>
            {/* Desktop  */}
          <span
           className={`hidden md:inline-block rounded-full font-medium text-[10px] px-3 py-1 
             ${item.active 
              ? " text-green-900 bg-green-200" 
              : " text-red-900  bg-red-100"}`}
          >{item.active ? "Active" : "Inactive"}</span>
          {/* Mobile */}
            <span
           className={`inline-block md:hidden w-3 h-3 border rounded-full 
            ${item.active 
              ? "bg-green-800 border-green-800" 
              : "bg-red-800 border-red-800"}`}
          ></span>
          </td>
          <td>
            <Link href={`/user/${item.id}`}
            className='text-xs text-gray-500 border rounded-sm px-3 py-1'>
            View
            </Link>
          </td>
        </tr>
       ))} 
      
      </tbody>
      </table>
<div className='p-2 border-t-3 border bg-white rounded-md flex justify-between items-center'>
<span className='text-gray-500 text-sm'>
  Showing {(page-1)*10+1} - 
  {Math.min(page*10,total)} of {total}</span>
<div>
  <button
  onClick={()=> setPage(p=> Math.max(1,p-1))}
  disabled={page === 1}
  className='border px-3 py-1 rounded-md hover:bg-blue-500 hover:text-black transition-all disabled:opacity-50 disabled:text-black-200 '
  >Prev</button>
  <button
  onClick={()=> setPage(p=> Math.min(totalPages, p+1))} 
  disabled={page === totalPages}
   className="border px-3 py-1 rounded-md hover:bg-blue-500 hover:text-black disabled:opacity-50 disabled:text-black-200 transition-all"
  >Next</button>
</div>
</div>

    
    </div>
  )
}

export default UserList