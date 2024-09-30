import Layout from "@/components/Layout";
import React from "react";

const tnc = () => {
  return (
    <Layout>
      <div className="container mx-auto px-10 lg:px-28 md:px-16 sm:px-10">
        <div className=" py-10">
          <div className="flex flex-col justify-center items-center pb-10">
            <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
              Privacy Policy
            </div>
          </div>

          <ol>
            <li>
              <h3 className="text-xl font-semibold pt-3">1. Introduction</h3>
              <p>
                Your privacy is important to us. This Privacy Policy outlines
                how we collect, use, and protect your information when you visit
                our website.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                2. Information We Collect
              </h3>
              <p>
                We may collect personal information such as your name, email
                address, and payment details when you register for a course. We
                also collect usage data through cookies and analytics tools.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                3. How We Use Your Information
              </h3>
            <p>The information we collect is used to:</p>
              <ul className="list-disc ml-10">
                <li>Provide and maintain our services</li>
                <li>Communicate with you regarding your account and courses</li>
                <li>Improve our website and services</li>
                <li>Process payments and send you transactional emails</li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                4. Data Security
              </h3>
              <p>
              We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or misuse.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                5. Sharing Your Information
              </h3>
              <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties, except when necessary to provide our services or comply with the law.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                6. Your Rights
              </h3>
              <p>
              You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">7. Changes to This Policy</h3>
              <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and you are encouraged to review it periodically.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default tnc;
