import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';

import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import ApartmentScreen from '../../pages/apartment-screen/apartment-screen';
import ApartmentNotLoggedScreen from '../../pages/apartment-not-logged-screen/apartment-not-logged-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesFound={placesFound} />}
        />
        <Route
          path={AppRoute.DevMainEmpty}
          element={<MainEmptyScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={<ApartmentScreen />}
        />
        <Route
          path={AppRoute.DevRoomNotLogged}
          element={<ApartmentNotLoggedScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
