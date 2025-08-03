"use client";

import { FiUser } from "react-icons/fi";
export default function UsernameInput({
  username,
  setUsername,
}: {
  username: string;
  setUsername(username: string): void;
}) {
  return (
    <div>
      <label className="text-sm block mb-1">Username</label>
      <div className="flex items-center bg-[#232825] rounded-md px-3 py-2 focus-within:ring-2 ring-green-400 transition">
        <FiUser className="text-gray-400 mr-2" />
        <input
          type="text"
          name="username"
          placeholder="Choose a unique username"
          className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
}
