import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
import { Headline, Subtitle } from '../components/typography'
import { appear } from './animations'
import border from '/public/static/border.svg'
import fiore from '/public/static/fiore.svg'

const BorderedArea = styled.div`
  border-image-slice: 115 95;
  border-image-width: 100px;
  border-style: solid;
  border-image-source: url(${border.src});
  display: flex;
  flex-direction: column;
  min-height: 290px;
  width: 450px;
  border-color: #46789e;
  border-style: solid;
  animation: ${appear} 1s ease-in;
`

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h1 {
    padding: 0;
    margin: 0;
    &:nth-of-type(2) {
      padding-left: 1.25rem;
      letter-spacing: 0.85rem;
    }
  }
`

const Fiori = styled.div`
  display: flex;
  width: calc(100% + 250px);
  align-items: space-between;
  justify-content: space-between;
  position: relative;
  left: -125px;
  top: 20px;
`

const FioreRight = styled.div`
  & img {
    transform: scaleX(-1);
  }
`

const Bottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 1em;
  & > h2 {
    padding: 0;
    margin: 0;
  }
`

const Logo: FC = () => (
  <BorderedArea>
    <Fiori>
      <div>
        <Image src={fiore} alt="" />
      </div>
      <Name>
        <Headline>Caitlin</Headline>
        <Headline>Trussell</Headline>
      </Name>
      <FioreRight>
        <Image src={fiore} alt="" />
      </FioreRight>
    </Fiori>
    <Bottom>
      <Subtitle>software engineer</Subtitle>
    </Bottom>
  </BorderedArea>
)

export default Logo
