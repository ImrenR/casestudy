import Link from "next/link";
import React from "react";

const UserList = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto m-8 rounded">
        {/* Desktop Table */}
      <table className="hidden md:table w-full min-w-full bg-white border-collapse shadow-md">
        <thead>
          <tr className="text-xs text-gray-400 font-thin">
            <th className="py-2 px-4 border-b text-left">USERS</th>
            <th className="py-2 px-4 border-b text-left">EMAIL</th>
            <th className="py-2 px-4 border-b text-left">PHONE</th>
            <th className="py-2 px-4 border-b text-left">STATUS</th>
            <th className="py-2 px-4 border-b text-left"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((users) => (
            <tr key={users.id}>
              <td className="py-2 px-4 border-b flex items-center gap-2">
                <img src={users.avatar} alt={users.first_name} 
                className=" w-7 rounded-full"
                
                />
                
               <span className="text-black-200"
               > {users.first_name+ " "+ users.last_name}</span>
               
              </td>
              <td className="py-2 px-4 border-b text-gray-600">{users.email}</td>
              <td className="py-2 px-4 border-b text-gray-600">{users.phone_number}</td>
              <td className="py-2 px-4 border-b">{users.active ? "text-bg-green" : "text-bg-red"}</td>
              <td className="py-2 px-4 border-b">
                <Link
                className="border text-sm px-3 my-2 py-1 text-gray-500 rounded-md "
                href={`/user/${users.id}`}
                // button has been replaced with Link to navigate details page
                >View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Mobile Cards */}
       <table className="table:auto md:hidden w-full  bg-white border-collapse shadow-md">
       
        <tbody>
          {data.map((users) => (
            <tr key={users.id}>
              <td className="py-2 px-4 border-b flex items-center gap-2">
                <img src={users.avatar} alt={users.first_name} 
                className=" w-7 rounded-full"
                
                />
                
               <span className="text-black-200"
               > {users.first_name+ " "+ users.last_name}</span>
               
              </td>
              <td className="py-2 px-4 border-b text-gray-600">{users.email}</td>
              <td className="py-2 px-3">
                <span
                className={`w-3 h-3 rounded-full d-inline-block accordion
                  ${users.active ? "bg-green-500" : "bg-red-500"}`}
                >

                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <Link
                className="border text-sm px-3 my-2 py-1 text-gray-500 rounded-md "
                href={`/user/${users.id}`}
                // button has been replaced with Link to navigate details page
                >View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserList;
