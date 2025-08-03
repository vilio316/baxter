import NewsItem from "../components/NewsItem";
import { news_general } from "../stock/[ticker]/apiLoaders";
import { newsItem } from "../type_definitions";

export default async function Page() {
  const news: newsItem[] = await news_general();
  return (
    <>
      <div>
        <h3 className="text-2xl font-semibold  text-white text-center  mb-6 md:mt-16">
          Market News and Updates
        </h3>
        {news.slice(0, 12).map((article) => (
          <NewsItem object={article} key={article.id} />
        ))}
      </div>
    </>
  );
}
