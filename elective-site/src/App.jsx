import "./App.css"
import SearchBar from "./components/searchBar"
import MainButton from "./components/mainButton"
import LoginButton from "./components/loginButton"
import Footer from "./components/footer"
import Hamburger from "./components/hamburger"

function App() {

  return(
    <>
    <div className="nav-container">
      <Hamburger></Hamburger>
      <SearchBar></SearchBar>
      <LoginButton></LoginButton>
    </div>

    <div className="button-container">
      <MainButton title="Head to Library"></MainButton>
      <MainButton title="Leave a Review"></MainButton>
    </div>
    <div className="footer-container">
      <Footer></Footer>
    </div>
    </>

  );
}

export default App
