import React from 'react'
import Colors from '../../../Theme/Colors'

interface PoolCircleInputProps extends React.HTMLAttributes<SVGElement> {
  percent: number
  width: number
  token: string
  disable?: boolean
  disableMax?: boolean
  onMax: () => void
}

export const PoolCircleInput: React.FC<PoolCircleInputProps> = ({
  percent,
  width,
  onClick,
  onMax,
  token,
  disable,
  disableMax,
  ...rest
}) => {
  percent = percent > 0 ? percent * 10 : 0
  const strokeCalculate = () =>
    `0,${percent % 1000},0,${1000 - (percent % 1000)}`

  return (
    <svg
      style={{
        position: 'absolute',
        zIndex: 15,
        top: 0,
        left: 0,
        width: width,
        touchAction: 'none',
      }}
      viewBox="0 0 360 360"
    >
      <g onClick={onClick} {...rest}>
        <circle r="160" cx="180" cy="180" fill={Colors.background} />
        <path
          fill="none"
          stroke={
            disable ? Colors.grey : percent <= 1000 ? Colors.green : Colors.red
          }
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${percent},1000`}
          d="M 180 20 
          a 160 160 0 0 1 0 320 
          a 160 160 0 0 1 0 -320"
        />
        <path
          fill="none"
          stroke={percent === Infinity ? Colors.red : 'white'}
          strokeWidth={percent === Infinity ? '10' : '25'}
          strokeLinecap="round"
          strokeDasharray={strokeCalculate()}
          d="M180 20.845
          a 159.155 159.155 0 0 1 0 318.31
          a 159.155 159.155 0 0 1 0 -318.31"
        />
        <text
          x="175"
          y="80"
          fontSize="25"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
        >
          {token === 'BTCB' ? 'BTC' : token}
        </text>
      </g>
      <g onClick={() => onMax()}>
        <text
          x="175"
          y="290"
          fontSize="30"
          fill={disableMax ? Colors.grey : Colors.green}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          MAX
        </text>
      </g>
    </svg>
  )
}
