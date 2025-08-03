export default function ZeroMatch() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <p className="text-5xl md:text-7xl font-bold text-green-700">Whoops!</p>
      <p className="text-lg md:text-2xl text-white mt-4 max-w-screen-2xl">
        We can&apos;t seem to find that asset right now. Double-check the
        spelling of the ticker, and ensure it&apos;s traded on the NASDAQ
        exchange!
      </p>
    </div>
  );
}
