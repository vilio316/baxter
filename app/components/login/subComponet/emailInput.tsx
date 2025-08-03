import { FiMail } from "react-icons/fi";
export default function EmailInput({
  inputedEmail,
  setEmail,
}: {
  inputedEmail: string;
  setEmail: (email: string) => void;
}) {
  return (
    <div>
      <label className="text-sm block mb-1 font-medium">Email address</label>
      <div className="flex items-center bg-[#232825] rounded-lg px-3 py-2 focus-within:ring-2 ring-green-400 transition">
        <FiMail className="text-gray-400 mr-2" />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="bg-transparent outline-none w-full text-white placeholder-gray-500"
          value={inputedEmail}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
      </div>
    </div>
  );
}
