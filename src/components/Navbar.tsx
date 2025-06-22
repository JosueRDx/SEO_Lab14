import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold hover:text-gray-200 transition-colors">
              RDx
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-white hover:bg-black hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                🏠 Inicio
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:bg-black hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                👥 Acerca de
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:bg-black hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                📧 Contacto
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:bg-black hover:bg-opacity-10 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                📝 Blog
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}