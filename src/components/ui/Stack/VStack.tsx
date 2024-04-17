import React, { FC } from 'react'
import { Flex, FlexProps } from './Flex'

export const VStack: FC<FlexProps> = (props) => {
    return (
        <Flex direction="col" {...props}>
            {props.children}
        </Flex>
    )
}
