import { cn } from '@/utils/classNames'
import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...otherProps }) => {
    return (
        <input
            className={cn(
                'pt-2 pb-2 pr-4 pl-4 rounded text-[--tg-theme-text-color] bg-[--tg-theme-secondary-bg-color]',
                {},
                [className]
            )}
            {...otherProps}
        />
    )
}
