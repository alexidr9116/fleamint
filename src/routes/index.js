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
        { element: <EditProfilePage />, path: 'edit' },
        { element: <AnalysticPage />, path: 'analystic' },
      ],
    },
    {
      path: '/market-place',
      element: <MainLayout />,
      children: [
        { element: <NFTCategoriesPage />, index: true },
        { element: <Navigate to="/market-place" replace />, path: 'categories' },
        { element: <LeaderBoardPage />, path: 'leader-board' },
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
        { element: <CreateNFTPage />, path: 'create-nft' },
        { element: <NFTCollectionPage />, path: 'collections' },
        

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
const LeaderBoardPage = Loadable(lazy(() => import('../pages/marketplace/LeaderBoards')));
const CreateNFTPage = Loadable(lazy(() => import('../pages/CreateNFT')));
const NFTCollectionPage = Loadable(lazy(() => import('../pages/NFTCollection')));

// ACOUNT ROUTES
const ProfilePage = Loadable(lazy(() => import('../pages/account/Profile')));
const EditProfilePage = Loadable(lazy(() => import('../pages/account/EditProfile')));
const AnalysticPage = Loadable(lazy(() => import('../pages/account/Analystic')));

const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
