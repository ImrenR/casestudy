"use client";

import Link from "next/link";
import React, { use } from "react";
import data from "../../../data/sample_data.json";
const page = ({ params }) => {
  // const { id}=React.use(params);
  // console.log(id) => view button works !

  // consider URL sends the id as string, in data we have a integer("id"=1..) we need to convert it
  const { id } = React.use(params);
  const user = data.find((details) => details.id === parseInt(id));

  if (!user) {
    return (
      <div className="flex justiy-center items-center h-screen">
        <p>User Not Found</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-3">
      <div className="mb-2">
        <Link href="/" className="inline-block border rounded px-4 text-sm bg-white text-gray-500 hover:bg-gray-300">
           Back to User List
        </Link>
      </div>
      <div className="w-full max-w-md border  rounded-lg shadow-md p-6">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="rounded-full mx-auto mb-4 w-20 h-20"
        />
        <h2>{user.first_name + " " + user.last_name}</h2>
        <p>{user.title}</p>
        <p className="mt-4 border-b"> {user.active}</p>
        <div className="gap-1 mb-4">
        <div className="mt-4 mb-2">
          <p className="text-light">
            Email:
            <span className="mx-8 font-thin text-gray-600 ">{user.email}</span>
          </p>
          <p>
            Phone:
            <span className="mx-8 font-thin text-gray-600">
              {user.phone_number}
            </span>
          </p>
          <p>
            University:
            <span className="mx-3 font-thin text-gray-600">{user.school}</span>
          </p>
        </div>
         <div>
      <p>Skills:</p>
<div className="flex justify-content-center text-sm">
   
       <button className="text-xs p-1 m-1 border bg-gray-200 hover:bg-blue-300 rounded ">{user.main_skill.slice(0,10)}</button>
      {user.secondary_skills?.map((skill,index)=> (
        <button className="m-1 p-1 border bg-gray-200 hover:bg-blue-300 rounded text-xs"
        key={index}>{skill}</button>
      ))}
      </div>
      </div> 
        <p className="text-gray-700 mt-4 text-sm border border-none m-4 p-4 bg-gray-200 rounded">{user.description}</p>
</div>
      </div>

     
     
    
    </div>
  );
};

export default page;
