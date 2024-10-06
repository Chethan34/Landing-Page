export default function Hero() {
    return (
        <div className="pt-24 bg-[#1E1919] min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Get to work, with a lot less work
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                    Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-lg">
                            Sign up free
                        </button>
                        <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black text-lg">
                            Find your plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}