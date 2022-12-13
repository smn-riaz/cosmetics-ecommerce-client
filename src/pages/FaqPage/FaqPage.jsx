import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/Footer";

const FaqPage = () => {
  const faqs = [
    {
      ques: "Ques 1",
      ans: "ANSWER 1 ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum omnis earum maiores ducimus obcaecati nesciunt numquam, fuga autem officiis in optio sapiente laborum sunt, perspiciatis, vero odio soluta id.",
    },
    {
      ques: "Ques 2",
      ans: "ANSWER 2 Lorem  ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum omnis earum maiores ducimus obcaecati nesciunt numquam, fuga autem officiis in optio sapiente laborum sunt, perspiciatis, vero odio soluta id.",
    },
    {
      ques: "Ques 3",
      ans: "ANSWER 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum omnis earum maiores ducimus obcaecati nesciunt numquam, fuga autem officiis in optio sapiente laborum sunt, perspiciatis, vero odio soluta id.",
    },
    {
      ques: "Ques 4",
      ans: "ANSWER 4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum omnis earum maiores ducimus obcaecati nesciunt numquam, fuga autem officiis in optio sapiente laborum sunt, perspiciatis, vero odio soluta id.",
    },
    {
      ques: "Ques 5",
      ans: "ANSWER 5 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum omnis earum maiores ducimus obcaecati nesciunt numquam, fuga autem officiis in optio sapiente laborum sunt, perspiciatis, vero odio soluta id.",
    },
  ];

  const [faqToggle, setfaqToggle] = useState(false);

  const handleToggle = (value) => {
    if (faqToggle === value) {
      setfaqToggle(false);
    } else {
      setfaqToggle(value);
    }
  };

  console.log(faqToggle);

  return (
    <main>
      <section className="flex justify-center items-center">
        <div className="max-w-[400px] p-2">
          {faqs.map((faq) => (
            <div className="bg-secondaryLight m-6 w-[400px]">
            {
                faqToggle === faq.ques ?
                <div className="bg-secondary text-center font-nunito text-xl font-semibold p-4 flex justify-between cursor-pointer" onClick={() => handleToggle(faq.ques)}>
                <p>{faq.ques}</p><AiOutlineMinus/>
            </div>
            : 
            <div className="bg-secondary text-center font-nunito text-xl font-semibold p-4 flex justify-between cursor-pointer" onClick={() => handleToggle(faq.ques)}>
                <p>{faq.ques}</p><AiOutlinePlus />
            </div>
            }
            <div className={faqToggle === faq.ques ? "visible p-4 font-raleway " : "hidden"}>{faq.ans}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default FaqPage;
