"use client";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
      <div className="flex justify-center items-center h-screen">
        <p>User Not Found</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <div className="mb-4">
        <Link href="/" className="inline-flex border rounded-lg px-4 text-sm bg-white text-gray-500 hover:bg-gray-300 gap-1">
         <FaLongArrowAltLeft className="relative top-1" />
  Back to User List
        </Link>
      </div>
      <div className="w-full border rounded-lg shadow-md p-6 bg-white flex flex-col items-center gap-1">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="rounded-full w-24 h-24 md:w-28 md:h-28"
        />
        <h2
        className="text-lg font-semibold text-center"
        >{user.first_name + " " + user.last_name}</h2>
        <p
        className="text-sm text-gray-600 text-center"
        >{user.title}</p>
         <span className={` py-1 text-sm font-medium rounded-lg border
                  ${user.active
                    ? "bg-green-100 text-green-800 border-green-400 px-2"
                    :"bg-red-100 text-red-800 border-red-400 px-1"
                  }`}>
                  {user.active ? "Active" : "Inactive"}
                </span>
   
        <div className="w-full mt-2 space-y-1 text-sm text-left">
          <p className="text-light">
            Email:
            <span className="mx-8 font-thin text-gray-600 ">{user.email}</span>
          </p>
          <div className="w-full mt-2 space-y-1 text-sm text-left">
          <p className="text-light">
            Phone:
            <span className="mx-8 font-thin text-gray-600 ">
              {user.phone_number}
            </span>
          </p>
          </div>
          <p>
            University:
            <span className="mx-3 font-thin text-gray-600">{user.school}</span>
          </p>
      
         <div className="w-full mt2">
      <p className="text-sm mb-1">Skills:</p>
<div className="flex flex-wrap gap-2 text-xs">
   
       <button className="px-2 py-1 border bg-gray-200 rounded hover:bg-blue-300 ">{user.main_skill.slice(0,10)}</button>
      {user.secondary_skills?.map((skill,index)=> (
        <button className="px-2 py-1 border bg-gray-200 rounded hover:bg-blue-300"
        key={index}>{skill}</button>
      ))}
      </div>
      </div> 
        <p className="w-full mt-4 p-4 text-sm italic bg-gray-100 rounded border border-gray-200">"{user.description}"</p>
</div>
      </div>

     
     
    
    </div>
  );
};

export default page;
