import { FiCalendar } from "react-icons/fi";
import { Event } from "../types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const getEventColor = (type: string) => {
    switch (type) {
      case "Webinar":
        return "bg-blue-100 text-blue-800";
      case "Q&A":
        return "bg-purple-100 text-purple-800";
      case "Event":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-[#131712] text-white rounded-lg shadow-md p-6 text-center space-y-3">
      <FiCalendar className="w-10 h-10 mx-auto text-green-500" />
      <div>
        <div className="text-2xl font-bold text-primary">
          {event.date.split(" ")[1]}
        </div>
        <div className="text-sm uppercase text-gray-400">
          {event.date.split(" ")[0]}
        </div>
      </div>

      <h3 className="text-xl font-semibold">{event.title}</h3>

      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full ${getEventColor(
          event.type
        )}`}
      >
        {event.type}
      </span>

      <button className="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
        RSVP
      </button>
    </div>
  );
}
