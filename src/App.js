import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [ageMessage, setAgeMessage] = useState("");

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = Math.floor(
        ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
      );
      setAgeMessage(`You are ${ageInYears} years old.`);
    } else {
      setAgeMessage("Please enter your date of birth.");
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="dob">Enter your Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br></br>
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      <p>{ageMessage}</p>
    </div>
  );
}

export default App;
