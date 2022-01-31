import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Tradingsection from './Components/Tradingsection';
import Business from './Components/Business';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Tradingsection />
      <Business />
    </div>
  );
}

export default App;
