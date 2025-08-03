import StockHomeNav from "../components/stock/stockNav"

export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode
}){

    return(
        <div className="p-2 my-2 mx-auto">
            <StockHomeNav />
            {children}
        </div>
    )
}