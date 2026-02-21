

const Header = ({ search, setSearch, status, setStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-8 flex flex-col md:flex-row md:justify-between md:items-center"
    >
      <input
        className="w-full md:w-1/3 rounded-md border p-1"
        placeholder="Search for Users..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex">
        <button
          onClick={() => setStatus("all")}
         className={`transition ${
      status === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
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
