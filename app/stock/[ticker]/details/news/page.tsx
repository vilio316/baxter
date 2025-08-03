import { companyNews } from "../../apiLoaders";
import NewsItem from '@/app/components/NewsItem';

export default async function NewsPage({
    params
}: {
    params: Promise<{ticker: string}>
}){
    const ticker = (await params).ticker
     const newsReports = await companyNews(ticker.toUpperCase());

 const filteredNewsReports = newsReports.filter(
    (report) => report.image.length > 1
  );


    return(
        <>
        {filteredNewsReports.length > 0 ?
    <div className="company_news_data grid col-span-1">
        <div>
            <p className="text-lg md:2text-xl my-2">
                Latest Company News
            </p>
            {
                filteredNewsReports.slice(0,15).map(
                   (article) => <NewsItem object={article} key={article.id}/>
                )
            }
        </div>
    </div>  : null }
        </>
    )
}