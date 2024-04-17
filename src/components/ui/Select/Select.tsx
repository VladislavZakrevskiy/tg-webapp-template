import { FC } from 'react'

interface SelectProps {
    options: {
        key: string | number
        value: string | number
    }[]

    value?: string | number
    onChange: (value: string) => void
}

export const Select: FC<SelectProps> = ({ options, onChange, value }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="pt-2 pb-2 pr-4 pl-4 bg-[--tg-theme-secondary-bg-color] text-[--tg-theme-text-color] rounded"
        >
            {options.map((option) => (
                <option value={option.key} key={option.key}>
                    {option.value}
                </option>
            ))}
        </select>
    )
}
