import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@/lib/api/rtkApi'

export const createReduxStore = () => {
    const store = configureStore({
        reducer: {
            [rtkApi.reducerPath]: rtkApi.reducer,
        },
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware),
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>
