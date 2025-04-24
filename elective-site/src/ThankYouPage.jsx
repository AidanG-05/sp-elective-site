import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from "./components/mainButton";

function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/library');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>Thank you for your submission! 😊</h1>
        <p>You’ll be redirected to the library shortly.</p>
        <MainButton title="Head to Library" navigateTo="/library"/>
      </div>
    </div>
  );
}

export default ThankYouPage;
