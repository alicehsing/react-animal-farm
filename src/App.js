
import './App.css';
import { animals } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header greeting='Alice' />
      <Main animals={ animals }/>
      <Footer email='alice@alchemyfarm.com' />

    </div>
  );
}

export default App;
