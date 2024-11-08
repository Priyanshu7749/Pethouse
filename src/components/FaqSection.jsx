import React, { useState } from 'react';
import './FaqSection.css';
import Footer from './Footer';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      question: "1. What are the requirements to adopt a pet?",
      answer: "The requirements may include age restrictions, proof of residence, and ability to care for the pet. Please contact us for specific details."
    },
    {
      question: "2. Is there an adoption fee",
      answer: "Yes, there is typically an adoption fee that covers vaccinations, spaying/neutering, and initial care. Fees vary depending on the animal."
    },
    {
      question: "3. Can I return a pet if it doesn't work out?",
      answer: "We have a return policy in place. Please contact us within the first 30 days if you're experiencing issues with your adopted pet."
    },
    {
      question: "4. Are the pets vaccinated and spayed/neutered?",
      answer: "Most of our pets are vaccinated and spayed/neutered before adoption. Specific details are provided for each animal."
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently ask Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FaqSection;