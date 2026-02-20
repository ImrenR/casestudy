'use client'

const Header = ({search,setSearch,filteredWButton,setFilteredWButton}) => {


  return (
  
  <div>

<form onSubmit={(e)=>e.preventDefault()}>

    <input 
    type="text" 
    placeholder="Search users..."
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />

    <div>
      <button
      className="flex gap-2 mt-2 sm:mt-0"
      type="button"
      onClick={(e)=>setFilteredWButton("all")}
      >All</button>
      <button
       type="button"
       onClick={(e)=>setFilteredWButton("active")}
      >Active</button>
      <button
       type="button"
       onClick={(e)=>setFilteredWButton("inactive")}
      >Inactive</button>
    </div>
 
  </form>
   </div>
   
  )
}

export default Header