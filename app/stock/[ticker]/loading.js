import logo from "@/design_assets/SVG.png";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center w-20 h-20">
        <div className="absolute w-full h-full border-8 border-gray-700 border-t-white rounded-full animate-spin"></div>
        <Image
          src={logo}
          alt="Loading"
          className="w-10 h-10 rounded-full object-cover animate-pulse"
        />
      </div>
    </div>
  );
}
