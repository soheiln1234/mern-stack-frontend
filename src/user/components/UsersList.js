import React from "react";
import UserItem from "./UserItem";

import "./UsersList.css";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users Found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
