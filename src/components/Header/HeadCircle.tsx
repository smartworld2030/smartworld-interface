import { Link } from 'react-router-dom'
import Colors from '../../Theme/Colors'

interface HeadCircleProps {
  positionX: number
  positionY: number
  textPos: number
  size: number
  number: number
  text: string
  link: string
  onClick: () => void
  active: boolean
  icon: JSX.Element
}

export const HeadCircle: React.FC<HeadCircleProps> = ({
  positionX,
  positionY,
  size,
  number,
  onClick,
  active,
  text,
  link,
  icon,
  textPos,
}) => {
  return (
    <g onClick={onClick} filter={active ? undefined : 'url(#greyscale)'}>
      <Link to={link}>
        <circle
          cx={positionX}
          cy={positionY - size}
          r={size}
          stroke={active ? Colors.green : Colors.secondText}
          strokeWidth="2.5"
        />
        {icon}
        <text
          x={positionX}
          y={textPos}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="central"
          fontSize={size * 0.55}
          fontWeight="700"
          fill={active ? Colors.text : 'white'}
        >
          {text}
        </text>
        {number && (
          <svg x={positionX - 6} y={textPos - 27}>
            <path
              d="M 12 0 L 6 10 L 0 0 L 12 0"
              fill={active ? Colors.green : Colors.grey}
            />
            <text
              x={6}
              y={4}
              textAnchor="middle"
              dominantBaseline="central"
              alignmentBaseline="central"
              fontSize="8"
              fill={active ? Colors.background : 'white'}
            >
              {number}
            </text>
          </svg>
        )}
      </Link>
    </g>
  )
}
