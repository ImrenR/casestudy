import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default async function UserDetails({ params }) { 
 
  const { id } = await params; 

  const res = await fetch(`http://localhost:3000/api/user/${id}`);
  //!on postman has been checked and image imported in this project file
  if (!res.ok) throw new Error("Failed to fetch data");
  const user = await res.json();


  return (
    <div className="max-w-md w-full px-3 md:px-0 mx-auto mt-6">
      <div className="mb-3">
        <Link
          href="/"
          className="inline-flex border rounded-md px-3 text-sm bg-white text-gray-500 hover:bg-gray-300 gap-1"
        >
          <FaLongArrowAltLeft className="relative top-1" /> Back to User List
        </Link>
      </div>

      <div className="w-full border rounded-xl shadow-md p-4 bg-white sm:p-6 space-y-4 ">
        <div className="flex flex-col items-center text-center space-y-2 ">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="rounded-full w-24 h-24 md:w-28 md:h-28"
          />
          <div>
            <h2 className="text-lg font-semibold text-center">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-sm font-bold text-gray-500 text-center">
              {user.title}
            </p>
          </div>
          <span
            className={`text-xs font-medium rounded-lg  m-2 transition
                  ${
                    user.active
                      ? "bg-green-100 text-green-800 border-green-400 px-2"
                      : "bg-red-100 text-red-800 border-red-400 px-1"
                  }`}
          >
            {user.active ? "Active" : "Inactive"}
          </span>
        </div>
        <hr className="w-full border-gray-200 my-2 shadow-sm" />

        <div className="space-y-3 text-sm">
          {/* Email */}
          <div className="grid grid-cols-2 items-center">
            <span className="font-semibold">Email:</span>
            <span className="text-gray-500 break-all">{user.email}</span>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-2 items-center">
            <span className="font-semibold">Phone:</span>
            <span className="text-gray-500">{user.phone_number}</span>
          </div>

          {/* University */}
          <div className="grid grid-cols-2  items-center">
            <span className="font-semibold">University:</span>
            <span className="text-gray-500 ">{user.school}</span>
          </div>

          {/* Skills */}
          <div className="md:col-span-2 space-y-2">
            <span className="font-semibold">Skills:</span>

            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] border rounded-md w-20 px-1 py-0.5 bg-gray-100 hover:bg-blue-200 hover:text-blue-400 text-center">
                {user.main_skill.slice(0, 6)}..
              </span>

              {user.secondary_skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-[10px] border rounded-md w-20 px-1 py-0.5 bg-gray-100 hover:bg-blue-200 hover:text-blue-400 text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border text-sm text-center font-light text-gray-500 bg-gray-100 rounded-lg mt-4 w-full p-3 italic">
          <p>"{user.description}"</p>
        </div>
      </div>
    </div>
  );
}
