import React from 'react'

const Documentation = () => {
    return (
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Documentation</h1>

                <p className="text-gray-300 mb-4">Welcome to the Cosmodium documentation. Below are quick guides to help you get started and make the most of the URL shortener.</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Getting started</h2>
                    <p className="text-gray-300">Create an account, sign in, and use the dashboard to create and manage short links. Use the create form on the landing page to quickly shorten a URL without signing up.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Creating links</h2>
                    <p className="text-gray-300">Use the dashboard to add a long URL, optionally customize the slug, and save. You can edit or delete links from your dashboard.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Analytics</h2>
                    <p className="text-gray-300">For each shortened URL you can view click counts, basic geolocation, and device breakdowns to understand traffic sources.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Best practices</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>Use meaningful custom slugs for memorable links.</li>
                        <li>Keep long URLs without sensitive tokens.</li>
                        <li>Monitor link analytics to detect unusual activity.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Documentation
