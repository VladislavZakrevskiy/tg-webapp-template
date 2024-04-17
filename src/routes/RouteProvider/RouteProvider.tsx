import { Suspense, memo, useCallback } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'
import { routeConfig } from '../routeConfig/routeConfig'
import { PageLoader } from '@/components/ui'

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

        return <Route element={element} path={route.path} key={route.path} />
    }, [])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    )
})
