import React from 'react'

export default function Contact() {
  return (
    <div className='container p-3 p-sm-5'>
        <div className='row col-md-10 mx-auto'>
            <h1 className='text-center mt-5 mb-4'>Kapcsolat</h1>
            
            <h5>Istentiszteleteinket itt tartjuk:</h5>
            <p>Zalaegerszeg, Závodszky István utca 1.</p>
            <p>Ez a volt nyomda irodáinak épülete.</p>
            <p>A térkép közepén piros jelölő mutatja a pontos helyet.</p>

            {/* https://www.google.com/maps/d/edit?mid=1nTBFfb81jiWnf4d_ts5xGph6yhtx14A&usp=sharing */}
            <iframe src="https://www.google.com/maps/d/embed?mid=1nTBFfb81jiWnf4d_ts5xGph6yhtx14A&ehbc=2E312F" width="640" height="480" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
