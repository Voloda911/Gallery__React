import React, { useState, useEffect } from "react";
import User from "./User";
import myImage from "./free-icon-checkmark-8625364.png";
function Elem({ searchValue, onChangeValue, onClickSendInvit }) {
  return (
    <>
      <form className="form">
        <input
          value={searchValue}
          onChange={onChangeValue}
          type="text"
          className="input"
          placeholder="find user..."
        />
      </form>
      <button type="button" onClick={onClickSendInvit} className="b_v2">
        send offer
      </button>
    </>
  );
}
function Success() {
  return (
    <div className="secses">
      <img src={`${myImage}`}></img>
      <h1>successfully!</h1>
      <p>An offer has been sent to all users</p>
      <button className="b_v2">Back</button>
    </div>
  );
}

function Invit() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);
  const [minusedUsers, setMinusedUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("An error occurred");
      });
  }, []);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  };
  const toggleMinus = (userId) => {
    setMinusedUsers((currentMinusedUsers) => {
      if (currentMinusedUsers.includes(userId)) {
        return currentMinusedUsers.filter((id) => id !== userId);
      } else {
        return [...currentMinusedUsers, userId];
      }
    });
  };
  const onClickSendInvit = () => {
    setSuccess(true);
  };
  return (
    <div className="invit">
      <div className="invit_content">
        <div className="content-wrapper">
          {success ? (
            <Success />
          ) : (
            <>
              <Elem searchValue={searchValue} onChangeValue={onChangeValue} />
              {users
                .filter((user) => {
                  const searchString = searchValue.toLowerCase();
                  return (
                    user.first_name.toLowerCase().includes(searchString) ||
                    user.last_name.toLowerCase().includes(searchString) ||
                    user.email.toLowerCase().includes(searchString)
                  );
                })
                .map((user) => (
                  <User
                    key={user.id}
                    {...user}
                    isMinused={minusedUsers.includes(user.id)}
                    onToggleMinus={() => toggleMinus(user.id)}
                    onClickSendInvit={onClickSendInvit}
                  />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Invit;
