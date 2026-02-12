import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          At Cosmodium we respect your privacy. This page explains what information we collect, why we collect it, and how you can manage it.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Information we collect</h2>
          <p className="text-gray-300">We collect account information (email, name, profile image) when you register, and link data (original URL, shortened slug, analytics) when you create short links.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">How we use your data</h2>
          <p className="text-gray-300">Data is used to provide our service: create and manage shortened URLs, show analytics, and authenticate you. We do not sell your personal data.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Cookies & tracking</h2>
          <p className="text-gray-300">We may use cookies or similar technologies to improve performance, remember session state, and support analytics. You can control cookies via your browser settings.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Data retention & deletion</h2>
          <p className="text-gray-300">You may delete your account and associated links from your dashboard. We retain minimal records needed for security and abuse prevention for a limited time.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Security</h2>
          <p className="text-gray-300">We follow standard security practices to protect your information, including encryption for sensitive data in transit and at rest where applicable.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-300">If you have privacy questions, email us at support@cosmodium.example (replace with your contact address).</p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
