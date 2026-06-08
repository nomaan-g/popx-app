import './RadioGroup.css';

export default function RadioGroup({ label, required = false, value, onChange }) {
  return (
    <div className="radio-group">
      <p className="radio-group__label">
        {label}
        {required && <span className="radio-group__required">*</span>}
      </p>
      <div className="radio-group__options">
        <label className="radio-option">
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={value === 'yes'}
            onChange={() => onChange('yes')}
          />
          <span className="radio-option__indicator" />
          <span className="radio-option__text">Yes</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="agency"
            value="no"
            checked={value === 'no'}
            onChange={() => onChange('no')}
          />
          <span className="radio-option__indicator" />
          <span className="radio-option__text">No</span>
        </label>
      </div>
    </div>
  );
}
