function DeleteConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full animate-fade-in items-center justify-center bg-[#0f172a]/55 p-5 backdrop-blur-[6px]">

      <div className="w-full max-w-[520px] animate-popup rounded-3xl bg-white p-8 text-center shadow-[0_30px_60px_rgba(15,23,42,.25)] max-[576px]:rounded-[18px] max-[576px]:p-6">

        <div className="mb-[18px] text-[70px]">
          ⚠️
        </div>

        <h2 className="mb-[15px] text-[28px] font-bold text-[#ef4444]">Delete User</h2>

        <p className="mb-[30px] text-[15px] leading-[1.8] text-[#64748b]">
          Are you sure you want to delete this user?
          <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-[15px] max-md:flex-col">

          <button
            className="cursor-pointer rounded-xl border-0 bg-[#e2e8f0] px-[26px] py-[13px] font-semibold text-[#334155] brightness-100 transition duration-350 ease-in-out hover:bg-[#cbd5e1] hover:brightness-75 active:scale-[.96] max-md:w-full"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="cursor-pointer rounded-xl border-0 bg-[linear-gradient(135deg,#ef4444,#dc2626)] px-[26px] py-[13px] font-semibold text-white brightness-100 transition-[transform,box-shadow,filter] duration-350 ease-in-out hover:-translate-y-[3px] hover:brightness-75 hover:shadow-[0_15px_25px_rgba(239,68,68,.3)] active:scale-[.96] max-md:w-full"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteConfirmationModal;
