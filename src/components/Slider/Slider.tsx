import React, { useEffect, useState, useRef } from 'react'
import './Slider.css'

export interface ISlider {
  children?: React.ReactNode,
  deep?: number,
}

const Slider: React.FC<ISlider> = ({ children, deep = 4000 }) => {
  const zSpacing: number = -1000
  const speed: number = 5.5

  const [ lastPos, setLastPos ] = useState<number>(zSpacing / 5)
  const [ zVals, setZVals ] = useState<number[]>([])

  const [ height, setHeight ] = useState(deep)

  const gallery: React.RefObject<HTMLDivElement> | null = useRef(null)

  useEffect(() => {
    const windowHeight = window.innerHeight
    setHeight(windowHeight > deep ? windowHeight + 100 : deep)

    onScrollHandler()
  }, [ deep ])

  useEffect(() => {
    window.scrollTo(0, 1)
  }, [])


  useEffect(() => {
    window.removeEventListener('scroll', onScrollHandler)
    window.addEventListener('scroll', onScrollHandler)

    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [ zVals, lastPos, gallery ])

  /**
   *
   */
  const onScrollHandler = () => {
    let top = document.documentElement.scrollTop,
      delta = lastPos - top,
      zValsTemp = zVals

    if ( !(gallery && gallery.current) ) {
      return
    }

    const frames: Element[] = Array.from(gallery.current.children)

    frames.forEach((frame, i) => {
      if ( zValsTemp[i] === undefined ) {
        zValsTemp[i] = (i * zSpacing + zSpacing)
      }

      zValsTemp[i] += delta * -speed

      let transform = `translateZ(${zValsTemp[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })

    setLastPos(top)
    setZVals(zValsTemp)
  }

  return (
    <div className="body" style={{ height: `${height}px`}}>
      <div className="container">
        <div ref={gallery} className="gallery">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Slider
