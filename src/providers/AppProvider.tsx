import { FC, ReactNode } from 'react'
import { StoreProvider } from './StoreProvider/ui/StoreProvider'

interface AppProviderProps {
    children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return <StoreProvider>{children}</StoreProvider>
}
