import { useState } from "react";

function UserFilterPanel({ filters, setFilters }) {
  const [showFilter, setShowFilter] = useState(false);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  return (
    <div className="relative max-[992px]:w-full">

      <button
        className="cursor-pointer rounded-[40px] border-0 bg-[linear-gradient(135deg,#06b6d4,#2563eb)] px-[25px] py-[15px] font-semibold text-white brightness-100 shadow-[0_10px_25px_rgba(37,99,235,.2)] transition-[transform,filter] duration-350 ease-in-out hover:-translate-y-[3px] hover:brightness-75 active:scale-[.96] max-[992px]:w-full"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? "✖ Close Filters" : "⚙ Filters"}
      </button>

      {showFilter && (
        <div className="mt-[18px] w-full animate-popup rounded-[20px] bg-white/96 p-7 shadow-[0_20px_45px_rgba(0,0,0,.1)] backdrop-blur-[12px] max-[576px]:p-5">

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 max-[576px]:grid-cols-1">

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">First Name</label>

              <input
                className="rounded-xl border border-[#dbe4f0] bg-white p-[13px] text-[15px] transition duration-300 ease-in-out focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={filters.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Last Name</label>

              <input
                className="rounded-xl border border-[#dbe4f0] bg-white p-[13px] text-[15px] transition duration-300 ease-in-out focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={filters.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Email</label>

              <input
                className="rounded-xl border border-[#dbe4f0] bg-white p-[13px] text-[15px] transition duration-300 ease-in-out focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                type="text"
                name="email"
                placeholder="Enter Email"
                value={filters.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Department</label>

              <select
                className="cursor-pointer rounded-xl border border-[#dbe4f0] bg-white p-[13px] text-[15px] transition duration-300 ease-in-out focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                name="department"
                value={filters.department}
                onChange={handleChange}
              >
                <option value="">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

          </div>

          <div className="mt-[22px] flex justify-end">

            <button
              className="cursor-pointer rounded-[30px] border-0 bg-[linear-gradient(135deg,#ef4444,#dc2626)] px-6 py-3 font-semibold text-white brightness-100 transition-[transform,box-shadow,filter] duration-350 ease-in-out hover:-translate-y-0.5 hover:brightness-75 hover:shadow-[0_12px_24px_rgba(239,68,68,.28)] active:scale-[.96]"
              onClick={clearFilters}
            >
              Reset
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default UserFilterPanel;
