import { useRef, useEffect } from 'react'

export const usePortal = id => {
  const elementRef = useRef(null)

  useEffect(() => {
    const modalRoot = document.getElementById(id)
    modalRoot.append(elementRef.current)

    return () => {
      elementRef.current.remove()
    }
  }, [id])

  const getRootElement = () => {
    if (!elementRef.current) {
      elementRef.current = document.createElement("div")
    }

    return elementRef.current
  }

  return getRootElement()
}