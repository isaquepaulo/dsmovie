import {ReactComponent as GithubIcon} from 'assets/img/GitHub.svg'
import './style.css'
function Navbar() {
    return(
        <header className='d-flex align-items-center'>
            <nav className='container'>
                <div className='dsmovie-nav-content d-flex justify-content-between align-items-center'>
                <h1 className='m-0'>DSMovie</h1>
                <a href="https://github.com/isaquepaulo">
                    <div className='d-flex'>
                    <GithubIcon/>
                    <p className='mb-0 mx-3'>/IsaquePaulo</p>
                    </div>
                </a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;