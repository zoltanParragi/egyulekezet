import React from 'react'
import HeaderSmall from '../components/HeaderSmall'
import Nav from '../components/Nav'

export default function NotFound() {
  return (
    <>
      <HeaderSmall />
      <Nav />
      <div className='' style={{padding: '4rem 4rem'}}>
        <div className='' style={{padding: '2rem', background: '#ECECEB'}}>
          <h1 className='text-center mt-5 mb-5'>Hoppá! Ilyen oldal nem található...</h1>
        </div>
      </div>
    </>
  )
}
