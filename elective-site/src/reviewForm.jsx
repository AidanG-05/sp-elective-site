import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ReviewForm() {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [formData, setFormData] = useState({
    Academic_Year: '',
    Semester: '',
    Ratings: '',
    Rating_Reason: '',
    TLDR_experiences: '',
    Assignment_Review: '',
    Assignment_Weightage: '',
    Life_Hacks: ''
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const fieldLabels = {
    Academic_Year: 'Which academic year did you take this module in?',
    Semester: 'Which semester was it offered in?',
    Ratings: 'How would you rate this module overall?',
    Rating_Reason: 'Why did you give this rating?',
    TLDR_experiences: 'Summarize your experience in this module.',
    Assignment_Review: 'How were the assignments? Easy, hard, or group projects?',
    Assignment_Weightage: 'What was the assignment weightage like (if any)?',
    Life_Hacks: 'Any tips/tricks/life hacks for future students?'
  };

  useEffect(() => {
    fetch('https://sp-elective-site-backend-production.up.railway.app//modules/all')
      .then(res => res.json())
      .then(data => setModules(data))
      .catch(err => console.error('Error fetching modules:', err));
  }, []);

  const filteredModules = modules.filter(m => {
    const query = searchInput.toLowerCase();
    const code = m.module_code ? m.module_code.toLowerCase() : '';
    const name = m.module_name ? m.module_name.toLowerCase() : '';
    return code.includes(query) || name.includes(query);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const StarRating = ({ value, onChange }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div className="reviewForm-stars">
        {stars.map((star) => (
          <span
            key={star}
            className={`star ${star <= value ? 'filled' : ''}`}
            onClick={() => onChange(star)}
            onMouseOver={(e) => e.target.style.cursor = 'pointer'}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedModule) return alert('Please select a module.');

    const payload = {
      ...formData,
      Elective_Code: selectedModule.module_code,
      Elective_Module: selectedModule.module_name
    };

    fetch(`https://sp-elective-site-backend-production.up.railway.app/review/submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async res => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error: ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then(() => {navigate('/thankyou');})
      .catch(err => {
        console.error('Error submitting review:', err);
      });
  };

  return (
    <div className="reviewForm-container">
      <section className="reviewForm-moduleBox">
        <h1 className="reviewForm-title">Submit a Module Review</h1>
        <label htmlFor="module-search" className="reviewForm-label">Select a Module</label>
        <div className="reviewForm-searchWrapper">
          <input
            id="module-search"
            type="text"
            className="reviewForm-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            placeholder="Type module name or code..."
          />
          {showDropdown && (
            <div className="reviewForm-dropdown">
              {filteredModules.length > 0 ? (
                filteredModules.map(mod => (
                  <div
                    key={mod.module_code}
                    className="reviewForm-dropdownItem"
                    onMouseDown={() => {
                      setSelectedModule(mod);
                      setSearchInput(`${mod.module_code} - ${mod.module_name}`);
                      setShowDropdown(false);
                    }}
                  >
                    {mod.module_code} - {mod.module_name}
                  </div>
                ))
              ) : (
                <div className="reviewForm-dropdownItem reviewForm-noResults">
                  No modules found
                </div>
              )}
            </div>
          )}
        </div>

        {selectedModule && (
          <div className="reviewForm-selected">
            Selected Module: <strong>{selectedModule.module_code} - {selectedModule.module_name}</strong>
          </div>
        )}
      </section>

      <section className="reviewForm-formBox">
        <h2 className="reviewForm-subTitle"></h2>
        <form onSubmit={handleSubmit} className="reviewForm-form">
          {Object.entries(formData).map(([field, value]) => (
            <div key={field} className="reviewForm-field">
              <label htmlFor={field} className="reviewForm-label">
                {fieldLabels[field]}
              </label>

              {field === 'Academic_Year' ? (
                <select
                  id={field}
                  name={field}
                  className="reviewForm-input"
                  value={value}
                  onChange={handleChange}
                >
                  <option value="">-- Select Academic Year --</option>
                  {Array.from({ length: 8 }).map((_, index) => {
                    const startYear = 2018 + index;
                    const endYear = startYear + 1;
                    const ay = `AY ${startYear}/${endYear}`;
                    return (
                      <option key={ay} value={ay}>
                        {ay}
                      </option>
                    );
                  })}
                </select>
              ) : field === 'Semester' ? (
                <select
                  id={field}
                  name={field}
                  className="reviewForm-input"
                  value={value}
                  onChange={handleChange}
                >
                  <option value="">-- Select Semester --</option>
                  <option value="Sem 1 (April - Aug)">Sem 1 (April - Aug)</option>
                  <option value="Sem 2 (Oct - Feb)">Sem 2 (Oct - Feb)</option>
                </select>
              ) : field === 'Ratings' ? (
                <StarRating
                  value={Number(value)}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, Ratings: val }))
                  }
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  className="reviewForm-textarea"
                  value={value}
                  onChange={handleChange}
                  rows={['Rating_Reason', 'Life_Hacks'].includes(field) ? 4 : 2}
                />
              )}
            </div>
          ))}
          <button type="submit" className="reviewForm-submitBtn">
            Submit Review
          </button>
        </form>
      </section>
    </div>
  );
}

export default ReviewForm;