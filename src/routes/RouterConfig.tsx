import type { RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { UserProvider } from "../contexts/UserContext";
import DashboardPage from "../pages/DashboardPage";

// Definición de las rutas
const routes: RouteObject[] = [
    {
      path: "/",
      element: <HomePage />,
      children: [
        // { path: "about", element: <AboutPage /> },
      ],
    },
    {
       path: "/dashboard",
       element: (
         <UserProvider>
           <DashboardPage />
         </UserProvider>
       ),
    },
    { path: "*", element: <NotFoundPage /> },
  ];
  

export default routes;
