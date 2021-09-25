import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://images.pexels.com/photos/5847338/pexels-photo-5847338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lang: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://images.pexels.com/photos/5847338/pexels-photo-5847338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lang: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
