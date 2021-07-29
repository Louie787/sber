import './styles.css';

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a
            href="#"
            class="header__logo"
            style={{backgroundImage: 'url(./assets/logo/logo.png)'}}
          ></a>
          
        </div>
      </div>
    </header>
  )
}

export default Header
