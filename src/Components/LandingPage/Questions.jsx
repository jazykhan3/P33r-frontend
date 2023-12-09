import { useState } from 'react';
import Image from 'next/image';

// import minusIcon from '../../Assets/minus-icon.svg';
// import plusIcon from '../../Assets/plus-icon.svg';

function Questions() {
    const questionsData = [
        {
            id: 1,
            question: "What is P33R?",
            description: "Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.",
            collapse: true
        },
        {
            id: 2,
            question: "What is the extent of the service provided by P33R?",
            description: "Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.",
            collapse: false
        },
        {
            id: 3,
            question: "In what cities are P33R operational?",
            description: "Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.",
            collapse: false
        },
        {
            id: 4,
            question: "Do hosts have to create an account?",
            description: "Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.",
            collapse: false
        },
        {
            id: 5,
            question: "Do hosts have to pay any “commission”?",
            description: "Lorem ipsum dolor sit amet consectetur. In magna elementum massa nisl phasellus massa leo odio. Nunc leo diam cursus sit. Dui leo donec imperdiet urna. Phasellus nulla pharetra ac feugiat volutpat sit morbi ac. Luctus laoreet curabitur sit libero.",
            collapse: false
        },
    ]

    const [questions, setQuestions] = useState(questionsData);

    const handleCollapse = (id) => {
        const updatedQuestions = questions.map((question) => {
            if (question.id === id) {
                return { ...question, collapse: !question.collapse };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    }

    return (<>
        <div className="px-4 md:px-32 pb-64 flex flex-col gap-12 justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
                <p className="text-[#212674] font-manrope text-[44px] font-bold">Frequently Asked Questions</p>
                <p className="text-[#747073] text-center font-manrope text-lg font-normal leading-normal">Get answers to the most commonly asked questions about P33R.</p>
            </div>
            <div className="flex flex-col gap-8 justify-start items-center ">
                {questions.map((question, index) => (
                    <div key={index} className="flex flex-col gap-4 pb-8 border-b border-[#E3E1E2] w-full md:w-[768px]">
                        <div className="flex justify-between gap-6 items-center">
                            <p className="text-[#000] font-manrope text-lg font-bold">{question.question}</p>
                            <img className='cursor-pointer'   onClick={() => handleCollapse(question.id)} src={question.collapse ? "/plus-icon.svg" : "/minus-icon.svg"} alt="_collapse" />
                        </div>
                        {!question.collapse && <p className='text-[#747073] font-manrope text-base font-normal leading-normal'>{question.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    </>)
}
export default Questions;