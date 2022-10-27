import Link from 'next/link'
import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

export const grow = keyframes`
from {
  opacity: 0;
  max-height: 0;
}
50% {
  opacity: 0;
  max-height: 0;
}
to {
  opacity: 1;
  max-height: 400px;
}
`
const Bar = styled.div`
  left: 0;
  top: 0;
  width: 50px;
  display: flex;
  align-items: center;

  flex-direction: column;
  height: 100%;
`
const NavArea = styled.nav`
  writing-mode: vertical-rl;
  animation: ${grow} 1500ms ease-in;
  & > a {
    transition: color 400ms ease-in-out, text-decoration-color 400ms ease-in-out;
    text-transform: uppercase;
    color: #af5939;
    letter-spacing: 0.15rem;
    text-decoration: underline overline rgba(0, 0, 0, 0) solid 2px;
    text-underline-offset: 0.25rem;
    text-overline-offset: 0.25rem;
    padding: 0.5rem 0;
    font-size: 0.9rem;

    &:first-of-type {
      padding-top: 1rem;
    }
    &:last-of-type {
      padding-bottom: 1rem;
    }

    &:hover {
      color: #46789e;
      text-decoration-color: #46789e;
    }
  }
`

const FlexLine = styled.div`
  flex: 1;
  border-left: 6px double #af5939;
  width: 6px;
  height: 700px;
`

const Navigation: FC = () => (
  <Bar>
    <FlexLine />
    <NavArea>
      <Link href="/about">About</Link>
      <Link href="/toolkit">Toolkit</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </NavArea>
    <FlexLine />
  </Bar>
)

export default Navigation
