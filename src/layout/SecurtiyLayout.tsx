import React, { ReactNode } from 'react';
import { stringify } from 'querystring';
import { Redirect } from 'react-router';
import { getToken } from '@/utils/utils';

interface Props {
  children: ReactNode;
  route: any;
}

const SecurityLayout = (props: Props) => {
  const { children } = props;

  const token = getToken();

  if (!token && window.location.pathname !== '/user/login') {
    const queryString = stringify({
      redirect: window.location.href,
    });
    return <Redirect to={`/user/login?${queryString}`} />;
  }
  return <>{children}</>;
};

export default SecurityLayout;
