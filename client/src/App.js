// import logo from './logo.svg';
import './App.css';
import PictureAndParagraph from './Components/Main';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
// import About from './Components/About';
function App() {
  return (
  <>
  <Navbar/>
  <PictureAndParagraph/>
  <Projects/>
  <Skills/>
  <Resume/>

  </>
  );
}

export default App;
