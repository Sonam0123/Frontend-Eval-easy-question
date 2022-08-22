import data from './data.json'
import './App.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

function App() {

  
  const datas =  data.map(info => {
    return(
      <div className='q-and-a'>
        <p> <BsFillArrowRightSquareFill /> {info.question}</p>
        <p>{info.answer}</p>
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
