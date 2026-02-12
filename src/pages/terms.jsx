import React from 'react'

const TermsOfService = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Terms of Service</h1>

        <p className="text-gray-300 mb-4">
          These terms govern your use of Cosmodium. By using the service you agree to these terms.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Using the service</h2>
          <p className="text-gray-300">You may create, manage, and share shortened links for lawful purposes. You may not use the service for spam, malware distribution, or other abusive behavior.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Acceptable content</h2>
          <p className="text-gray-300">You are responsible for the content you shorten and share. Cosmodium reserves the right to remove links that violate these terms.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Liability</h2>
          <p className="text-gray-300">Cosmodium provides the service "as is" and is not liable for damages arising from use of shortened links or third-party content.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Termination</h2>
          <p className="text-gray-300">We may suspend or terminate accounts that violate these terms or pose security risks.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-300">Questions about these terms can be sent to support@cosmodium.example (replace with your contact address).</p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfService
