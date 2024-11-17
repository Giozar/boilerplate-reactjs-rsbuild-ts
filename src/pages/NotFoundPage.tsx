import { useNavigate } from "react-router-dom";
import './styles/NotFoundPage.css'

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Page Not Found</h1>
      <p className="notfound-description">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button type="button" className="notfound-button" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
}
