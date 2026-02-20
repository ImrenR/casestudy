import React from 'react'

const Header = ({search,setSearch,statusOption,setStatusOption}) => {
  
  

  const handleSubmit=(e)=> {
    e.preventDefault()
    setSearch("")
  }
  
  
  return (
    <form onSubmit={handleSubmit}   className='flex flex-col md:flex-row justify-content-between items-center p-4 bg-white'>
      <input type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <div>
        <button
        className={`px-3 py-1 rounded ${statusOption === "All" ? "bg-blue-500" : "bg-red-500"}`}
        onClick={()=>setStatusOption('All')}
        >All</button>
        <button
        className={`px-3 py-1 rounded 
          ${statusOption === "active" && "bg-green-500"}`}
         onClick={()=>setStatusOption('active')}
        >Active</button>
        <button
        className={`px-3 py-1 rounded 
          ${statusOption === "inactive" && "bg-red-500"}`}
         onClick={()=>setStatusOption('inactive')}
        >Inactive</button>
      </div>
    </form>
  )
}

export default Header