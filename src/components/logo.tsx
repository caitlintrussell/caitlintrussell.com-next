import Image from 'next/image'
import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Headline, Subtitle } from '../components/typography'
import fiore from '/public/static/fiore.svg'

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

const LogoArea = styled.div`
  animation: ${appear} 1s ease-in;
`

const Border = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 185px;
  border: 6px double #46789e;
  border-radius: 110px 110px 0 0;
  max-height: 180px;
`

const Fiori = styled.div`
  min-height: 225px;
  display: flex;
  justify-content: space-between;
  position: relative;
  left: -35px;
  top: -50px;
  width: calc(100% + 70px);
  & > div:last-of-type {
    transform: scaleX(-1);
  }

  & svg {
    width: 100%;
  }
`

const Name = styled.div`
  margin: 0 -105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  & > h1 {
    padding: 0;
    margin: 0;
    &:nth-of-type(2) {
      padding-left: 1.25rem;
      letter-spacing: 0.85rem;
    }
  }
`

const Tagline = styled.div`
  & > h2 {
    letter-spacing: 0.3rem;
    font-size: 0.8rem;
    text-align: center;
    margin: 0.25rem 0 0;
  }
`

const Logo: FC = () => (
  <LogoArea>
    <Border>
      <Fiori>
        <div>
          <Image src={fiore} alt="" layout="intrinsic" />
        </div>
        <Name>
          <Headline>Caitlin</Headline>
          <Headline>Trussell</Headline>
        </Name>
        <div>
          <Image src={fiore} alt="" layout="intrinsic" />
        </div>
      </Fiori>
    </Border>
    <Tagline>
      <Subtitle>makin' software since 2017™</Subtitle>
    </Tagline>
  </LogoArea>
)

export default Logo
