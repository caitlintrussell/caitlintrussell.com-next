import { keyframes } from 'styled-components'

export const slideDown = keyframes`
from {
  opacity: 0;
  transform: translateY(-100vh);
}
50% {
  opacity: 0;
  transform: translateY(-100vh);
}
to {
  opacity: 1;
  transform: none;
}
`