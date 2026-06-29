function UserSearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="min-w-80 flex-1 max-[992px]:w-full">

      <input
        className="w-full rounded-[45px] border-0 bg-white px-[22px] py-[17px] text-base shadow-[0_12px_28px_rgba(15,23,42,.08)] transition duration-300 ease-in-out placeholder:text-[#94a3b8] focus:scale-[1.01] focus:outline-none focus:shadow-[0_15px_30px_rgba(37,99,235,.2)] max-[576px]:px-[18px] max-[576px]:py-3.5 max-[576px]:text-sm"
        type="text"
        placeholder="🔍 Search by Name, Email or Department..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
}

export default UserSearchBar;
