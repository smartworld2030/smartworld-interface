import { useEffect, useState } from 'react'

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
  width: number
  height: number
  isMobile: boolean
}
let timer
// Hook
export function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
    isMobile: false,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      clearTimeout(timer)
      // Set window width/height to state
      timer = setTimeout(() => {
        setWindowSize({
          isMobile: window.innerWidth < 768,
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 200)
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
    }
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
