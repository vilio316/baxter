export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <div className="text-2xl font-bold flex items-center">
            Baxter
          </div>
        </a>
        
        <nav className="hidden md:flex space-x-6">
          <button><a href = '/stock' className="hover:text-accent transition-colors">Trade</a></button>
          <button ><a href = '/community' className="font-bold text-accent">Community</a></button>
          <button ><a href = '/Courses' className="hover:text-accent transition-colors">Learn</a></button>
          <button ><a className="hover:text-accent transition-colors">About</a></button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-accent hover:bg-green-600 hover:text-primary text-white py-2 px-4 rounded-lg transition-colors">
           <a href="/signup">Sign In</a> 
          </button>
          <button className="hidden md:block bg-primary text-primary hover:bg-green-600 py-2 px-4 rounded-lg transition-colors">
           <a href = '/'> Get Started</a>
          </button>
        </div>
      </div>
    </header>
  );
}