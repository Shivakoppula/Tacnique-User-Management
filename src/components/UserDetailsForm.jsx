import { useEffect, useState } from "react";
import { validateForm } from "../utils/userFormValidator";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

function UserDetailsForm({
  user,
  users,
  onSave,
  onClose,
}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData(initialState);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm(formData);

  const emailExists = users.some((existingUser) => {
    return (
      existingUser.email.toLowerCase() ===
        formData.email.toLowerCase() &&
      existingUser.id !== formData.id
    );
  });

  if (emailExists) {
    validationErrors.email =
      "Email already exists.";
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  onSave(formData);
};

  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full animate-fade-in items-center justify-center bg-[#0f172a]/55 p-5 backdrop-blur-[6px]">

      <div className="w-full max-w-[520px] animate-popup rounded-3xl bg-white p-8 shadow-[0_30px_60px_rgba(15,23,42,.25)] max-[576px]:rounded-[18px] max-[576px]:p-6">

        <div className="mb-[30px] flex items-center justify-between">

          <h2 className="text-[28px] font-bold text-[#1e293b] max-[576px]:text-[22px]">
            {user ? "Edit User" : "Add New User"}
          </h2>

          <button
            className="h-10 w-10 cursor-pointer rounded-full border-0 bg-[#f1f5f9] text-lg text-[#64748b] brightness-100 transition duration-350 ease-in-out hover:rotate-90 hover:bg-[#ef4444] hover:text-white hover:brightness-75 active:scale-[.96]"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-[18px] flex flex-col">

            <label className="mb-2 text-sm font-semibold text-[#334155]">First Name</label>

            <input
              className="rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 ease-in-out placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />

            {errors.firstName && (
              <span className="mt-1.5 text-[13px] font-medium text-[#ef4444]">
                {errors.firstName}
              </span>
            )}

          </div>

          <div className="mb-[18px] flex flex-col">

            <label className="mb-2 text-sm font-semibold text-[#334155]">Last Name</label>

            <input
              className="rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 ease-in-out placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />

            {errors.lastName && (
              <span className="mt-1.5 text-[13px] font-medium text-[#ef4444]">
                {errors.lastName}
              </span>
            )}

          </div>

          <div className="mb-[18px] flex flex-col">

            <label className="mb-2 text-sm font-semibold text-[#334155]">Email</label>

            <input
              className="rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 ease-in-out placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="mt-1.5 text-[13px] font-medium text-[#ef4444]">
                {errors.email}
              </span>
            )}

          </div>

          <div className="mb-[18px] flex flex-col">

            <label className="mb-2 text-sm font-semibold text-[#334155]">Department</label>

            <select
              className="cursor-pointer rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 ease-in-out focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">
                Select Department
              </option>

              <option value="IT">
                IT
              </option>

              <option value="HR">
                HR
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Sales">
                Sales
              </option>

              <option value="Marketing">
                Marketing
              </option>

            </select>

            {errors.department && (
              <span className="mt-1.5 text-[13px] font-medium text-[#ef4444]">
                {errors.department}
              </span>
            )}

          </div>

          <div className="mt-[30px] flex justify-end gap-[15px] max-md:flex-col">

            <button
              type="submit"
              className="cursor-pointer rounded-xl border-0 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] px-6 py-[13px] text-[15px] font-semibold text-white brightness-100 transition-[transform,box-shadow,filter] duration-350 ease-in-out hover:-translate-y-[3px] hover:brightness-75 hover:shadow-[0_15px_25px_rgba(37,99,235,.28)] active:scale-[.96] max-md:w-full"
            >
              {user
                ? "Update User"
                : "Add User"}
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-xl border-0 bg-[#e2e8f0] px-6 py-[13px] text-[15px] font-semibold text-[#334155] brightness-100 transition duration-350 ease-in-out hover:bg-[#cbd5e1] hover:brightness-75 active:scale-[.96] max-md:w-full"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default UserDetailsForm;
