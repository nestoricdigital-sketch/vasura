// AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import logo from "../images/menu/vasuraLogo.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const { data, error } = await supabase.rpc("fetch_forms_if_valid", {
        email_input: email,
        password_input: password,
      });

      if (error) {
        setErr(error.message);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setErr("Invalid credentials");
        setLoading(false);
        return;
      }

      // SUCCESS → save admin session + redirect
      localStorage.setItem("admin_email", email);
      localStorage.setItem("admin_password", password);
      localStorage.setItem("adminAuth", "true");

      navigate("/dashboard");
    } catch (e) {
      setErr("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#2d3a3f]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div>
          <img src={logo} className="w-32 object-contain" alt="Logo" />
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Admin Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            required
            placeholder="Admin Email"
            className="w-full border px-4 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {err && <p className="text-red-500 text-sm">{err}</p>}

          <button
            disabled={loading}
            className="w-full bg-[#2d3a3f] text-white  py-2 rounded "
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
