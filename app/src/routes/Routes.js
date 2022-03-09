import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from './routesNames';

import HomePageContainer from '../pages/HomePage/containers/HomePageContainer';
import DictionaryPageContainer from '../pages/DictionaryPage/containers/DictionaryPageContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.DICTIONATY_PAGE}
        component={DictionaryPageContainer}
      />
      <Redirect path='*' to={ROUTES.HOME_PAGE} />
    </Switch>
  );
};

export default Routes;
