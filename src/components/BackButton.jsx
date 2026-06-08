import { useNavigate } from 'react-router-dom';
import './BackButton.css';

export default function BackButton({ to = '/' }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="back-btn"
      onClick={() => navigate(to)}
      aria-label="Go back"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M15 18l-6-6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
