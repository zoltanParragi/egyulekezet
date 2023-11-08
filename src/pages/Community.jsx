import React from 'react'

export default function Community() {
  return (
    
    <div className='container p-3 p-sm-5'>
        <div className='row col-md-10 mx-auto'>
            <h1 className='text-center mt-5 mb-4'>Közösség</h1>

            <div>
              <h3>Istentisztelet</h3>
              <p>Ideje: minden vasárnap 17 órától kb.19:30-ig.</p>
              <p>Helye: Zalaegerszeg, Závodszky u. 1. II. emelet.</p>
            </div>

            <div>
              <h3>Imakör</h3>
              <p>Ideje: minden szerdán 17 órától kb.19:30-ig.</p>
              <p>Helye: Zalaegerszeg, Závodszky u. 1. II. emelet.</p>
            </div>
            
            <div className='mt-5'>
              <iframe width="400" height="300" src="https://www.youtube.com/embed/35v14UfEX5Q?si=0j5CDfE7rRpJpeFj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
    </div>
  )
}
