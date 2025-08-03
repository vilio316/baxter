import StockHomeNav from "../components/stock/stockNav";
import { SideNav } from "../stock/layout";



export default function AiChat({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <StockHomeNav />
      <div className="p-1 md:p-3 mt-10 mx-auto grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-3">
          <SideNav />
        </div>

        <div className="lg:col-span-9">{children}</div>
      </div>
    </>
  );
}
