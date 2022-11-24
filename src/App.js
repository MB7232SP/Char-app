import {FaHandSparkles} from 'react-icons/fa'
import './App.css';
import MainChart from './Components/MainChart';
import { Sidebaar } from './Components/Sidebaar';

function App() {
  return (
    <div className="App">
       <div>
        <Sidebaar/>
        </div>
      <div>
        <div className='mainchartdiv1'>
           <div className='mainchartdiv1greet'>
            <h1>Hello John</h1>
            <FaHandSparkles className='logio'/>
           </div>
           <div>
            <input type={'text'} placeholder='Search'/>
           </div>
        </div>
        <div className='mainchartdiv2'>
          <div>
            <h3>Analytics</h3>
            <div className='absluteelemet'>
                 <div>
                 Income
                 </div>
                 <div>
                    <p>ShortBy</p>
                    <p>Month</p>
                 </div>
               </div>
           <MainChart/>
          </div>
          <div id='undermainchart'>
           <h3>Reminder</h3>
           <img src="https://i.ibb.co/6RxwGdg/sideemage.jpg" alt="photo" />
          </div>
        </div>
        <div>
          <img src='https://i.ibb.co/WsF9hdT/Screenshot-2022-11-24-154256.jpg'/>
        </div>
      
      </div>
      <div>
       <img src='https://i.ibb.co/KzFv0WG/Screenshot-2022-11-24-154531.jpg'/>
      </div>
    </div>
  );
}

export default App;
