import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                Task Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                    <Link className='nav-link' to='/contact'>Contact Us</Link>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
