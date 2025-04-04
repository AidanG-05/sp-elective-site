import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchBar";
import MainButton from "./components/mainButton";
import LoginButton from "./components/loginButton";
import Footer from "./components/footer";
import Hamburger from "./components/hamburger";
import Title from "./components/title";
import ModuleCard from "./components/moduleCard";
import SearchResults from "./SearchResults";
import ModuleList from "./moduleList";
import ModuleInfo from "./ModuleInfo";

// Home component renders the main UI
function Home() {
  return (
    <>
      <div className="nav-container">
        <Hamburger />
        <SearchBar />
        <LoginButton />
      </div>

      <div className="title-container">
        <Title />
      </div>

      <div className="button-container">
        <MainButton title="Head to Library" navigateTo="/library"/>
        <MainButton title="Leave a Review" />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/library" element={<ModuleList></ModuleList>} />
        <Route path="/modules/:module_code" element={<ModuleInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
