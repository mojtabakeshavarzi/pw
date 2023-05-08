import './index.css';
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import { Skills } from './component/skills';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
