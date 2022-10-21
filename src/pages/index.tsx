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
  display: flex;
  flex-direction: column;
  min-height: 345px;
  min-width: 500px;
  border-color: #46789e;
  border-image-slice: 110;
  border-image-width: 100px;
  border-image-source: url(${border.src});
  border-style: solid;
`

const Bottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 1rem;
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
  position: relative;
  left: -105px;
  top: 40px;
`

const FioreRight = styled.div`
  & img {
    transform: scaleX(-1);
  }
`

const HomePage = () => (
  <Container>
    <LogoArea>
      <Fiori>
        <div>
          <Image src={fiore} />
        </div>
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
