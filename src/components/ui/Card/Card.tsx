import { cn } from '@/utils/classNames'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
    tag?: 'main' | 'div' | 'section' | 'article'
    children: ReactNode
    className?: string
    padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    margin?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    variant?: 'primary' | 'secondary'
}

const paddingTable: Record<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8', string> = {
    '0': 'p-0',
    '1': 'p-1',
    '2': 'p-2',
    '3': 'p-3',
    '4': 'p-4',
    '5': 'p-5',
    '6': 'p-6',
    '7': 'p-7',
    '8': 'p-8',
}

const marginTable: Record<'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8', string> = {
    '0': 'm-0',
    '1': 'm-1',
    '2': 'm-2',
    '3': 'm-3',
    '4': 'm-4',
    '5': 'm-5',
    '6': 'm-6',
    '7': 'm-7',
    '8': 'm-8',
}

const bgTable: Record<'primary' | 'secondary', string> = {
    primary: 'bg-[background-color: var(--tg-theme-secondary-bg-color)]',
    secondary: 'bg-[background-color: var(--tg-theme-section-bg-color)]',
}

export const Card: FC<CardProps> = ({
    children,
    tag: Wrapper = 'div',
    className,
    padding = '0',
    margin = '0',
    variant = 'primary',
    ...otherProps
}) => {
    return (
        <Wrapper
            className={cn(`${bgTable[variant]} ${paddingTable[padding]} ${marginTable[margin]}`, {}, [className])}
            {...otherProps}
        >
            {children}
        </Wrapper>
    )
}
