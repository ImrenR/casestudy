import UserList from "@/components/UserList";
import data from "@/data/sample_data.json"



export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <UserList data={data}/> 
      {/* I have passed the data directly into the userList */}
    </div>
  );
}