function UserListPagination({
  currentPage,
  totalPages,
  pageSize,
  setCurrentPage,
  setPageSize,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-7 flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-white px-[25px] py-5 shadow-[0_15px_35px_rgba(15,23,42,.08)] max-[992px]:flex-col max-[992px]:items-start">

      <div className="flex items-center gap-3 font-semibold text-[#334155]">

        <label>Rows per page :</label>

        <select
          className="cursor-pointer rounded-[10px] border border-[#dbe4f0] px-[15px] py-2.5 text-sm outline-none transition duration-300 ease-in-out"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>

      </div>

      <div className="flex flex-wrap items-center gap-2 max-[992px]:w-full max-[992px]:justify-center">

        <button
          className="cursor-pointer rounded-[10px] border-0 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] px-[18px] py-[11px] font-semibold text-white transition-[transform,box-shadow] duration-350 ease-in-out hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_12px_25px_rgba(37,99,235,.28)] active:scale-[.96] disabled:cursor-not-allowed disabled:opacity-45 max-[576px]:px-3.5 max-[576px]:py-2.5 max-[576px]:text-[13px]"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          ◀ Previous
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={
              currentPage === page
                ? "h-[42px] w-[42px] cursor-pointer rounded-full border-0 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,.25)] transition duration-350 ease-in-out active:scale-[.96] max-[576px]:h-[38px] max-[576px]:w-[38px] max-[576px]:text-[13px]"
                : "h-[42px] w-[42px] cursor-pointer rounded-full border-0 bg-[#e2e8f0] font-semibold transition duration-350 ease-in-out hover:bg-[#bfdbfe] active:scale-[.96] max-[576px]:h-[38px] max-[576px]:w-[38px] max-[576px]:text-[13px]"
            }
            onClick={() =>
              setCurrentPage(page)
            }
          >
            {page}
          </button>
        ))}

        <button
          className="cursor-pointer rounded-[10px] border-0 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] px-[18px] py-[11px] font-semibold text-white transition-[transform,box-shadow] duration-350 ease-in-out hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_12px_25px_rgba(37,99,235,.28)] active:scale-[.96] disabled:cursor-not-allowed disabled:opacity-45 max-[576px]:px-3.5 max-[576px]:py-2.5 max-[576px]:text-[13px]"
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next ▶
        </button>

      </div>

    </div>
  );
}

export default UserListPagination;
