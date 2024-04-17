import { cn } from '@/utils/classNames'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Text } from '../Text/Text'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'> {
    children: ReactNode
    onClick?: () => void
    className?: string
}

export const Button: FC<ButtonProps> = ({ children, onClick, className, ...otherProps }) => {
    return (
        <button
            onClick={onClick}
            className={cn(`bg-[background-color: var(--tg-theme-button-color)]`, {}, [className])}
            {...otherProps}
        >
            <Text color="button">{children}</Text>
        </button>
    )
}
