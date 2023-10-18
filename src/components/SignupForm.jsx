import React, { useState } from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState("");
      const [lastName, setlastName] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
    const updateLastName = (event) => {
      setLastName(event.target.value);
    };
  return (
    <div>
      <label htmlFor="firstname">Enter Firstname: </label>
      <input
        type="text"
        placeholder="Firstname"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lasttname">Enter lastname: </label>
      <input
        type="text"
        placeholder="lastname"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button>Submit</button>
    </div>
  );
}

export default SignupForm;
