import styled from 'styled-components'
import Logo from '../components/logo'
import Navigation from '../components/navigation'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HomePage = () => (
  <Container>
    <Navigation />
    <Logo />
  </Container>
)

export default HomePage
