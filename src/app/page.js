"use client";

import Header from "@/components/Header";
import UserList from "@/components/UserList";
import data from "../data/sample_data.json";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredData = data
    .filter(item => {
      if (status === "active") return item.active ;
      if (status === "inactive") return !item.active ;
      return true; // for all
    })
    .filter(a => {
      const name = `${a.first_name}${a.last_name}`.toLowerCase();
      const email = a.email.toLowerCase();
      const searchText = search.toLowerCase();
      return name.includes(searchText) || email.includes(searchText);
    });

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
      <UserList data={filteredData} />
    </div>
  );
}