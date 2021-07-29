import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a
            href="#"
            className="header__logo"
            style={{backgroundImage: 'url(./assets/logo/logo.png)'}}
          ></a>
          
        </div>
      </div>
    </header>
  )
}

export default Header
