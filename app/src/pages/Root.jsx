import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Root() {
  return (
    <div>
        <Header />
        <div className='container || w-full md:w-10/12 lg:w-3/4 mx-auto'>
            <Outlet />
        </div>
    </div>
  )
}
