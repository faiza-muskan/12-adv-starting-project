import { useParams } from "react-router-dom";
import React from "react";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>;<p>{params.eventsId}</p>
    </>
  );
};

export default EventDetailPage;
