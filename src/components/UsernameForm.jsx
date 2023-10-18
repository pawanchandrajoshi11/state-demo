import React, { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("timmy");
  const updateUsername = (event) => {
    setUsername(event.target.value);
  };
  return (
      <div>
          <label htmlFor="username">Enter a username: </label>
      <input
        type="text"
        placeholder="username"
        value={username}
              onChange={updateUsername}
              id="username"
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
