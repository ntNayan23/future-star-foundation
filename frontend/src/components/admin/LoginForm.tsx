import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { login } from "../../services/auth.service";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const { error } = await login(email, password);

      if (error) {
        setError(error.message);
        return;
      }

      navigate("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[430px] rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-xl sm:px-8">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2 sm:px-4">
        <ShieldCheck
          size={15}
          className="text-[#14B8A6]"
        />

        <span className="text-xs font-semibold text-[#14B8A6] sm:text-sm">
          Secure Login
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#0F3D5E] sm:text-4xl">
        Welcome Back
      </h1>

      <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
        Sign in to access the Future Star Foundation Admin Dashboard.
      </p>

      {/* Email */}

      <div className="mt-6 sm:mt-7">
        <label className="mb-2 block text-sm font-semibold text-[#0F3D5E] sm:text-base">
          Email Address
        </label>

        <div className="flex h-12 items-center rounded-xl border border-slate-300 px-4 transition-all duration-200 focus-within:border-[#14B8A6] focus-within:ring-2 focus-within:ring-[#14B8A6]/20">
          <Mail
            size={18}
            className="text-slate-400"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@futurestarfoundation.in"
            className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-[15px]"
          />
        </div>
      </div>

      {/* Password */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-semibold text-[#0F3D5E] sm:text-base">
          Password
        </label>

        <div className="flex h-12 items-center rounded-xl border border-slate-300 px-4 transition-all duration-200 focus-within:border-[#14B8A6] focus-within:ring-2 focus-within:ring-[#14B8A6]/20">
          <Lock
            size={18}
            className="text-slate-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-[15px]"
          />

          <button
            type="button"
            className="text-slate-400 transition hover:text-[#14B8A6]"
          >
            <Eye size={18} />
          </button>
        </div>

        {error && (
          <p className="mt-2 text-xs text-red-500">{error}</p>
        )}
      </div>

      {/* Remember */}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 accent-[#14B8A6]"
          />

          Remember Me
        </label>

        <button
          type="button"
          className="self-start text-sm font-semibold text-[#14B8A6] transition hover:text-[#0F3D5E] sm:self-auto"
        >
          Forgot Password?
        </button>

      </div>

      {/* Login Button */}

      <button
        type="button"
        onClick={handleLogin}
        disabled={loading}
        className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F3D5E] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#14B8A6] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <ArrowRight size={18} />
        {loading ? "Signing In..." : "Sign In"}
      </button>

      {/* Footer */}

      <p className="mt-6 text-center text-[11px] text-slate-500 sm:text-xs">
        © 2026 Future Star Foundation
      </p>

    </div>
  );
};

export default LoginForm;