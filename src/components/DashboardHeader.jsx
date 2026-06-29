function DashboardHeader({ onAdd, onLogout }) {
  return (
    <header className="relative mb-[35px] flex items-center justify-between overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)] px-10 py-[30px] text-white shadow-[0_18px_40px_rgba(79,70,229,.25)] before:absolute before:-right-[70px] before:-top-[90px] before:h-[220px] before:w-[220px] before:rounded-full before:bg-white/8 before:content-[''] after:absolute after:-bottom-10 after:-left-10 after:h-[140px] after:w-[140px] after:rounded-full after:bg-white/5 after:content-[''] max-[992px]:flex-col max-[992px]:gap-[25px] max-[992px]:text-center max-md:p-[25px] max-[576px]:p-5">

      <div className="relative z-[2]">

        <h1 className="mb-2 text-[34px] font-bold max-md:text-[28px] max-[576px]:text-2xl">User Management Dashboard</h1>

        <p className="text-[15px] opacity-90 max-md:text-sm max-[576px]:text-[13px]">
          Manage your users efficiently
        </p>

      </div>

      <div className="relative z-[2] flex items-center gap-3 max-md:w-full max-md:flex-col">

        <button
          className="cursor-pointer rounded-[50px] border-0 bg-white px-6 py-3.5 text-[15px] font-bold text-[#2563eb] brightness-100 shadow-[0_10px_25px_rgba(0,0,0,.15)] transition-[transform,box-shadow,filter] duration-350 ease-in-out hover:-translate-y-1 hover:brightness-75 hover:shadow-[0_16px_35px_rgba(0,0,0,.22)] active:scale-[.96] max-md:w-full"
          onClick={onAdd}
        >
          + Add User
        </button>

        <button
          className="cursor-pointer rounded-[50px] border-0 bg-[#ef4444] px-6 py-3.5 text-[15px] font-bold text-white brightness-100 shadow-[0_10px_25px_rgba(239,68,68,.25)] transition-[transform,box-shadow,filter] duration-350 ease-in-out hover:-translate-y-1 hover:bg-[#dc2626] hover:brightness-75 hover:shadow-[0_16px_35px_rgba(239,68,68,.35)] active:scale-[.96] max-md:w-full"
          onClick={onLogout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default DashboardHeader;
