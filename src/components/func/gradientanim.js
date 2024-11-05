import { useEffect, useState } from 'react'

const GradientAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const x = (clientX / window.innerWidth) * 100
      const y = (clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: `
          radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(120, 120, 255, 0.95) 0%,
            rgba(50, 50, 255, 0.95) 100%
          )
        `,
        transition: 'background 0.3s ease',
        pointerEvents: 'none'
      }} 
    />
  )
}

export default GradientAnimation
