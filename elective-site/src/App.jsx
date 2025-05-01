import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchBar";
import MainButton from "./components/mainButton";
import Footer from "./components/footer";
import Hamburger from "./components/hamburger";
import Title from "./components/title";
import ModuleCard from "./components/moduleCard";
import SearchResults from "./SearchResults";
import ModuleList from "./moduleList";
import ModuleInfo from "./ModuleInfo";
import ReviewForm from "./reviewForm";
import ThankYouPage from "./ThankYouPage";
import FAQ from "./faq";

// Home component renders the main UI
function Home() {

  const feedbackForm = <a href="https://docs.google.com/forms/d/e/1FAIpQLScHg9gzqM4gAj1GHQUvyW7Wsrl0GcTtSI2ZXoSFa5kaw_KHNQ/viewform?usp=dialog" style={{ color: '#e34066', fontWeight:'bold', textDecoration: 'underline'}}>Here</a>
  const donation = <a href="https://ko-fi.com/spelectivereviews" style={{ color: '#e34066', fontWeight:'bold', textDecoration: 'underline'}}>Donating</a>

  return (
    <>
    <div className="nav-header">
      <div className="hamburger-container">
        <Hamburger />
      </div>
      
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </div>

      <div className="title-container">
        <Title />
      </div>

      <div className="split-container">
        <div className="left-side">
          <div className="button-group">
            <div className="button-section">
              <h1>Discover and Choose Your Perfect Elective.</h1>
              <p>Explore past elective reviews and find out what others are saying!</p>
              <MainButton title="Head to Library" navigateTo="/library" />
            </div>
            <div className="button-section">
              <h1>Write a Review Now.</h1>
              <p>Share your experience and help your juniors choose better electives!</p>
              <MainButton title="Leave a Review" navigateTo="/review" />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="notice-board">
            <h2>Notice Board</h2>
            <p>📢 Please give us your feedback {feedbackForm}</p>
            <p>🗒️ If you want to support us, please consider {donation}</p>
          </div>
        </div>
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
      {/* This will ensure useLocation() is only called after Router is initialized */}
      <PageViewTracker />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/library" element={<ModuleList />} />
        <Route path="/modules/:module_code" element={<ModuleInfo />} />
        <Route path="/review" element={<ReviewForm />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview event to Google Analytics whenever the location changes
    if (window.gtag) {
      window.gtag('config', 'G-TY9WW2EH3P', {
        page_path: location.pathname,
      });
    }
  }, [location]); // This effect will run whenever the location changes

  return null; // This component doesn't render anything, it just tracks page views
}

export default App;
