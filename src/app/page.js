"use client";

import Header from "../components/Header";

import data from "../data/sample_data.json";
import { useState } from "react";
import UserList from "../components/UserList";

export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);// this needed to able to use next and prev button on the buttom of the page

const pageSize=10;

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


    //! pagination after filter

  const totalPages =Math.ceil(filteredData.length/pageSize);
 const paginatedData =filteredData.slice((page-1)*pageSize, page*pageSize)
// slice => ((1-1)*10), 1*10 => start from 0 end at 10th index

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
      <UserList
      page={page}
      setPage={setPage}
      totalPages={totalPages}
      paginatedData={paginatedData}
      total={filteredData.length} />
    </div>
  );
}