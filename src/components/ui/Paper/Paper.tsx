import { cn } from '@/utils/classNames'
import { FC, HTMLAttributes, ReactNode } from 'react'

type PaperBgColor = 'primary' | 'secondary'

interface PaperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
    tag?: 'main' | 'div' | 'section' | 'article'
    children: ReactNode
    bgColor?: PaperBgColor
    className?: string
}

const bgTable: Record<PaperBgColor, string> = {
    primary: 'bg-[background-color: var(--tg-theme-bg-color)]',
    secondary: 'bg-[background-color: var(--tg-theme-secondary-bg-color)]',
}

export const Paper: FC<PaperProps> = ({
    children,
    tag: Wrapper = 'div',
    bgColor = 'primary',
    className,
    ...otherProps
}) => {
    return (
        <Wrapper className={cn(`${bgTable[bgColor]}`, {}, [className])} {...otherProps}>
            {children}
        </Wrapper>
    )
}
