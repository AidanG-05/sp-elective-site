import Hamburger from "./components/hamburger"
import SearchBar from "./components/searchBar"


function ReviewRequest() {

    return(
        <>
        <div className="nav-header">
      <div className="hamburger-container">
        <Hamburger />
      </div>
      
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </div>
        <h1 className="faq-title">Currently under construction</h1>
        <h1 className="centered-text">Please Stay Tuned!</h1>
        </>
    )
}

export default ReviewRequest