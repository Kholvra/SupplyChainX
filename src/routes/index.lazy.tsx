import { createLazyFileRoute } from '@tanstack/react-router'
import Container from '../components/Container'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return <Container>
    <p className='text-white'>index</p>
  </Container>
}
