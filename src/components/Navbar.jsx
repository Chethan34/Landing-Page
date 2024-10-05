export default function Navbar() {
    return (
      <nav className="fixed w-full z-50 bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">Dropbox</span>
            <div className="hidden md:flex ml-8">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Products</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Enterprise</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Contact</button>
            <button className="text-gray-600 hover:text-gray-900">Sign in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get started
            </button>
          </div>
        </div>
      </nav>
    )
  }