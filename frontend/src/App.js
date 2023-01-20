import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Roots from "./Pages/Roots";
import HomePage from "./Pages/HomePage";
import EventsPage, { loader as eventLoader } from "./Pages/EventsPage";
import EventDetailPage, {
  loader as EventDetaiLoader,
} from "./Pages/EventDetailPage";
import NewEventsPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import EventsRoots from "./Pages/EventsRoots";
import Error from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoots />,
        children: [
          {
            index: true,
            path: "",
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventsId",
            element: <EventDetailPage />,
            loader: EventDetaiLoader,
          },
          { path: "new ", element: <NewEventsPage /> },
          { path: ":eventsId/edit ", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
