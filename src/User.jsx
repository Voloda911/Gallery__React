import React, { useState } from "react";

function User({ id, email, first_name, last_name, avatar }) {
  const [pathD, setPathD] = useState(
    "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
  );
  const togglePath = () => {
    if (pathD === "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z") {
      setPathD("M240-120v-80h480v80H240Z");
    } else {
      setPathD("M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z");
    }
  };
  return (
    <>
      <div className="person">
        <img className="avatar" src={avatar} alt="User Avatar" />
        <div className="info">
          <h1>
            {first_name} {last_name}
          </h1>
          <p>{email}</p>
        </div>
        <svg
          className="plas"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          onClick={togglePath}
        >
          <path className="path" d={pathD} />
        </svg>
      </div>
    </>
  );
}

export default User;
