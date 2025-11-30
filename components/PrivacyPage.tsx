
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800 dark:text-slate-300">
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
      <p className="mb-4 text-lg">Last updated: July 26, 2024</p>
      
      <p className="mb-6">
        Welcome to Dicetools.online ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website dicetools.online. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h2>
          <p className="mb-4">We collect information in the following ways:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>Content You Provide for Processing:</strong> Many of our tools require you to upload or submit files, text, or other content ("User Content") for processing. We do not store, save, or view your User Content. All file processing is done either locally in your browser or on our secure servers. Files are automatically deleted from our servers immediately after processing is complete.
            </li>
            <li>
              <strong>AI Tool Data:</strong> For our AI-powered tools (e.g., AI Image Generator, AI Summarizer), the User Content you provide is sent to a third-party API, Google Gemini, for processing. We do not store this data on our servers. The data is subject to Google's Privacy Policy. We recommend you review their policy to understand how they handle data.
            </li>
            <li>
              <strong>Usage Data:</strong> We may automatically collect anonymous information about your device and how you interact with our Service. This can include your IP address, browser type, operating system, pages viewed, and the dates/times of your visits. This data is used for analytics to improve our service.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect solely for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>To provide, operate, and maintain our website and its tools.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To understand and analyze how you use our website for optimization.</li>
            <li>To ensure the security and integrity of our platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">3. Data Storage and Security</h2>
          <p className="mb-4">
            We take data security seriously. As stated above, <strong>we do not store your files or User Content</strong> on our servers after the tool has finished its job. We use secure protocols for data transmission (like HTTPS). While we implement reasonable security measures, no system is impenetrable, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">4. Cookies</h2>
          <p className="mb-4">
            We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">5. Third-Party Services</h2>
          <p className="mb-4">
            Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">6. Children's Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">7. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our <a href="?page=contact" className="text-primary-600 hover:underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
