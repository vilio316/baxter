import APIRender from "../apiCalls";

export default async function WithTimeFrame({params} : {
    params : Promise<{ticker: string, timeframe: number}>
}){
    const ticker = (await params).ticker
    const timeframe = (await params).timeframe

return(
    <>
    <APIRender symbol={ticker} timeframe={timeframe}/>
    </>
)
}