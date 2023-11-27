import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg ps-3 pe-3 ps-sm-5 pe-sm-5">
            <Link className="navbar-brand fw-bold" to={"/"}><span className='text-white'>E</span> <span className='navbar-text'>Gyülekezet</span></Link>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link p-0 m-2">
                            Isten hozott!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/oldalak/kozosseg"} className="nav-link p-0 m-2">
                            Állandó alklamaink
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/oldalak/esemenyek"} className="nav-link p-0 m-2">
                            Események
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/oldalak/rolunk"} className="nav-link p-0 m-2">
                            Rólunk
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/oldalak/kapcsolat"} className="nav-link p-0 m-2">
                            Kapcsolat
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
