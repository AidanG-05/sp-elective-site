import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from "./components/mainButton";

function ThankYouPage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/library');
    }, 9000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1>🎉 Thank you for your submission!</h1>
        <p>You’ll be redirected to the library in <strong>{secondsLeft}</strong> seconds.</p>
        <MainButton title="Head to Library Now" navigateTo="/library" />
      </div>
    </div>
  );
}

export default ThankYouPage;
