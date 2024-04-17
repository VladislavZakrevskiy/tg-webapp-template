import { RouteProps } from 'react-router-dom'
import { AppRoutes, getRouteMain } from './routes'
import { LazyMainPage } from '@/pages/MainPage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <LazyMainPage />,
    },
}
