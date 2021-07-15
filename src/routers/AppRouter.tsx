import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import type { RoutesProps } from './config';
import config from './config';
import PageLoading from '@/components/PageLoading';

debugger

const renderRoutes = (routes?: RoutesProps) => {
  if(!Array.isArray(routes)) {
    return null
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
            render={() => {
              const renderChildRoutes = renderRoutes(route.routes);
              if (route.component) {
                return (
                  <Suspense fallback={<PageLoading />}>
                    <route.component route={route}>{renderChildRoutes}</route.component>
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  )
}

const AppRouter = () => <Router>{renderRoutes(config)}</Router>;
export default AppRouter