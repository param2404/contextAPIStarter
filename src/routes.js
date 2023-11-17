import { lazy, Suspense } from "react";
import AuthGuard from "./components/AuthGuard";
import DashboardLayout from "./components/DashboardLayout";
import GuestGuard from "./components/GuestGuard";
import MainLayout from "./components/MainLayout";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<>Page is loading. Please wait...</>}>
    <Component {...props} />
  </Suspense>
);

const Landing = Loadable(lazy(() => import('./pages/Landing')));
const Property = Loadable(lazy(() => import('./pages/Property')));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <GuestGuard>
            <Landing />
          </GuestGuard>
        )
      },
      {
        path: "resale",
        element: <h1>Resale</h1>
      },
      {
        path: "properties",
        element: <Property/>
      },
      {
        path: "about",
        element: <h1>About Us</h1>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "profile",
        element: <h1>Profile</h1>
      },
      {
        path: 'properties',
        element: <Property />
      }
    ]
  }
];

export default routes;