import { FC } from 'react'
import { Card } from '../Card/Card'

interface SkeletonProps {
    width: number | 'auto' | '100%'
    height: number | 'auto' | '100%'
}

export const Skeleton: FC<SkeletonProps> = ({ height, width }) => {
    return <Card style={{ width, height }} className="shadow animate-pulse" />
}
