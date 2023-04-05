
import './App.css';
import Productlist from './Productlist';

function App() {

  return (
    <div className="App">
      
    <Productlist products={[{no:"1",name:"Phone", price:"25000", img:"phone.jpg"},{no:"2",name:"Car", price:"1500000", img:"Car.jpg"}]}/>
    </div>
  );
}

export default App;
