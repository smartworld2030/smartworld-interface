import React from 'react'

interface SttLogoProps {
  width: number
  x: number
  y: number
}

export const LandLogo: React.FC<SttLogoProps> = ({ width, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 400 400"
      fill="none"
      {...rest}
    >
      <g>
        <path
          d="M139.3 298.764C137.891 298.01 137.891 295.989 139.3 295.236L195.174 265.375C196.506 264.663 198.117 265.628 198.117 267.139L198.117 326.861C198.117 328.371 196.506 329.337 195.174 328.625L139.3 298.764Z"
          fill="#FF1F4F"
        />
        <path
          d="M261.534 295.236C262.944 295.99 262.944 298.01 261.534 298.764L205.66 328.625C204.328 329.337 202.718 328.372 202.718 326.861L202.718 267.139C202.718 265.628 204.328 264.663 205.66 265.375L261.534 295.236Z"
          fill="#FF1F4F"
        />
        <path
          d="M261.534 218.569C262.944 219.323 262.944 221.344 261.534 222.097L205.66 251.958C204.328 252.67 202.718 251.705 202.718 250.194L202.718 190.472C202.718 188.962 204.328 187.996 205.66 188.708L261.534 218.569Z"
          fill="#FF1F4F"
        />
        <path
          d="M206.478 260.43C205.069 259.677 205.069 257.656 206.478 256.903L262.352 227.042C263.684 226.33 265.294 227.295 265.294 228.806L265.294 288.528C265.294 290.038 263.684 291.003 262.352 290.291L206.478 260.43Z"
          fill="#FF1F4F"
        />
      </g>
      <g>
        <path
          d="M261.7 141.57C263.109 142.323 263.109 144.344 261.7 145.097L205.826 174.958C204.494 175.67 202.883 174.705 202.883 173.195L202.883 113.473C202.883 111.962 204.494 110.997 205.826 111.709L261.7 141.57Z"
          fill="#1AE285"
        />
        <path
          d="M139.466 145.097C138.056 144.344 138.056 142.323 139.466 141.569L195.34 111.708C196.672 110.996 198.282 111.962 198.282 113.472L198.282 173.194C198.282 174.705 196.672 175.67 195.34 174.958L139.466 145.097Z"
          fill="#1AE285"
        />
        <path
          d="M139.466 221.764C138.056 221.01 138.056 218.99 139.466 218.236L195.34 188.375C196.672 187.663 198.282 188.628 198.282 190.139L198.282 249.861C198.282 251.372 196.672 252.337 195.34 251.625L139.466 221.764Z"
          fill="#1AE285"
        />
        <path
          d="M194.522 179.903C195.931 180.656 195.931 182.677 194.522 183.431L138.648 213.292C137.316 214.004 135.706 213.038 135.706 211.528L135.706 151.806C135.706 150.295 137.316 149.33 138.648 150.042L194.522 179.903Z"
          fill="#1AE285"
        />
      </g>
    </svg>
  )
}
