import Logo from "./../../assets/logo/50PX.png";

function Navbar() {
  return (
    <>
      <header className='container-fluid p-0 m-0'>
        <nav className='navbar bg-dark navbar-dark navbar-expand-lg '>
          <section className='container'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item me-3'>
                <i className='bi bi-envelope text-light'></i>
                <small className='ms-2 text-light'>
                  Aljongabrielambasvaldez@gmail.com
                </small>
              </li>
              <li className='nav-item'>
                <i className='bi bi-telephone text-light'></i>
                <small className='ms-2 text-light'>+63-9397179384</small>
              </li>
            </ul>
          </section>
        </nav>

        <nav className='navbar bg-dark navbar-dark navbar-expand-lg'>
          <div className='container'>
            <img src={Logo} alt='' />
            <a className='navbar-brand' href='#'>
              Agav
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    <i className='bi bi-house'></i>
                    <span className='ms-2'>About</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='https://github.com/AljonGabriel'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span className='d-flex align-items-center'>
                      <i className='bi bi-git'></i>
                      <span className='ms-2'>Github</span>
                    </span>
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='bi bi-braces'></i>
                    <small className='ms-2'>Projects</small>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://github.com/AljonGabriel/Inventory_System'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Inventory System
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://github.com/AljonGabriel/Aplaysale'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Aplaysale
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://github.com/AljonGabriel/AiQuee'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Aiquee
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://github.com/AljonGabriel/guessing_game'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Guessing Game
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://github.com/AljonGabriel/Tic-Tac-Toe-Ract'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Tic-Tac-Toe
                      </a>
                    </li>
                  </ul>
                </li>

                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <i className='bi bi-hand-thumbs-up'></i>
                    <small className='ms-2'>Social</small>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.facebook.com/aljon.gabriel.391'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='www.linkedin.com/in/aljon-gabriel-valdez-822901171'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Linked-in
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.youtube.com/channel/UCTgwmp5DAlCWtEJkkXHTRyg'
                        target='_blank'
                        rel='noreferrer'
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <button
                type='button'
                className='btn btn-outline-primary'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Future Plans
              </button>

              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-5' id='exampleModalLabel'>
                        Creating Soon
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      <ul>
                        <li>Inventory System using Mern</li>
                        <li>E-Commerce Website using Mern</li>
                      </ul>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                      <button type='button' className='btn btn-primary'>
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
