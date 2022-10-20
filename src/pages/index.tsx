import Image from 'next/image'
import styled from 'styled-components'
import border from '/public/static/border.svg'
import fiore from '/public/static/fiore.svg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoArea = styled.div`
  min-height: 345px;
  min-width: 500px;
  border-color: #46789e;
  border-image-slice: 110;
  border-image-width: 100px;
  border-image-source: url(${border.src});
  border-style: solid;
`

const Bottom = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: center;
  flex-grow: 1;
  & > h2 {
    color: #46789e;
    padding: 0;
    margin: 0;
  }
`

const Fiori = styled.div`
  display: flex;
  width: calc(100% + 210px);
  align-items: space-between;
  justify-content: space-between;
  margin-top: 40px
`

const FioreLeft = styled.div`
  position: relative;
  left: -105px;
`

const FioreRight = styled.div`
  position: relative;
  right: 105px;
  & img {
    transform: scaleX(-1);
  }
`

const HomePage = () => (
  <Container>
    <LogoArea>
      <Fiori>
        <FioreLeft>
          <Image src={fiore} />
        </FioreLeft>
        <FioreRight>
          <Image src={fiore} />
        </FioreRight>
      </Fiori>
      <Bottom>
        <h2>software engineer</h2>
      </Bottom>
    </LogoArea>
  </Container>
)

export default HomePage
