import { createLazyFileRoute } from '@tanstack/react-router'
import Container from '../components/Container'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Container>
    <p className='text-white'>index</p>
  </Container>
}
