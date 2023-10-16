import { Outlet } from 'react-router-dom'
import HeaderSmall from '../components/HeaderSmall'
import Nav from '../components/Nav'


export default function Layout() {
  return (
    <>
      <HeaderSmall />
      <Nav />

      <Outlet />
    </>
  )
}
