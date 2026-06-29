function UserTableRow({ user, displayId, onEdit, onDelete }) {
  return (
    <tr className="transition duration-350 even:bg-[#fafcff] hover:scale-[1.003] hover:bg-[#eef5ff]">

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">{displayId}</td>

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">{user.firstName}</td>

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">{user.lastName}</td>

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">{user.email}</td>

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">
        <span className={`inline-flex min-w-[95px] items-center justify-center rounded-[30px] px-4 py-2 text-[13px] font-bold tracking-[.3px] text-white [&.it]:bg-[linear-gradient(135deg,#2563eb,#1d4ed8)] [&.hr]:bg-[linear-gradient(135deg,#ec4899,#db2777)] [&.finance]:bg-[linear-gradient(135deg,#f59e0b,#d97706)] [&.sales]:bg-[linear-gradient(135deg,#22c55e,#16a34a)] [&.marketing]:bg-[linear-gradient(135deg,#8b5cf6,#7c3aed)] max-[576px]:min-w-20 max-[576px]:px-3 max-[576px]:py-[7px] max-[576px]:text-xs ${user.department.toLowerCase()}`}>
          {user.department}
        </span>
      </td>

      <td className="border-b border-[#edf2f7] p-[18px] text-center text-[15px]">

        <div className="flex items-center justify-center gap-3 max-md:flex-col">

          <button
            className="cursor-pointer rounded-[10px] border-0 bg-[linear-gradient(135deg,#10b981,#059669)] px-[18px] py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-350 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_15px_25px_rgba(16,185,129,.28)] active:scale-[.96] max-md:w-full"
            onClick={() => onEdit(user)}
            title="Edit User"
          >
            ✏ Edit
          </button>

          <button
            className="cursor-pointer rounded-[10px] border-0 bg-[linear-gradient(135deg,#ef4444,#dc2626)] px-[18px] py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-350 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_15px_25px_rgba(239,68,68,.3)] active:scale-[.96] max-md:w-full"
            onClick={() => onDelete(user.id)}
            title="Delete User"
          >
            🗑 Delete
          </button>

        </div>

      </td>

    </tr>
  );
}

export default UserTableRow;
