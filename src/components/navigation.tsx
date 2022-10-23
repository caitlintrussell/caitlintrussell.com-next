import { FC } from 'react'
import styled from 'styled-components'

const Circle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="13" width="13">
    <circle
      cx="6.5"
      cy="6.5"
      r="5"
      stroke="currentColor"
      stroke-width="3"
      fill="none"
    />
  </svg>
)

const Bar = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: 100px;
display: flex;
align-items: center;

`

const Navigation: FC = () => <Bar><div><Circle /></div>About</Bar>

export default Navigation
