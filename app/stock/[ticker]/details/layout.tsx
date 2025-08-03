import ChartHeader from "@/app/components/stock/chartHeader";

export default async function DetailsLayout({
  params,
  children,
}: {
  params: Promise<{ ticker: string }>;
  children: React.ReactNode;
}) {
  const ticker = (await params).ticker;
  return (
    <div>
      {children}
    </div>
  );
}
