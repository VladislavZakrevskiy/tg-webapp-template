import { cn } from '@/utils/classNames'
import { FC, HTMLAttributes, ReactNode } from 'react'

type TextColor = 'accent' | 'default' | 'link' | 'hint' | 'button' | 'section_header' | 'subtitle' | 'destructive'
type TextSize = 'smaller' | 'small' | 'default' | 'large' | 'larger' | 'superLarge'

interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'> {
    tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: ReactNode
    className?: string
    size?: TextSize
    color?: TextColor
}

const sizeStyle: Record<TextSize, string> = {
    default: 'text-base',
    large: 'text-lg',
    larger: 'text-xl',
    small: 'text-sm',
    smaller: 'text-xs',
    superLarge: 'text-4xl',
}

const colorStyle: Record<TextColor, string> = {
    accent: 'text-[color: var(--tg-theme-accent-text-color)]',
    button: 'text-[color: var(--tg-theme-button-text-color)]',
    default: 'text-[color: var(--tg-theme-text-color)]',
    destructive: 'text-[color: var(--tg-theme-destructive-text-color)]',
    hint: 'text-[color: var(--tg-theme-hint-color)]',
    link: 'text-[color: var(--tg-theme-link-color)]',
    section_header: 'text-[color: var(--tg-theme-section-header-text-color)]',
    subtitle: 'text-[color: var(--tg-theme-subtitle-text-color)]',
}

export const Text: FC<TextProps> = ({
    tag: Wrapper = 'p',
    children,
    className,
    size = 'default',
    color = 'default',
    ...otherProps
}) => {
    return (
        <Wrapper className={cn(`${colorStyle[color]} ${sizeStyle[size]}`, {}, [className])} {...otherProps}>
            {children}
        </Wrapper>
    )
}
