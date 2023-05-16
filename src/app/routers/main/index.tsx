import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import useLocalStorage from '@/hooks/useLocalStorage';

const Wrapper = React.lazy(() => import('../../material/layout'));
const history = createBrowserHistory();

function MainRouter(props: any) {
  const [isLoad, setIsLoad] = useState(true);
  const { getItem } = useLocalStorage();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const PrivateRoute = ({ children, ...rest }: any) => {
    // Jika mengaktifkan auth buat kondisi di sini : rest.private dan token
    if (rest.private && getItem('session', null) === null) {
      return <Redirect to="/auth" />;
    }
    return <Route {...rest} render={() => children} />;
  };

  return (
    <Router history={history}>
      <Switch>
        {!isLoad &&
          props.options.map((e: any, i: number) => (
            <PrivateRoute key={i} {...e}>
              <Wrapper {...e} />
            </PrivateRoute>
          ))}
      </Switch>
    </Router>
  );
}

export default MainRouter;
