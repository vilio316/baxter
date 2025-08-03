
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Baxter</h3>
            <p className="text-gray-300">AI-powered trading for everyone. Smarter decisions, better results.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
            <li> <button><a className="hover:text-accent transition-colors">Trade</a></button></li>
          <li> <button><a className="font-bold text-accent">Community</a></button></li>
          <li><button ><a className="hover:text-accent transition-colors">Learn</a></button></li>
          <li><button ><a className="hover:text-accent transition-colors">About</a></button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><button ><a className="text-gray-300 hover:text-accent">Blog</a></button></li>
              <li><button ><a className="text-gray-300 hover:text-accent">API</a></button></li>
              <li><button ><a className="text-gray-300 hover:text-accent">System Status</a></button></li>
            </ul> 
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><button ><a className="text-gray-300 hover:text-accent">Privacy Policy</a></button></li>
              <li><button ><a className="text-gray-300 hover:text-accent">Terms of Service</a></button></li>
              <li><button><a className="text-gray-300 hover:text-accent">Risk Disclosure</a></button></li>
            </ul> 
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Baxter Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}