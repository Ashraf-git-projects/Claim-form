import './App.css';
import bg_img from './assets/hands.png';
import Contact from './components/Contact';
import ClaimForm from './components/ClaimForm';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <img alt="bg_image" src={bg_img} className='bg_img'/>
      <div className="comp_layout">
        <div className='lft_part'>
         <Contact />
         <Details />
        </div>
        
        <ClaimForm />
      </div>
        
    </div>
  );
}

export default App;
