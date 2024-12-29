import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";

function App() {
  const appRouter = createBrowserRouter(routes);
  return <RouterProvider router={appRouter} />;
}

export default App;
