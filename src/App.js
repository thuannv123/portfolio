import Header from "./components/Header/Header";
import Nav from "./components/Header/Nav";
import "./assets/style/Main.scss";
import Skill from "./components/Skill/Skill";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
