'use client'
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import data from "@/data/sample_data.json"
import { useState } from "react";



export default function Page() {

const [info, setInfo] = useState({
  email: "",
  firstName: "",
  lastName:""
})
const [statusOption, setStatusOption] = useState('All');


const filteredData = data.filter(a => {
 if(statusOption === 'active') return a.active ===true;
 if(statusOption === 'inactive') return a.active ===false;
 return true; // all   
})

.filter(user=>{
  const fullName =
  `${user.first_name}${user.last_name}`.toLowerCase()
const email= user.email.toLowerCase();

return(
  fullName.includes(info.firstName.toLowerCase())
  && email.includes(info.email.toLowerCase())
)

})

  return (

    <div>
      <Header
      info={info}
      setInfo={setInfo}
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