import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="w-full mt-16 border-t border-white/10 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 py-10">

                    {/* Top section */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-8">

                        {/* Brand */}
                        <div className="max-w-sm w-full">
                            <h2 className="text-white font-semibold text-xl">
                                Cosmodium
                            </h2>
                            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                                A simple and fast URL shortener to create, manage,
                                and track your links efficiently.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm w-full">

                            <div>
                                <h3 className="text-white font-medium mb-3">
                                    Product
                                </h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="#" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">URL Shortening</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="/dashboard" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Dashboard</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-3">
                                    Resources
                                </h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="/documentation" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="/support" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Support</a>
                                    </li>
                                    <li>
                                        <a href="/faqs" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">FAQs</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-3">
                                    Legal
                                </h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                            <a href="/privacy" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms" className="block hover:text-white hover:underline transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 rounded">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8 h-px bg-white/10" />

                    {/* Bottom row */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-center sm:text-left">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Cosmodium
                        </p>

                        <p className="text-gray-400">
                            Made by <span className="text-white font-medium">~ Ankit</span>
                        </p>
                    </div>

                </div>
            </footer>


        </>
    )
}

export default Footer
