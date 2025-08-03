import { Metadata } from "next";
import StockSearchPage from "./searchPage";

export const metadata: Metadata = {
  title: "Baxter | Stock Search Tool",
};

export default async function Page() {
  return (
    <>
      <StockSearchPage />
    </>
  );
}
