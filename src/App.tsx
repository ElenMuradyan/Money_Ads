import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import LoadingWrapper from './components/sheard/LoadingWrapper';
import Register from './pages/auth/Register';
import { ROUTE_PATHS } from './core/utilis/constants/routes';
import MainLayout from './layouts/MainLayout';
import { useSelector } from 'react-redux';
import { RootState } from './state-management/store';
import Login from './pages/auth/Login';
import CabinetLayout from './layouts/CabinetLayout';

function App() {
  const { isAuth } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo)
  return (
    <div>
      <LoadingWrapper>
      <RouterProvider
      router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path={ROUTE_PATHS.HOME} element={<MainLayout/>}>
              <Route index element={<Register />} />
              <Route path={ROUTE_PATHS.REGISTER} element={isAuth ? <Navigate to={ROUTE_PATHS.CABINET}/> : <Register />} />
              <Route path={ROUTE_PATHS.LOGIN} element={isAuth ? <Navigate to={ROUTE_PATHS.CABINET}/> : <Login />} />

              <Route path={ROUTE_PATHS.CABINET} element={isAuth ? <CabinetLayout/> : <Navigate to={ROUTE_PATHS.LOGIN} />}>
              hi
              </Route>
            </Route>
          )
        )
      }
      >
      </RouterProvider>
      </LoadingWrapper>
    </div>
  )
}

export default App
