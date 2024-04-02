import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GradesLoader } from './loaders.js';
import Grades from "./pages/Grades";
import Root from "./pages/Root";
import Subjects from "./pages/Subjects";
import Timeline from "./pages/Timeline";


const sharedRoutes = [
  {
    path: 'grades',
    loader: GradesLoader,
    element: <Grades />
  },
  {
    path: 'subjects',
    loader: GradesLoader,
    element: <Subjects />
  },
  {
    path: 'timeline',
    element: <Timeline />
  },
]

const router = createBrowserRouter([
  {
    path: 'i',
    element: <Root />,
    children: sharedRoutes
  },
  {
    path: 'ii',
    element: <Root />,
    children: sharedRoutes
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
