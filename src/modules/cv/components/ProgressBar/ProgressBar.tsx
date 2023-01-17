'use client' // this is a client component

import React, { MutableRefObject, useMemo, useState } from 'react'
import { useSpring, animated, easings } from 'react-spring'
import { PRIMARY_COLOR, PROGRESSBAR_COLOR } from '@/modules/cv/const/colors'

type ProgressBarProps = {
  value?: number

  innerRef?: MutableRefObject<HTMLDivElement>
}

const min = 0
const max = 100

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, innerRef }) => {
  const progressPercentage = useMemo(() => {
    const progress = (value - min) / (max - min)
    return progress * 100
  }, [min, max, value])

  const [currentValueTextInvertColor, setCurrentValueTextInvertColor] = useState(false)

  const { width } = useSpring<{ width: number }>({
    from: { width: min },
    to: { width: progressPercentage },
    config: { duration: 2000, easing: easings.easeInOutQuad },
    onChange(result) {
      if ((result.value.width as any) > 50) setCurrentValueTextInvertColor(true)
      if ((result.value.width as any) < 50) setCurrentValueTextInvertColor(false)
    },
  })

  return (
    <div className="flex flex-row w-full items-center" ref={innerRef}>
      <div className="relative h-6 w-full" style={{ backgroundColor: PRIMARY_COLOR }}>
        <animated.div
          className="absolute inset-0 "
          style={{ width: width.to((v) => `${v}%`), backgroundColor: PROGRESSBAR_COLOR }}
        ></animated.div>
        <animated.div
          className={`absolute inset-y-0 flex items-center justify-center w-10 h-10 ${
            currentValueTextInvertColor ? 'text-white' : 'text-gray-600'
          }`}
          style={{ left: '50%', top: -2 }}
        >
          {/*{value}%*/}
        </animated.div>
      </div>
    </div>
  )
}

export default ProgressBar
