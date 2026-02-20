"use client";

const UserList = ({ filteredUsers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200  rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-4 border-b">USER</th>
            <th className="text-left py-2 px-4 border-b">EMAIL</th>
            <th className="text-left py-2 px-4 border-b">PHONE NUMBER</th>
            <th className="text-left py-2 px-4 border-b">STATUS</th>
            <button>VIEW</button>
          </tr>
        </thead>
       
        {filteredUsers.map(({avatar,id,first_name,last_name,email,phone_number,active})=> {
 <tbody key={id}>
  <tr>      
            <th className="text-left py-2 px-4 border-b">{first_name}{last_name}</th>
            <th className="text-left py-2 px-4 border-b">{email}</th>
            <th className="text-left py-2 px-4 border-b">{phone_number || "-"}</th>
            <th className="text-left py-2 px-4 border-b">{active ? "text-green-600" : "text-red-600, text-bg-warning"}</th>
            <button>VIEW</button>
          </tr>
 </tbody>
        })}


       
      </table>
    </div>
  );
};

export default UserList;
