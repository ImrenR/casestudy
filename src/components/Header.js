import React from "react";

const Header = ({ search, setSearch, status, setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-center mt-8 md:flex justify-between items-center"
    >
      <input
        className="rounded-md border p-1"
        placeholder="Search for Users..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <button
          onClick={() => setStatus("all")}
         className={`transition ${
      status === "all" ? "bg-blue-400 text-white" : "bg-gray-200"
    }`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("active")}
          className={` transition ${
      status === "active" ? "bg-green-400 text-white" : "bg-gray-200"
    }`}
        >
          Active
        </button>
        <button
          onClick={() => setStatus("inactive")}
        className={` transition ${
      status === "inactive" ? "bg-red-400 text-white" : "bg-gray-200"
    }`}
        >
          Inactive
        </button>
      </div>
    </form>
  );
};

export default Header;
