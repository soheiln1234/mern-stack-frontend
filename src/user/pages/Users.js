import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://source.unsplash.com/random",
      name: "Soheil Nikroo",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
