import './MobileFrame.css';

export default function MobileFrame({ children }) {
  return (
    <div className="page-wrapper">
      <div className="mobile-frame">{children}</div>
    </div>
  );
}
