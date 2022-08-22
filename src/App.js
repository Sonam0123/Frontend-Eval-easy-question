import data from './data.json'
import './App.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import {useState} from 'react'
function App() {

  const [activeId, setActiveId] = useState(0);


  const handleClick = (e, index) => {
    e.preventDefault();
    if (activeId === index) {
      setActiveId(null)
    } else {
      setActiveId(index);
    }
  }  

  const datas =  data.map((question, index) => {
    return(
      <div className='q-and-a' >
        <div>
          <div className='arrows' onClick={ (e) => handleClick(e,index) }>{activeId === index ? '🔽' : '▶️'}</div>
          <p> {question.question}</p>
        </div>
        <p className={`${activeId === index ? 'show' :'hide'}`}>{question.answer}</p>
      </div> 
    )
  })
  return (
    <div className="App">
      <div className='outer-div'>
          <h1>Frequently Asked Questions</h1>
        <div className='inner-div'>
          {datas}
        </div>
      </div>
    </div>
  );
}

export default App;
