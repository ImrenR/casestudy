'use client'


import Header from '@/components/Header'
import UserList from '@/components/UserList'
import data from "@/data/sample_data.json"
import { useState } from 'react'


const page = () => {


 const [search, setSearch] = useState("")
 const [filterWButton, setFilterWButton] = useState('all') // at first I choose first button
  
const filteredUsers = 

data.filter((item)=> {
  if(filterWButton == "all") // if user click on "all" buttom rn true
    return true
return item.status === filter // if user choose one of bottom called inactive or active
})
.filter((item)=>
item.name.toLowerCase().includes(search.toLowerCase())
)
  


  return (
    <div>

      <Header filter={filter} setFilter={setFilter} search={search} setFilter={setFilter}/>
      <UserList filteredUsers={filteredUsers}/>
    </div>
  )
}

export default page