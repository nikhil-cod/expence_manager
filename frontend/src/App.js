import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
function App() {
  const value2 = useSelector((state) => state);
  const dispatch = useDispatch();
const dispatchdata=()=>{
  dispatch({
    type:"REMOVE_TO_CART",
    data:["test123"]
  });
  
}
const value3 = useSelector((state) => state);

  console.log("Value===>",value2);
  console.log("Value3===>",value3);

  return (
    <div>
      <button onClick={dispatchdata}>Dispatch</button>
     <Home/>
    </div>
  );
}

export default App;
