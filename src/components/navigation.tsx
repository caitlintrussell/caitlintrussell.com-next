import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'
import { slideDown } from './animations'

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
  height: 50px;
  display: flex;
  align-items: center;
  animation: ${slideDown} 1500ms ease-in;
`
const NavArea = styled.nav`
  & > a {
    transition: color 400ms ease-in-out, text-decoration-color 400ms ease-in-out;
    text-transform: uppercase;
    color: #af5939;
    letter-spacing: 0.15rem;
    text-decoration: underline rgba(0, 0, 0, 0) solid 3px;
    text-underline-offset: 0.5rem;
    padding: 0 1rem;
    font-size: 0.9rem;

    &:first-of-type {
      padding-left: 0.5rem;
    }
    &:last-of-type {
      padding-right: 0.5rem;
    }

    &:hover {
      color: #46789e;
      text-decoration-color: #46789e;
    }
  }
`

const FlexLine = styled.hr`
  flex: 2;
  border: 2px solid #af5939;
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
  </Bar>
)

export default Navigation
