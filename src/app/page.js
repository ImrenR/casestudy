"use client";

import Header from "@/components/Header";
import UserList from "@/components/UserList";
import data from "@/data/sample_data.json";
import { useState } from "react";

const page = () => {
  const [search, setSearch] = useState("");
  const [filterWButton, setFilterWButton] = useState("all"); // at first I choose first button

  const filteredUsers = data.filter((user) => {
if(filterWButton === 'all') return true
if(filterWButton === 'active') return user.active === true
if(filterWButton === 'inactive') return user.active === false
  }).filter(user=>
    //search by first last name OR email
    (user.first_name+ " "+user.last_name).toLowerCase().includes(search.toLowerCase())
    || user.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Header
        filterWButton={filterWButton}
        setFilterWButton={setFilterWButton}
        search={search}
        setSearch={setSearch}
      />
      <UserList filteredUsers={filteredUsers} />
    </div>
  );
};

export default page;
