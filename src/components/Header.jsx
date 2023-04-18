import "./Header.css"

import Netflix_logo from '../assets/Netflix-logo.png'

export function Header({ black }){


  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="">
          <img src={Netflix_logo} alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="profile" />
        </a>
      </div>
    </header>
  )
  }