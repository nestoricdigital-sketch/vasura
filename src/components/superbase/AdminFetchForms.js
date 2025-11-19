// AdminDashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import logo from "../images/menu/vasuraLogo.png";
import { Link } from "react-router-dom";

export default function AdminFetchForms() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [selected, setSelected] = useState(null);

  const email = localStorage.getItem("admin_email");
  const password = localStorage.getItem("admin_password");
  const sortedForms = [...forms].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Fetch forms on mount
  const loadForms = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("fetch_forms_if_valid", {
        email_input: email,
        password_input: password,
      });

      if (error) {
        setErr(error.message);
        return;
      }

      setForms(data);
    } catch {
      setErr("Network Error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadForms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full flex flex-col bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="w-full bg-white shadow flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 gap-2">
        <div className="flex justify-between items-center  ">
          <div>
            <Link to="/">
              <img
                src={logo}
                className="md:w-52 w-28 object-contain"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="sm:hidden text-sm text-gray-600">
            <h1 className="text-base">Admin</h1>
            <p className="text-[10px]">{email}</p>
          </div>
        </div>

        {/* <div className="text-lg sm:text-xl font-semibold text-center sm:flex-1 sm:text-center">
          Admin Dashboard
        </div> */}

        <div className="hidden sm:block text-sm text-gray-700">
          <h1 className="text-base">Admin</h1>
          <p className="text-[10px]">{email}</p>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-60 bg-white shadow-sm p-4 flex sm:block justify-center sm:justify-start">
          <button className="text-left px-3 py-2 rounded hover:bg-gray-100 w-full sm:w-auto  sm:text-left">
            Overview
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          {loading && <p>Loading forms...</p>}
          {err && <p className="text-red-500">{err}</p>}

          <div>
            {/* List Container */}
            <div className="mt-4 space-y-3">
              {sortedForms.map((f) => (
                <div
                  key={f.id}
                  onClick={() => setSelected(f)}
                  className="bg-white p-4 rounded-lg border cursor-pointer
                         hover:shadow-md hover:scale-[1.01] transition-all"
                >
                  {/* First Row: Message + Time */}
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-gray-900 font-medium flex-1 break-words">
                      {f.message.length > 70
                        ? f.message.slice(0, 70) + "..."
                        : f.message}
                    </p>

                    <span className="text-xs text-gray-500 whitespace-nowrap">
                      {new Date(f.created_at).toLocaleString()}
                    </span>
                  </div>

                  {/* Name + Email footer */}
                  <div className="text-sm text-gray-600 mt-2 break-words">
                    <span className="font-semibold">{f.name}</span> • {f.email}
                  </div>
                </div>
              ))}
            </div>

            {/* DETAILS MODAL */}
            {selected && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-lg w-full relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                  >
                    ✖
                  </button>

                  <h2 className="text-lg sm:text-xl font-semibold mb-3">
                    {selected.name}
                  </h2>

                  <p className="text-gray-700 mb-2 break-words">
                    <strong>Message:</strong> <br /> {selected.message}
                  </p>

                  <p className="text-gray-700 break-words">
                    <strong>Email:</strong> {selected.email}
                  </p>

                  <p className="text-gray-700 break-words">
                    <strong>Phone:</strong> {selected.phone || "-"}
                  </p>

                  <p className="text-gray-700 mt-2 break-words">
                    <strong>Services:</strong>{" "}
                    {(selected.services || []).join(", ")}
                  </p>

                  <p className="text-gray-500 text-sm mt-4">
                    <strong>Submitted:</strong>{" "}
                    {new Date(selected.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
