import React, { useState, useEffect, useRef } from 'react';
import { layout } from './_layoutStyle';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../util/query';
import { AppProvider } from '../../contexts/appContext';

const Nav = React.lazy(() => import('./navigation'));

function Wrapper(props: any) {
  const options = props;
  const nav = options.layout === 'sidebar' ? true : false;
  const isMount = useRef(false);

  const [preload, setpreload] = useState(true);

  useEffect(() => {
    isMount.current = true;
  }, []);

  useEffect(() => {
    if (isMount.current) {
      setTimeout(() => {
        setpreload(false);
      }, 800);
    }
  }, [props.children]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <div className={layout}>
          <div className={`preloader ${preload ? 'active' : ''}`}>
            <div className="logo-center">
              <img
                alt="sites"
                className="svg"
                src="https://luwjistik.com/assets/img/header-logo.svg"
              />
            </div>
          </div>
          {props.layout !== 'blank' ? (
            <div className={`constractor`}>
              {nav ? <Nav /> : null}

              <div className="wrap-container float-content">
                <div className="body-content">{props.children}</div>
              </div>
            </div>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default Wrapper;
