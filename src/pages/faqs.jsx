import React from 'react'

const FAQs = () => {
    return (
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">FAQs</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Do I need an account?</h2>
                    <p className="text-gray-300">You can shorten a URL quickly from the landing page without an account, but creating an account gives you a dashboard to manage links and view analytics.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Can I customize my short link?</h2>
                    <p className="text-gray-300">Yes — when creating a link you can provide a custom slug if the slug is available.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">How long do links last?</h2>
                    <p className="text-gray-300">Links remain active until you delete them. We may remove links that violate our terms.</p>
                </section>
                
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Why aren't my analytics updating?</h2>
                    <p className="text-gray-300">Analytics may have a short delay; allow a few minutes and refresh. If counts are still missing, check that the shortened URL is being used and not blocked by client-side ad blockers.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Is there an API?</h2>
                    <p className="text-gray-300">Not currently public. If you need programmatic access, contact support with your use case and we can discuss options.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Can I delete my account and data?</h2>
                    <p className="text-gray-300">Yes — from the dashboard you can delete links and your account. After deletion, we purge most associated data, keeping minimal records only for security and abuse prevention for a short retention period.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-2">Who do I contact for business or partnership inquiries?</h2>
                    <p className="text-gray-300">For partnerships, integrations, or large-volume usage, email partnerships@cosmodium.example (replace with real address) describing your needs.</p>
                </section>
            </div>
        </div>
    )
}

export default FAQs
