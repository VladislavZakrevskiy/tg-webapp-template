import { tg } from '@/config/TG'
import { FC, ReactNode } from 'react'

export interface MainButtonProps {
    children: ReactNode
    text_color?: string
    bg_color?: string
    isVisible: boolean
}

export const MainButton: FC<MainButtonProps> = ({ children, bg_color, text_color, isVisible }) => {
    const MainButtonInstance = tg.MainButton

    MainButtonInstance.setParams({ color: bg_color, text: children as string, text_color, is_visible: isVisible })

    return null
}
