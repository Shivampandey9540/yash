import React, { useState } from "react";
import { Reveal } from "../Reval/Revale";
interface QuestionProps {
  id: string;
  question: string;
  answer: string;
}
const Question: React.FC<QuestionProps> = (props) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="question-wrapper md:p-[30px]  sm:p-[0px]">
      <Reveal>

        <div>
          <div className="question" id={props.id}>
            <div>
              <h3>{props.question}</h3>
              <p></p>
            </div>

            <button onClick={handleClick}>
              <svg
                className={isActive ? "active" : ""}
                fill="#ffffff"
                height="20px"
                width="30px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </button>
          </div>
          <div className={isActive ? "answer active" : "answer"}>
            <div className="md:flex md:flex-row md:gap-[30px] md:px-[30px]  py-[20px] sm:flex sm:flex-col sm:gap-[10px] sm:px-[0px]">
              <div className="md:w-[50%] bg-[#fff] md:h-[300px] rounded-[20px] sm:w-[100%] h-[300px]"></div>
              <div className="md:w-[50%] bg-[#fff] md:h-[300px] rounded-[20px] sm:w-[100%] h-[300px]"></div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Question;