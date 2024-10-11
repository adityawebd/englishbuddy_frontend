// pages/about.jsx
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="about-page-content pt-16">
        <div className=" py-10">
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg bg-secondary text-white rounded-full px-4 py-1">
              About Us
            </div>
            <div className="text-3xl max-sm:text-3xl font-bold mt-4 text-center">
              What makes us special
            </div>
            <p>
              EnglishBuddy started with the aim of carving students’ score who
              aspire to get a remarkable score in English proficiency tests. We
              aim to bring out the best of education to those who aspire.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
