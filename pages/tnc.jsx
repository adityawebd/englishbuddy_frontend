import Layout from "@/components/Layout";
import React from "react";

const tnc = () => {
  return (
    <Layout>
      <div className="pt-16 container mx-auto px-10 lg:px-28 md:px-16 sm:px-10">
        <div className=" py-10">
          <div className="flex flex-col justify-center items-center pb-10">
            <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
              Terms & Conditions
            </div>
          </div>

          <ol>
            <li>
              <h3 className="text-xl font-semibold pt-3">1. Acceptance of Terms</h3>
              <p>
                By accessing or using our website, you agree to comply with and
                be bound by these Terms and Conditions. If you do not agree with
                any part of these terms, you must not use our services.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">2. Services Provided</h3>
              <p>
                Our website offers online courses for English language
                preparation, specifically for IELTS, TOEFL, and PTE. The content
                provided is designed to help users prepare for these
                examinations effectively.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                3. User Responsibilities
              </h3>
              <p>
                Users must provide accurate information when creating an account
                and must not share their login credentials with others. You are
                responsible for maintaining the confidentiality of your account.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">4. Payment and Refunds</h3>
              <p>
                All fees for the courses are listed on the website. Payments
                must be made in full prior to accessing course materials.
                Refunds may be issued within 30 days of purchase if the user is
                not satisfied, subject to our refund policy.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                5. Intellectual Property
              </h3>
              <p>
                All course materials, website content, and resources are the
                intellectual property of our website. Users may not reproduce,
                distribute, or modify any content without prior written
                permission.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">
                6. Limitation of Liability
              </h3>
              <p>
                We strive to provide accurate and up-to-date information;
                however, we do not guarantee the completeness or reliability of
                any content. Users assume full responsibility for any risks
                associated with the use of our services.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">7. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by the laws of [Your
                Country/State]. Any disputes arising from these terms shall be
                resolved in accordance with the applicable laws.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold pt-3">8. Changes to Terms</h3>
              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. Users will be notified of any significant changes, and
                continued use of the website indicates acceptance of the new
                terms.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default tnc;
