import React, { useState } from "react";

function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });
  const handleSubmit = () => {
    console.log(formData.firstName, formData.lastName);
  };
  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
        return { ...currData };
    });
  };
  return (
    <div>
      <label htmlFor="firstname">Enter Firstname: </label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lasttname">Enter Lastname: </label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
