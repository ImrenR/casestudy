'use client'
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import data from "@/data/sample_data.json"
import { useState } from "react";



export default function Page() {

const [search, setSearch] = useState("")
const [statusOption, setStatusOption] = useState('All');


const filteredData = data.filter(a => {
 if(statusOption === 'active') return a.active ===true;
 if(statusOption === 'inactive') return a.active ===false;
 return true; // all   
})

.filter(user=>{
  const fullName =`${user.first_name ||' '}${user.last_name || ''}`.toLowerCase()
   const email= user.email.toLowerCase();
const searchText= search.toLowerCase()
return(
  fullName.includes(searchText)
 || email.includes(searchText)
)

})

  return (

    <div>
      <Header
      search={search}
      setSearch={setSearch}
      statusOption={statusOption}
      setStatusOption={setStatusOption}
      />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
    
      <UserList data={filteredData}/> 
      {/* I have passed the data directly into the userList */}
    </div>
    </div>
  );
}