import { Link } from "react-router-dom";
import React from "react";

const dummyData = [
  { title: "event-1", id: "e1" },
  { title: "event-2", id: "e2" },
  { title: "event-3", id: "e3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {dummyData.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
