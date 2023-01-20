import { useLoaderData, json } from "react-router-dom";
import React from "react";

import EventItem from "../components/EventItem.js";

const EventDetailPage = () => {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventsId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "could not fetch details for seleted event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
