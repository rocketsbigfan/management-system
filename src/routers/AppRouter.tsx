import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RoutesProps } from './config';
import config from './config';
import PageLoading from '@/components/PageLoading';
import KeepAlive from 'react-activation';
import { AliveScope } from 'react-activation';

const noNeedCachePath = ['/user', '/user/login'];

const renderRoutes = (routes?: RoutesProps) => {
  if (!Array.isArray(routes)) {
    return undefined;
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
              // route存在component时进循环
              if (route.component) {
                // 有子route时
                if (renderChildRoutes) {
                  return (
                    <Suspense fallback={<PageLoading />}>
                      <route.component route={route} {...props}>
                        {renderChildRoutes}
                      </route.component>
                    </Suspense>
                  );
                }
                if (noNeedCachePath.includes(route.path)) {
                  // 不需要缓存路由下的内容时
                  return (
                    <Suspense fallback={<PageLoading />}>
                      <route.component route={route} {...props} />
                    </Suspense>
                  );
                }
                // 输出需要缓存的路由
                return (
                  <Suspense fallback={<PageLoading />}>
                    <KeepAlive name={route.path} title={route.title}>
                      <route.component route={route} {...props} />
                    </KeepAlive>
                  </Suspense>
                );
              }
              // default
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => (
  <Router>
    <AliveScope>{renderRoutes(config)}</AliveScope>
  </Router>
);
export default AppRouter;
