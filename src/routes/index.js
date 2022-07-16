import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// guards
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/account',
      element: <MainLayout />,
      children: [
        { element: <ProfilePage />, index: true },
        { element: <Navigate to="/account" replace />, path: 'profile' },
    
      ],
    },
    {
      path: '/market-place',
      element: <MainLayout />,
      children: [
        { element: <NFTCategoriesPage />, index: true },
        { element: <Navigate to="/market-place" replace />, path: 'categories' },
    
      ],
    },
    // Main Routes
    {
      path: '*',
      element: <MainLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { element: <AboutUsPage />, path: 'about' },
        { element: <BrandShowPage />, path: 'brand' },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const AboutUsPage = Loadable(lazy(() => import('../pages/About')));
const BrandShowPage = Loadable(lazy(() => import('../pages/Brand')));

// MARKET PLACES
const NFTCategoriesPage = Loadable(lazy(() => import('../pages/marketplace/NFTCategories')));

// ACOUNT ROUTES
const ProfilePage = Loadable(lazy(() => import('../pages/account/Profile')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
