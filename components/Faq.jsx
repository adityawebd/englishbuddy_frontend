import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons from react-icons

const faqData = [
  {
    question: "What is the return policy?",
    answer:
      "Our return policy allows returns within 30 days of purchase. The item must be in original condition with tags attached.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with tracking details. You can also track your order on our website using the order ID.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Please check our shipping policy page for more details.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 py-10 max-w-2xl mx-auto">
      <h1 className="text-4xl uppercase font-bold pb-4 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4 my-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b-4 border-secondary/20 overflow-hidden transition-all"
          >
            <button
              className="flex justify-between items-center w-full px-4 py-3"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium uppercase text-left">{item.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`px-4  bg-white transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              } overflow-hidden`}
            >
              <p className="text-textClr pb-5 pt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
