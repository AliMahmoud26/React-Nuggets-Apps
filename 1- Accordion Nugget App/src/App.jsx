import { useState } from "react";
import questions from "./Data"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function App() {
  const [openId, setOpenId] = useState(null);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {
              const {id, title, info} = question;
              const isOpen = openId === id;

              return (
                <article key={id} className="question">
                  <header>
                    <h4>{title}</h4>
                    <button
                      className="btn"
                      onClick={() => setOpenId(isOpen ? null : id)}
                    >
                      {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                  </header>
                  {isOpen && <p>{info}</p>}
                </article>
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App
