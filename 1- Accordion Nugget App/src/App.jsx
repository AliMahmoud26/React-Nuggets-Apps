import data from './Data'
import React, { useState } from 'react';
import SingleQuestion from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
      <main className='container'>
          <h3>Questions and Answers about login</h3>
          <section className="info">
              {
                  questions.map((question) => {
                      return (
                          <SingleQuestion key={question.id} {...question} setQuestions={setQuestions} />
                      )
                  })
              }
          </section>
      </main>
    );
}

export default App
