import './MobileFrame.css';

export default function MobileFrame({ children, variant = 'default' }) {
  return (
    <div className="page-wrapper">
      <div className="page-wrapper__bg">
        <div className="page-wrapper__orb page-wrapper__orb--1" />
        <div className="page-wrapper__orb page-wrapper__orb--2" />
        <div className="page-wrapper__orb page-wrapper__orb--3" />
        <div className="page-wrapper__grid" />
      </div>
      <div className={`mobile-frame mobile-frame--${variant}`}>
        <div className="mobile-frame__notch" />
        <div className="mobile-frame__screen">{children}</div>
        <div className="mobile-frame__home-indicator" />
      </div>
    </div>
  );
}
