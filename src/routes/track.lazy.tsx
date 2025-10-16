import { createLazyFileRoute } from '@tanstack/react-router'
import TrackerChain from '../components/TrackerChain'
import Button from '../components/Button'

export const Route = createLazyFileRoute('/track')({
  component: TrackSupplyChain,
})

function TrackSupplyChain() {
  return <div className='h-screen bg-blue-900 text-white'>
    <div className='flex flex-col justify-center items-center gap-20 w-3/4 h-full m-auto'>
    <h1 className='text-5xl'>Track Supply Chain</h1>
    <TrackerChain/>
    <Button>Track</Button>
    </div>
    </div>
}
