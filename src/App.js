import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services';
import Store from './components/Store';
import Example from './components/Example';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Work from './components/Work';
import Sliderr from './components/Sliderr';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />
      
     
    
      
      <Sliderr />

      <Services />

      <Info />

      <Work />
      
      

      <Store />
      
     <Contact />
     <Example />

     

     
    
      
     <Gallery />
     
      <About />
    </div>
  );
}

export default App;
