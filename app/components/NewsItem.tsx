import { newsItem } from '../type_definitions';

export default function NewsItem(props: { object: newsItem }) {
  let object = props.object;
  let { id, image, headline, datetime, url, source, summary } = object;
  let dateVal = new Date(datetime * 1000);
  return (
    <div
      key={id}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#1A1F19] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
    >
      <div className="md:col-span-3">
        <a
          href={url}
          target="_blank"
          className="text-xl md:text-2xl font-semibold hover:text-[#53D22c] hover:underline block mb-2"
        >
          {headline}
        </a>
        <div className="text-sm mb-2">
          <span>{dateVal.toDateString()}</span> | <span>{source}</span>
        </div>
        <p className="text-lg">{summary}</p>
      </div>

      {image && String(image).length > 0 && (
        <div className="md:col-span-1 flex justify-center items-center mt-4 md:mt-0">
          <img
            src={image}
            alt={`Image for Article ID: ${id}`}
            className="h-[10rem] w-full object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
