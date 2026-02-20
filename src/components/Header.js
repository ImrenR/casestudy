import React from 'react'

const Header = ({info,setInfo,statusOption,setStatusOption}) => {
  
  
  const handleInputChange = (e)=> {
    setInfo({...info, [e.target.id]:e.target.value})
  }
  
  
  
  return (
    <div className='flex flex-column justify-content-between'>
      <input type="text"
      onChange={handleInputChange}
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
    </div>
  )
}

export default Header