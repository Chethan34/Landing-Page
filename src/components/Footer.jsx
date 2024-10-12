export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
                    {/* Column 1 - Dropbox */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Dropbox</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Desktop app</a></li>
                            <li><a href="#" className="hover:underline">Mobile app</a></li>
                            <li><a href="#" className="hover:underline">Integrations</a></li>
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">Solutions</a></li>
                            <li><a href="#" className="hover:underline">Security</a></li>
                            <li><a href="#" className="hover:underline">Early access</a></li>
                            <li><a href="#" className="hover:underline">Templates</a></li>
                            <li><a href="#" className="hover:underline">Free tools</a></li>
                        </ul>
                    </div>
                    {/* Column 2 - Products */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Products</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Plus</a></li>
                            <li><a href="#" className="hover:underline">Professional</a></li>
                            <li><a href="#" className="hover:underline">Business</a></li>
                            <li><a href="#" className="hover:underline">Enterprise</a></li>
                            <li><a href="#" className="hover:underline">Dash (beta)</a></li>
                            <li><a href="#" className="hover:underline">Dropbox Sign</a></li>
                            <li><a href="#" className="hover:underline">DocSend</a></li>
                            <li><a href="#" className="hover:underline">Plans</a></li>
                            <li><a href="#" className="hover:underline">Product updates</a></li>
                        </ul>
                    </div>
                    {/* Column 3 - Features */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Features</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Send large files</a></li>
                            <li><a href="#" className="hover:underline">Send long videos</a></li>
                            <li><a href="#" className="hover:underline">Cloud photo storage</a></li>
                            <li><a href="#" className="hover:underline">Secure file transfer</a></li>
                            <li><a href="#" className="hover:underline">Password manager</a></li>
                            <li><a href="#" className="hover:underline">Cloud backup</a></li>
                            <li><a href="#" className="hover:underline">Edit PDFs</a></li>
                            <li><a href="#" className="hover:underline">Electronic signatures</a></li>
                            <li><a href="#" className="hover:underline">Screen recorder</a></li>
                            <li><a href="#" className="hover:underline">Convert to PDF</a></li>
                        </ul>
                    </div>
                    {/* Column 4 - Support */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Support</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Help center</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">Privacy & terms</a></li>
                            <li><a href="#" className="hover:underline">Cookie policy</a></li>
                            <li><a href="#" className="hover:underline">Cookies & CCPA preferences</a></li>
                            <li><a href="#" className="hover:underline">AI principles</a></li>
                            <li><a href="#" className="hover:underline">Sitemap</a></li>
                            <li><a href="#" className="hover:underline">Learning resources</a></li>
                        </ul>
                    </div>
                    {/* Column 5 - Resources */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Resources</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Customer stories</a></li>
                            <li><a href="#" className="hover:underline">Resources library</a></li>
                            <li><a href="#" className="hover:underline">Developers</a></li>
                            <li><a href="#" className="hover:underline">Community forums</a></li>
                            <li><a href="#" className="hover:underline">Referrals</a></li>
                            <li><a href="#" className="hover:underline">Reseller partners</a></li>
                            <li><a href="#" className="hover:underline">Integration partners</a></li>
                            <li><a href="#" className="hover:underline">Find a partner</a></li>
                        </ul>
                    </div>
                    {/* Column 6 - Company */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Jobs</a></li>
                            <li><a href="#" className="hover:underline">Investor relations</a></li>
                            <li><a href="#" className="hover:underline">ESG</a></li>
                        </ul>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="flex justify-start mt-12 space-x-6">
                    <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.485 10.775L19.314 4h-1.381l-5.061 5.883L8.83 4H4.168l6.112 8.896L4.168 20h1.381l5.344-6.212L15.162 20h4.662l-6.339-9.225zm-1.891 2.199l-.62-.886L6.047 5.04h2.121l3.977 5.688.62.886 5.168 7.394h-2.121l-4.218-6.034z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 12a8 8 0 0 0-8-8 8.001 8.001 0 0 0-1.25 15.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.009c-.994 0-1.303.617-1.303 1.25V12h2.219l-.355 2.313H13.25v5.59A8.001 8.001 0 0 0 20 12z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300" aria-label="YouTube">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M19.148 7.358c.249.248.427.557.519.896.329 1.248.333 3.851.333 3.851s0 2.604-.333 3.852a2.006 2.006 0 0 1-1.415 1.414c-1.247.335-6.252.335-6.252.335s-5.004 0-6.25-.335a2.004 2.004 0 0 1-1.415-1.414C4 14.709 4 12.105 4 12.105s0-2.603.335-3.85a2.003 2.003 0 0 1 1.414-1.42C6.995 6.5 12 6.5 12 6.5s5.004 0 6.252.34c.34.091.648.27.896.518zm-4.59 4.747l-4.158-2.4v4.8l4.158-2.4z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
                {/* Language Selection */}
                <div className="mt-8">
                    <button className="text-white hover:underline flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"/>
                        </svg>
                        English (United States)
                    </button>
                </div>
            </div>
        </footer>
    );
}