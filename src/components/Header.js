import React from "react";

const Header = ({ search, setSearch, status, setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-center mt-8 md:flex hidden justify-between items-center"
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
          className={` ${
  status === "active" && "bg-blue-400"
}`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("active")}
          className={` ${
  status === "active" && "bg-green-400" 
}`}
        >
          Active
        </button>
        <button
          onClick={() => setStatus("inactive")}
         className={` ${
  status === "active" && "bg-red-400" 
}`}
        >
          Inactive
        </button>
      </div>
    </form>
  );
};

export default Header;
