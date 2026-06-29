import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "Admin" && password === "admin@123") {
      sessionStorage.setItem("isAuthenticated", "true");

      const destination = location.state?.from?.pathname || "/";
      navigate(destination, {
        replace: true,
        state: { loginSuccessful: true },
      });
      return;
    }

    setError("Invalid username or password.");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#eef2ff,#f8fafc,#ecfeff)] p-5">
      <section className="w-full max-w-[460px] overflow-hidden rounded-3xl bg-white shadow-[0_30px_60px_rgba(15,23,42,.18)]">
        <div className="bg-[linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)] px-8 py-9 text-center text-white">
          <h1 className="text-[30px] font-bold">Admin Login</h1>
          <p className="mt-2 text-sm opacity-90">
            Sign in to access the User Management Dashboard
          </p>
        </div>

        <div className="p-8 max-[576px]:p-6">
          <div className="mb-6 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-4 text-sm text-[#1e3a8a]">
            <p className="mb-2 font-bold">Login instructions</p>
            <p>
              Username: <strong>Admin</strong>
            </p>
            <p>
              Password: <strong>admin@123</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-[18px] flex flex-col">
              <label
                className="mb-2 text-sm font-semibold text-[#334155]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                className="rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                autoComplete="username"
                autoFocus
              />
            </div>

            <div className="mb-[18px] flex flex-col">
              <label
                className="mb-2 text-sm font-semibold text-[#334155]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="rounded-xl border border-[#dbe4f0] bg-white px-4 py-3.5 text-[15px] transition duration-300 placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:outline-none focus:shadow-[0_0_0_4px_rgba(37,99,235,.12)]"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p
                className="mb-[18px] rounded-lg bg-[#fef2f2] px-4 py-3 text-sm font-medium text-[#dc2626]"
                role="alert"
              >
                {error}
              </p>
            )}

            <button
              className="w-full cursor-pointer rounded-xl border-0 bg-[linear-gradient(135deg,#2563eb,#4f46e5)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(37,99,235,.3)] active:scale-[.98]"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
