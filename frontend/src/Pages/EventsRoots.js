import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const EventsRoots = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsRoots;
