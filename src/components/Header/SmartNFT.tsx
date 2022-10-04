import React from 'react'

interface SmartNFTProps {
  width: number
  x: number
  y: number
}

export const SmartNFT: React.FC<SmartNFTProps> = ({ width, ...rest }) => {
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
          d="M107.752 290.814C106.993 292.195 105.007 292.195 104.248 290.814L74.6301 236.964C73.897 235.631 74.8613 234 76.3825 234H135.617C137.139 234 138.103 235.631 137.37 236.964L107.752 290.814Z"
          fill="#1AE285"
        />
        <path
          d="M104.248 172.186C105.007 170.805 106.993 170.805 107.752 172.186L137.37 226.036C138.103 227.369 137.139 229 135.617 229H76.3825C74.8613 229 73.897 227.369 74.6301 226.036L104.248 172.186Z"
          fill="#1AE285"
        />
        <path
          d="M142.248 107.186C143.007 105.805 144.993 105.805 145.752 107.186L175.37 161.036C176.103 162.369 175.139 164 173.617 164H114.383C112.861 164 111.897 162.369 112.63 161.036L142.248 107.186Z"
          fill="#1AE285"
        />
        <path
          d="M145.752 225.814C144.993 227.195 143.007 227.195 142.248 225.814L112.63 171.964C111.897 170.631 112.861 169 114.383 169H173.617C175.139 169 176.103 170.631 175.37 171.964L145.752 225.814Z"
          fill="#1AE285"
        />
        <path
          d="M180.248 173.186C181.007 171.805 182.993 171.805 183.752 173.186L213.37 227.036C214.103 228.369 213.139 230 211.617 230H152.383C150.861 230 149.897 228.369 150.63 227.036L180.248 173.186Z"
          fill="#1AE285"
        />
        <path
          d="M220.752 225.814C219.993 227.195 218.007 227.195 217.248 225.814L187.63 171.964C186.897 170.631 187.861 169 189.383 169H248.617C250.139 169 251.103 170.631 250.37 171.964L220.752 225.814Z"
          fill="#FF1D4E"
        />
        <path
          d="M257.752 291.814C256.993 293.195 255.007 293.195 254.248 291.814L224.63 237.964C223.897 236.631 224.861 235 226.383 235H285.617C287.139 235 288.103 236.631 287.37 237.964L257.752 291.814Z"
          fill="#FF1D4E"
        />
        <path
          d="M254.248 173.186C255.007 171.805 256.993 171.805 257.752 173.186L287.37 227.036C288.103 228.369 287.139 230 285.617 230H226.383C224.861 230 223.897 228.369 224.63 227.036L254.248 173.186Z"
          fill="#FF1D4E"
        />
        <path
          d="M292.248 108.186C293.007 106.805 294.993 106.805 295.752 108.186L325.37 162.036C326.103 163.369 325.139 165 323.617 165H264.383C262.861 165 261.897 163.369 262.63 162.036L292.248 108.186Z"
          fill="#FF1D4E"
        />
        <path
          d="M295.752 226.814C294.993 228.195 293.007 228.195 292.248 226.814L262.63 172.964C261.897 171.631 262.861 170 264.383 170H323.617C325.139 170 326.103 171.631 325.37 172.964L295.752 226.814Z"
          fill="#FF1D4E"
        />
      </g>
    </svg>
  )
}