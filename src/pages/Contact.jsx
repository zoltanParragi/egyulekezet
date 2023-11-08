import React from 'react'

export default function Contact() {
  return (
    <div className='container p-3 p-sm-5'>
      <div className='row col-md-10 mx-auto'>
        <h1 className='text-center mt-5 mb-4'>Kapcsolat</h1>

        <h3 className='mb-3'>Istentiszteleteink helye</h3>
        <div className='ps-4 pe-4'>
          <p>Zalaegerszeg, Závodszky István utca 1. II. emelet</p>
          <p className='fs-6'>A volt nyomda irodáinak épülete. A térkép közepén piros jelölő mutatja a pontos helyet.</p>
          {/* https://www.google.com/maps/d/edit?mid=1nTBFfb81jiWnf4d_ts5xGph6yhtx14A&usp=sharing */}
          <iframe src="https://www.google.com/maps/d/embed?mid=1nTBFfb81jiWnf4d_ts5xGph6yhtx14A&ehbc=2E312F" width="640" height="480" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="mt-5 mb-5">
          <h3 className="mb-3">Írj nekünk!</h3>
          <div className="col-md-6 mx-auto">
            <form className='d-flex flex-column' action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="45d74513-777c-40fb-a9b0-b4a328a391cd" />
              <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
              <label htmlFor="name" className="lang" key="FORM_NAME">Név</label>
              <input type="text" name="name" id="name" required className='mb-3'/>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required className='mb-3'/>
              <label htmlFor="message" className="lang" key="FORM_MESSAGE">Üzenet</label>
              <textarea name="message" id="message" required className='mb-3'></textarea>
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <button type="submit" className='btn btn-action col-6 col-md-4 col-lg-3 p-0 pt-1 pb-1 text-center'>Elküld</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}