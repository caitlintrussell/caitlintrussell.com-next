import { RefObject, useEffect, useState } from 'react'

export const useIsIntersecting = (ref: RefObject<any>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
    if (ref?.current) {
      observer.observe(ref.current)
    }
  }, [])

  return isIntersecting
}
