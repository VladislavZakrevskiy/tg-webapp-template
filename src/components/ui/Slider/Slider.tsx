import { FC, useState } from 'react'

interface SliderProps {
    images: string[]
}

export const Slider: FC<SliderProps> = ({ images }) => {
    const [current, setCurrent] = useState(0)

    const previousSlide = () => {
        if (current === 0) setCurrent(images.length - 1)
        else setCurrent(current - 1)
    }

    const nextSlide = () => {
        if (current === images.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }

    return (
        <div className="overflow-hidden relative">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {images.map((s) => {
                    return <img src={s} key={'image-' + s} />
                })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <svg width={800} height={800} xmlSpace="preserve" viewBox="0 0 100 100">
                        <path d="m33.934 54.458 30.822 27.938a1.996 1.996 0 0 0 2.826-.138 1.999 1.999 0 0 0-.139-2.824l-29.642-26.87L64.67 22.921a1.998 1.998 0 1 0-2.963-2.685L33.768 51.059a1.994 1.994 0 0 0-.475 1.723 1.988 1.988 0 0 0 .641 1.676z" />
                    </svg>
                </button>
                <button onClick={nextSlide}>
                    <svg width={800} height={800} viewBox="0 0 32 32">
                        <path d="M8.489 31.975a1.073 1.073 0 0 1-.757-1.831L21.99 15.88 7.94 1.83c-.417-.417-.417-1.098 0-1.515s1.098-.417 1.515 0l14.807 14.807a1.074 1.074 0 0 1 0 1.515L9.247 31.659a1.078 1.078 0 0 1-.757.316z" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {images.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i)
                            }}
                            key={'circle' + s}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${
                                i == current ? 'bg-white' : 'bg-gray-500'
                            }`}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
