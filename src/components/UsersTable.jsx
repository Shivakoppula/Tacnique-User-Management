import UserTableRow from "./UserTableRow";

function UsersTable({
  users,
  startIndex,
  sortField,
  sortOrder,
  onSort,
  onEdit,
  onDelete,
}) {
  const getSortIcon = (field) => {
    if (sortField !== field) return "⇅";
    return sortOrder === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="mt-[25px] animate-table-popup overflow-hidden rounded-[22px] bg-white shadow-[0_20px_45px_rgba(15,23,42,.08)] max-md:overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#f1f5f9] [&::-webkit-scrollbar-thumb]:rounded-[20px] [&::-webkit-scrollbar-thumb]:bg-[#94a3b8] hover:[&::-webkit-scrollbar-thumb]:bg-[#64748b]">
      <table className="w-full min-w-[950px] border-collapse max-md:min-w-[900px]">

        <thead className="bg-[linear-gradient(135deg,#2563eb,#4f46e5)] text-white">
          <tr>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8">ID</th>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8" onClick={() => onSort("firstName")}>
              First Name {getSortIcon("firstName")}
            </th>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8" onClick={() => onSort("lastName")}>
              Last Name {getSortIcon("lastName")}
            </th>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8" onClick={() => onSort("email")}>
              Email {getSortIcon("email")}
            </th>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8" onClick={() => onSort("department")}>
              Department {getSortIcon("department")}
            </th>

            <th className="cursor-pointer select-none p-5 text-center text-[15px] font-semibold tracking-[.3px] transition duration-300 hover:bg-white/8" width="180">Actions</th>

          </tr>
        </thead>

        <tbody>

          {users.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="border-b border-[#edf2f7] p-[45px] text-center text-lg font-semibold text-[#94a3b8]"
              >
                No Users Found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
            <UserTableRow
                key={user.id}
                user={user}
                displayId={startIndex + index + 1}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}

export default UsersTable;
