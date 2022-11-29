import { FC } from 'react'

interface IProps {
  stroke: string
  fill: string
}

const CDT: FC<IProps> = ({ stroke, fill }) => (
  <svg
    aria-hidden
    width="33"
    height="40"
    viewBox="0 0 36 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5127 4.95624C10.5945 4.95624 4.96881 10.5557 4.96881 17.4417C4.96881 24.3277 10.5945 29.9272 17.5127 29.9272H30.7451V53.0106"
      stroke={stroke}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M30.7451 33.8078H17.5127C8.44379 33.8078 1.05945 26.4578 1.05945 17.4311C1.05945 8.40449 8.44379 1.0545 17.5127 1.0545"
      stroke={stroke}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M28.0012 50.427H20.6168C16.7604 50.427 13.6139 47.3373 13.6139 43.5515C13.6139 39.7658 16.7604 36.6761 20.6168 36.6761H28.0012V50.4375V50.427Z"
      fill={fill}
    />
    <path
      d="M34.9406 29.2734V53"
      stroke={stroke}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
)

export default CDT
