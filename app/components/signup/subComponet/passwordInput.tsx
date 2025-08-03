"use client";

import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
export default function PasswordInput({
  password,
  showPassword,
  setPassword,
  setShowPassword,
}: {
  password: string;
  showPassword: boolean;
  setPassword: (password: string) => void;
  setShowPassword: (showPassword: boolean) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium">Password</label>
      </div>
      <div className="flex items-center bg-[#232825] rounded-lg px-3 py-2 focus-within:ring-2 ring-green-400 transition">
        <FiLock className="text-gray-400 mr-2" />
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 text-gray-400 hover:text-green-400 focus:outline-none"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}
