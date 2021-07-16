import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RoutesProps } from './config';
import config from './config';
import PageLoading from '@/components/PageLoading';
import KeepAlive from 'react-activation';

const renderRoutes = (routes?: RoutesProps) => {
  if (!Array.isArray(routes)) {
    return null;
  }
  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }

        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              const renderChildRoutes = renderRoutes(route.routes);
              if (route.component) {
                return (
                  <Suspense fallback={<PageLoading />}>
                    {renderChildRoutes ? (
                      <route.component route={route} {...props}>
                        {renderChildRoutes}
                      </route.component>
                    ) : (
                      <KeepAlive name={route.path} title={route.title}>
                        <route.component route={route} {...props} />
                      </KeepAlive>
                    )}
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => <Router>{renderRoutes(config)}</Router>;
export default AppRouter;
