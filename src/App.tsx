import { Mail } from 'lucide-react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

function App() {

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form className='px-8 border border-gray-500 rounded-lg'>
        <div className='mb-2'>
          <h1 className='font-bold text-2xl text-blue-600 mb-2'>HungerGames</h1>
          <h2 className='text-blue-400 text-2xl'>SignIn</h2>
        </div>
        <div>
          <Label className='mb-1'>Email</Label>
          <div className='relative'>
          <Input
            type='email'
            placeholder='your email'
          />
          <Mail className='inset-y-4'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default App
