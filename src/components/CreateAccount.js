import React, { useState } from 'react';

const CreateAccount = ({ onBackToLogin }) => {
    const [showBirthdayTooltip, setShowBirthdayTooltip] = useState(false);
    const [showGenderTooltip, setShowGenderTooltip] = useState(false);
    const [selectedGender, setSelectedGender] = useState(''); // Tracks the selected gender
    const [customGender, setCustomGender] = useState(''); // Tracks the custom gender input

    // State for birthday dropdowns
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // Default to current month
    const [selectedDate, setSelectedDate] = useState(new Date().getDate()); // Default to current date
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

    // Generate dropdown options
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const years = Array.from({ length: new Date().getFullYear() - 1944 }, (_, i) => 1945 + i);
    const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();
    const dates = Array.from({ length: getDaysInMonth(selectedMonth, selectedYear) }, (_, i) => i + 1);

    return (
        <div>
            <h2 className="page-title">Create a New Account</h2>
            <p className="page-subtitle">It’s quick and easy.</p>
            <hr className="divider-line" />

            {/* First Name and Last Name */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input type="text" placeholder="First name" className="input-field" />
                <input type="text" placeholder="Last name" className="input-field" />
            </div>

            {/* Birthday Field */}
            <div style={{ position: 'relative', textAlign: 'left' }}>
                <label className="field-label">
                    Birthday{' '}
                    <span
                        className="tooltip-icon"
                        onMouseEnter={() => setShowBirthdayTooltip(true)}
                        onMouseLeave={() => setShowBirthdayTooltip(false)}
                    >
                        ?
                    </span>
                </label>
                {showBirthdayTooltip && (
                    <div className="tooltip">
                        Providing your birthday helps make sure you get the right Facebook experience for your age. If
                        you want to change who sees this, go to the About section of your profile. For more details,
                        please visit our Privacy Policy.
                    </div>
                )}
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px'}}>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                        className="input-field"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(parseInt(e.target.value))}
                        className="input-field"
                    >
                        {dates.map((date) => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                        className="input-field"
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Gender Field */}
            <div style={{ position: 'relative', marginBottom: '20px', textAlign: 'left' }}>
                <label className="field-label">
                    Gender{' '}
                    <span
                        className="tooltip-icon"
                        onMouseEnter={() => setShowGenderTooltip(true)}
                        onMouseLeave={() => setShowGenderTooltip(false)}
                    >
                        ?
                    </span>
                </label>
                {showGenderTooltip && (
                    <div className="tooltip">
                        You can change who sees your gender on your profile later. Select Custom to choose another
                        gender, or if you'd rather not say.
                    </div>
                )}
                <div style={{ display: 'flex', gap: '70px', marginTop: '10px' }}>
                    <label className="gender-option">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={() => setSelectedGender('female')}
                        />{' '}
                        Female
                    </label>
                    <label className="gender-option">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={() => setSelectedGender('male')}
                        />{' '}
                        Male
                    </label>
                    <label className="gender-option">
                        <input
                            type="radio"
                            name="gender"
                            value="custom"
                            onChange={() => setSelectedGender('custom')}
                        />{' '}
                        Custom
                    </label>
                </div>
                {selectedGender === 'custom' && (
                    <div style={{ marginTop: '20px' , marginBottom: '-20px'}}>
                        <input
                            type="text"
                            placeholder="Enter your gender"
                            className="input-field"
                            value={customGender}
                            onChange={(e) => setCustomGender(e.target.value)}
                        />
                    </div>
                )}
            </div>

            {/* Mobile Number or Email */}
            <input type="text" placeholder="Mobile number or email" className="input-field" />

            {/* New Password */}
            <input type="password" placeholder="New password" className="input-field" />

            {/* Informational Text */}
            <p className="info-text">
                People who use our service may have uploaded your contact information to Facebook.{' '}
                <a href="#" className="link">
                    Learn more.
                </a>
            </p>
            <p className="info-text">
                By clicking Sign Up, you agree to our{' '}
                <a href="#" className="link">
                    Terms
                </a>
                ,{' '}
                <a href="#" className="link">
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="link">
                    Cookies Policy
                </a>
                . You may receive SMS Notifications from us and can opt out any time.
            </p>

            {/* Sign Up Button */}
            <button className="button button-secondary">Sign Up</button>

            {/* Already Have an Account */}
            <p className="link" onClick={onBackToLogin}>
                Already have an account?
            </p>
        </div>
    );
};

export default CreateAccount;