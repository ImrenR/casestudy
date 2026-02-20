'use client'

const Header = ({search,setSearch,filtered,SetFiltered}) => {


  return (
  
  <div>

<form >

    <input type="text" 
    placeholder="Search Users..."
    onChange={(e)=>setSearch(e.target.value)}
    />

    <div>
      <button
      onClick={(e)=>SetFiltered("all")}
      >All</button>
      <button
       onClick={(e)=>SetFiltered("active")}
      >Active</button>
      <button
       onClick={(e)=>SetFiltered("inactive")}
      >Inactive</button>
    </div>
 
  </form>
   </div>
   
  )
}

export default Header