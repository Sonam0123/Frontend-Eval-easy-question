import data from './data.json'
import './App.css';

function App() {
  const datas =  data.map(info => {
    return(
      <div>
        <p>{info.question}</p>
        <p>{info.answer}</p>
      </div> 
    )
  })
  return (
    <div className="App">
      <div className='inner-div'>
        <h1>Frequently Asked Questions</h1>
        {datas}
      </div>
    </div>
  );
}

export default App;
