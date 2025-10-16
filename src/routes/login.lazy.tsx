import { createLazyFileRoute } from '@tanstack/react-router'
import Button from '../components/Button'

export const Route = createLazyFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='h-screen bg-blue-900'>
    <div className='flex flex-col justify-center items-center gap-5 w-3/4 h-full m-auto'>
        <h1 className='text-5xl text-white'>Login</h1>
        <div className='flex flex-col gap-3'>
            <Button>Connect SUI Wallet</Button>
            <Button>Login with Email</Button>
        </div>
    </div>
  </div>
}
