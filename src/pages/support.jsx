import React from "react";

const Support = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Support
        </h1>

        <p className="text-gray-300 mb-4">
          Need help? We're here to assist. Below are common support options and
          how to reach us.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Common issues
          </h2>
          <p className="text-gray-300">
            Login problems, link creation errors, or analytics not updating are
            the most common issues. Try signing out and signing back in first.
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
            <li>
              <strong>Can't sign in:</strong> ensure your email is spelled
              correctly and check for an account verification email. Clear site
              cookies or try an incognito window.
            </li>
            <li>
              <strong>Shorten fails:</strong> validate the long URL starts with{" "}
              <code>http://</code> or <code>https://</code>. Remove tracking
              tokens if present and try again.
            </li>
            <li>
              <strong>Analytics delayed:</strong> clicks may take a few minutes
              to appear; refresh the dashboard after a short wait.
            </li>
            <li>
              <strong>Custom slug unavailable:</strong> choose a different slug
              — common words are often taken.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-300">
            Email: support@cosmodium.example (replace with your contact
            address). For urgent issues include your account email and a
            description of the problem.
          </p>
          <p className="text-gray-300 mt-3">
            When contacting support, please include:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Account email (if applicable)</li>
            <li>Shortened URL and the original URL</li>
            <li>Error messages or screenshots</li>
            <li>Approximate time the issue occurred</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Reporting abuse
          </h2>
          <p className="text-gray-300">
            To report spam, malware, or other abusive links, send the shortened
            URL and details to the support address above. We investigate and
            remove violating links.
          </p>
          <p className="text-gray-300 mt-3">
            If you need a faster response for suspected malware or phishing,
            include any antivirus alerts, the landing page content, and any
            headers you can capture. We prioritize removal of high-risk links.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">
            Self-help resources
          </h2>
          <p className="text-gray-300">
            Before contacting support, check the{" "}
            <a href="/documentation" className="text-white underline">
              Documentation
            </a>{" "}
            and{" "}
            <a href="/faqs" className="text-white underline">
              FAQs
            </a>{" "}
            — many issues are resolved there.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Support;
