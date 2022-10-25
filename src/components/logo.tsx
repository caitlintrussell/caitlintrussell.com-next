import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
import { Headline, Subtitle } from '../components/typography'
import { appear } from './animations'
import fiore from '/public/static/fiore.svg'

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
  flex: 1;
  overflow: visible;
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
    letter-spacing: 0.9rem;
    font-size: 1rem;
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
      <Subtitle>frontend software engineer</Subtitle>
    </Tagline>
  </LogoArea>
)

export default Logo
