import styled from 'styled-components'
import Logo from '../components/logo'
import Navigation from '../components/navigation'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HomePage = () => (
  <Container>
    <Navigation />
    <Logo />
    <Navigation />
  </Container>
)

export default HomePage
