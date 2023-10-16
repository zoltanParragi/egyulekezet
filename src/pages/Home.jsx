import { CheckCircle, PeopleFill, HeartFill, ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container p-3 p-sm-5'>
      <div className='row col-md-10 mx-auto justify-content-around'>
        <h1 className='display-1 text-center mt-5 mb-5'>Isten hozott!</h1>

        <div className='row justify-content-around mt-4 mb-5'>

          <div className='card mb-5 mb-lg-0 p-0 col-lg-5'>
            <div className='card-header mb-3 fw-bold text-white'>
              Tudtad, hogy ...
            </div>
            <h4 className='card-title text-center mb-3 ps-2 pe-2'>Jézus ma is elérhető?</h4>
            <CheckCircle className='home-icons mx-auto'/>
            <div className='card-body text-center'>
              <p className='card-text'>Jézus Krisztus tegnap, ma és mindörökké ugyanaz.</p>
              <p className='card-text text-muted'>Zsidókhoz írt levél 13:8</p>
            </div>
          </div>

          <div className='card p-0 col-lg-5'>
            <div className='card-header mb-3 fw-bold text-white'>
              Tudtad, hogy ...
            </div>
            <h4 className='card-title text-center mb-3 ps-2 pe-2'>ma is jó Istennel együtt lenni?</h4>
            <PeopleFill className='home-icons mx-auto' />
            <div className='card-body text-center'>
              <p className='card-text'>... nekem olyan jó Isten közelsége! ...</p>
              <p className='card-text text-muted'>Zsoltárok 76:28</p>
            </div>
          </div>
        </div>

        <div className='row justify-content-around mb-5'>
          <div className='card p-0 col-lg-11'>
            <div className='card-header mb-3 fw-bold text-white'>
              Tudtad, hogy ...
            </div>
            <h4 className='card-title text-center mb-3 ps-2 pe-21'>Ő szeret téged?</h4>
            <HeartFill className='home-icons mx-auto' />
            <div className='card-body text-center'>
              <p className='card-text'>Mert úgy szerette Isten ezt a világot, hogy az ő egyszülött Fiát adta, hogy aki hisz Őbenne, el ne vesszen, hanem örök élete legyen.</p>
              <p className="card-text text-muted">János evangéliuma 3:16</p>
            </div>
          </div>
        </div>

        <div className='row justify-content-around mb-5'>
            <div className='btn-action-container p-0'>
              <Link to={"/oldalak/kapcsolat"} className="btn btn-action d-block d-flex justify-content-between align-items-center">
                Tovább
                <ArrowRight className='arrow-right'/>
              </Link>
            </div>
          </div>

        {/* <div className='text-center mt-5 col-10'>
          <img src="worship.jpg" width="400" alt="Nathan Dumlao https://unsplash.com/photos/MrtzHLp4zVM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" />
        </div> */}
      </div>
    </div>
  )
}
