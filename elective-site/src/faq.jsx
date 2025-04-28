import Hamburger from "./components/hamburger";
import SearchBar from "./components/searchBar";


function FAQ() {

    return(
        <>
        <div className="nav-container">
            <Hamburger />
            <SearchBar />
        </div>
        <h1  className="faq-title">FAQ</h1>
        </>
    );
}

export default FAQ;