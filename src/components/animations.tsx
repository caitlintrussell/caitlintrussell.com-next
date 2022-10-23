import { keyframes } from "styled-components";

export const slideDown = keyframes`
from {
  opacity: 0;
  transform: translateY(-10vh);
}

to {
  opacity: 1;
  transform: none;
}
`

export const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1vh);
  }
  25% {
    opacity: 0;
    transform: translateY(-1vh);
  }
  to {
    opacity: 1;
    transform: none; 
  }
`