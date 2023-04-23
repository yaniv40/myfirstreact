import  {useState} from 'react'
import './App.css';

function App() {

  const [color,setColor]=useState('yellow')
  return (
    <div className="App">
<input style={{backgroundColor:color}} onChange={(e)=>{setColor(e.target.value)}} type="text" />
    </div>
  );
}

export default App;
