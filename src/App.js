import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Services from './components/services'
import Frontpage from './components/Frontpage'
import Pricing from './components/Pricing'
import Learnmore from './components/Learnmore'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Frontpage />
      <Services />
      <Pricing />
      <Learnmore />
      <Footer />
    </div>
  );
}

export default App;
