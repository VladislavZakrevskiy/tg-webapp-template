import { HStack } from '../Stack/HStack'
import { Loader } from './Loader'

export const PageLoader = () => {
    return (
        <HStack className="w-screen h-screen" justifyContent="center" alignItems="center">
            <Loader size="superLarge" />
        </HStack>
    )
}
