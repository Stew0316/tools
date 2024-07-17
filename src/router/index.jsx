import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  
} from "react-router-dom";

import { Route } from 'react-router'
import App from "@/App";
import Rand from "@/view/Rand";
const route = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Rand />} />
  </Route>
)
const router = createBrowserRouter(route, {
  basename: import.meta.env.VITE_BASE_NAME
});
export default router