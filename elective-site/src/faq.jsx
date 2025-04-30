import Hamburger from "./components/hamburger";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";

function FAQ() {
  const faqs = [
    {
      question: "What is SP Elective Reviews?",
      answer:
        "SP Elective Reviews is a student-led platform where Singapore Polytechnic (SP) students can share honest reviews of the electives they’ve taken. It serves as a resource to help future students make more informed choices when selecting their electives.",
    },
    {
      question: "Why does SP Elective Reviews exist?",
      answer:
        "Choosing electives can be overwhelming without real feedback from peers. SP Elective Reviews was created to bridge that gap by giving students a place to share their experiences and insights, making the elective selection process easier and more transparent for everyone.",
    },
    {
      question: "How do I use SP Elective Reviews?",
      answer:
        "You can browse  modules through the Library page. You can view reviews by either seach up the module or by looking for them through the module list page. You do not need an account to write or read reviews",
    },
    {
      question: "Who can submit reviews?",
      answer:
        "Any current or former SP student who has taken an elective can submit a review. We encourage honest, constructive feedback that will help other students.",
    },
    {
      question: "Are the reviews moderated?",
      answer:
        "Yes. All submitted reviews are lightly moderated to ensure they are respectful, appropriate, and genuinely helpful to students. We do not alter your opinions, but we remove spam, offensive content, or reviews that violate our guidelines.",
    },
    {
      question: "Will SP Elective Reviews always be free?",
      answer: "Yes, it will always remain free for students to use and contribute to.",
    },
    {
      question: "How is SP Elective Reviews funded?",
      answer:
        "The platform is currently funded completely out of pocket. If you want to colaborate or donate please feel free to reach out.",
    },
  ];

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

      <div className="faq-page">
        <h1 className="faq-title">FAQ</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default FAQ;
