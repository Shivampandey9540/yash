import React, { useState, useEffect, ChangeEvent } from 'react';
import Searchbar from './Search';
import Question from './Question';

interface FAQProps {
  data: {
    id: number;
    question: string;
    imgUrl: string;
  }[];
}

const FAQ: React.FC<FAQProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{ id: number; question: string; imgUrl: string; }[]>([]);

  // const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  useEffect(() => {
    const results = props.data.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, props.data]);

  return (
    <div className='md:container sm:p-[0px]'>
      <h2 className='heading'>Search?</h2>
      {/* <Searchbar onSearchChange={handleSearchChange} /> */}
      <section className='faq'>
        {searchResults.map((item) => (
          <Question
            key={item.id}
            id={`${item.id}`}
            question={item.question}
            answer={item.imgUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default FAQ;