import Link from "next/link";
import Footer from "../components/footer";
import DiscussionCard from "./components/DiscussionCard";
import Leaderboard from "./components/Leaderboard";
import EventCard from "./components/EventCard";
import Poll from "./components/Poll";
import HomeNav from "../components/HomepageNav";
import { FiRadio, FiSearch, FiTrendingUp, FiUser } from "react-icons/fi";

export default function CommunityPage() {
  const trendingDiscussions = [
    {
      id: 1,
      title: "NVDA Earnings Breakdown",
      author: "@TradeMaster",
      content:
        "Baxter's AI predicted a 12% move post-earnings—what’s your next move? Are you positioning for a gain or playing it safe after this forecast? You don't want to miss this!",
      upvotes: 1200,
      comments: 342,
      isHot: true,
    },
    {
      id: 2,
      title: "Market Alert: Fed Rate Decision Impact",
      author: "@MacroTrader",
      content:
        "Baxter's sentiment analysis reveals 78% bearish signals across major tech stocks. Are you adjusting your portfolio, or sticking to your current positions in this market?",
      upvotes: 890,
      comments: 210,
      isAlert: true,
    },
    {
      id: 3,
      title: "New Feature: AI Trade Copier",
      author: "@BaxterTeam",
      content:
        "Automatically mirror the top traders' strategies and moves with Baxter's AI Copilot! Let cutting-edge technology help you make smarter, faster trading decisions with ease.",
      upvotes: 2500,
      comments: 512,
      isNew: true,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: "June 15",
      title: "How Baxter's AI Predicts Reversals",
      type: "Webinar",
    },
    {
      id: 2,
      date: "June 18",
      title: "AMA with Hedge Fund Manager @WallStreetWolf",
      type: "Q&A",
    },
    {
      id: 3,
      date: "June 22",
      title: "Live Trading Competition ($5K Prize Pool)",
      type: "Event",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HomeNav />

      <main className="flex-grow  w-full ">
        <section className="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#121212] to-green-800">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ lineHeight: "1.2" }}
            >
              <span className="relative whitespace-nowrap text-green-400 dark:text-green-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-400/70 dark:fill-green-300/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">Baxter </span>
              </span>
              Community{" "}
              <span className="relative whitespace-nowrap text-green-400 dark:text-green-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-400/70 dark:fill-green-300/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">Hub</span>
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Connect, Learn & Trade Smarter Together with AI-Powered Insights
            </p>

            <div
              className="flex justify-center items-center mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                href="/signup"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                <span className="absolute inset-0 rounded-full bg-green-600 opacity-50 animate-ping"></span>
                <span className="relative z-10 pr-2">Join Now</span>
              </Link>
            </div>
          </div>

          <div className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#top-features" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </section>

        <section
          className="mb-16 pt-10 pb-10 dark:bg-gray-800"
          id="top-features"
        >
          <h2 className="font-bold text-4xl text-primary mb-10 text-center tracking-wide">
            <span className="text-gradient">Top Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-6">
            <div className="relative px-6 pt-8 pb-6 flex flex-col justify-start items-center border-2 border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
                <FiRadio className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-xl text-black font-semibold text-primary mb-2 uppercase tracking-wide text-center">
                Live Discussion Threads
              </h3>
              <p className="text-gray-800 text-center text-sm px-4">
                Engage with fellow traders in real-time discussions, share
                market updates, analyze trends, and develop trading strategies
                together.
              </p>
            </div>

            <div className="relative px-6 pt-8 pb-6 flex flex-col justify-start items-center border-2 border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                <FiSearch className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-xl text-black font-semibold text-primary mb-2 uppercase tracking-wide text-center">
                AMAs (Ask Me Anything)
              </h3>
              <p className="text-gray-800 text-center text-sm px-4">
                Interact directly with industry experts, top traders, and
                financial analysts during live AMA sessions and get answers to
                your toughest trading questions.
              </p>
            </div>

            <div className="relative px-6 pt-8 pb-6 flex flex-col justify-start items-center border-2 border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
                <FiUser className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-xl text-black font-semibold text-primary mb-2 uppercase tracking-wide text-center">
                AI-Powered Trade Signals
              </h3>
              <p className="text-gray-800 text-center text-sm px-4">
                Receive real-time, actionable trade signals powered by AI-driven
                market analysis, identifying key opportunities and trends for
                smarter trading decisions.
              </p>
            </div>

            <div className="relative px-6 pt-8 pb-6 flex flex-col justify-start items-center border-2 border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              <span className="absolute -top-6 p-3 border-2 border-gray-300 rounded-full bg-gradient-to-r from-blue-500 to-teal-500">
                <FiTrendingUp className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-xl text-black font-semibold text-primary mb-2 uppercase tracking-wide text-center">
                Leaderboard and Educational Hub
              </h3>
              <p className="text-gray-800 text-center text-sm px-4">
                Its is designed to transform the way traders engage with your
                platform by combining competition and personalized education in
                a way that empowers users to become better traders.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Trending Market Discussions
          </h2>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {trendingDiscussions.map((discussion) => (
                <DiscussionCard key={discussion.id} discussion={discussion} />
              ))}
            </div>
          </div>
        </section>

        <div className="bg-gray-800">
          <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-10 lg:px-6">
            <div className="col-span-2 mb-8">
              <Leaderboard />
            </div>
            <div className="col-span-2 space-y-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Upcoming Events
              </h2>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <Poll />
        </section>

        <div className="bg-gradient-to-b from-[#121212] to-green-800">
          <div className="mx-auto py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
              <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">
                💬 Join the Conversation
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                Experience the benefits of our community. &quot;Just used
                Baxter&apos;s AI scanner to find a 15% gap play—worked like
                magic!&quot;
              </p>

              <div className="isolate mt-8 flex flex-wrap items-center justify-center -space-x-2 overflow-hidden">
                <img
                  className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/men/34.jpg"
                  alt="members"
                />
                <img
                  className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="members"
                />
                <img
                  className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt="members"
                />
                <img
                  className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt="members"
                />
                <span className="!ml-2 font-bold italic text-green-500">
                  Join these awesome members
                </span>
              </div>

              <div className="mt-12 flex items-center justify-center gap-x-6">
                <button
                  type="button"
                  className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-green-600 px-6 py-4 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            🚀 Why Join Baxter&quot;s Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              "AI-Enhanced Trading Signals",
              "Real-Time Alerts",
              "Network with Pros",
              "Exclusive Beta Features",
            ].map((feature, index) => (
              <div key={index} className="bg-primary p-4 rounded-lg shadow-md">
                <p className="font-medium">✔ {feature}</p>
              </div>
            ))}
          </div>
          <div className="space-x-4">
            <button className="bg-accent hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Sign Up Now
            </button>
            <button className="bg-primary hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg border border-primary transition-colors">
              Download App
            </button>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
