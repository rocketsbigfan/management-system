import React, { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouteProps } from '@/routers/config';
import styles from './UserLayout.module.less'

interface Props {
	children: ReactNode
	route: RouteProps
}

const UserLayout = (props: Props) => {
	const { children, route } = props
	const title = route.title
	return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </HelmetProvider>
	)
}

export default UserLayout
