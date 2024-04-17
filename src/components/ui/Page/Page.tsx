import { FC, HTMLAttributes } from 'react'

interface PageProps extends HTMLAttributes<HTMLDivElement> {}

export const Page: FC<PageProps> = (props) => {
    return <div className="p-4" {...props} />
}
