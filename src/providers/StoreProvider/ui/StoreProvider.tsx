import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../storeConfig/store'

interface Props {
    children: ReactNode
}

export const StoreProvider: FC<Props> = ({ children }) => {
    const store = createReduxStore()

    return <Provider store={store}>{children}</Provider>
}
