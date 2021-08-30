import './App.css';
import Banner from './components/Banner';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';

function App() {
  return (
    <div className="App main-div">
      <Header />
      <Banner />
      <Aboutme />
      <hr />
      <Skills />
      <hr />
      <Experiences />
      <hr />
      <Projects />
      <hr />
      <Contactme />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
