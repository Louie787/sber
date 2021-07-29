import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <a
            href="#"
            className="footer__logo"
            style={{backgroundImage: 'url(./assets/logo/logo.png)'}}
          ></a>
          </div>
          <div className="footer__content">
            <div className="footer__content-adress">2021 ПАО Сбербанк. 117 997, Россия, Москва, ул. Вавилова, д. 19</div>
            <a className="footer__content-email" href="mailto:SberBusinessLive@sberbank.ru">SberBusinessLive@sberbank.ru</a>
          
          <div className="footer__phones">
            <p><a href="tel:0321">0321</a><span> — Бесплатно с мобильных телефонов в России для клиента Билайн, Мегафон, МТС, СберМобайл, Tele 2, Yota</span></p>
            <p><a href="tel:88005555777">8 800 5555 777</a><span> — Бесплатно с городских телефонов на территории России</span></p>
            <p><a href="tel:+74956655777">+7 495 6655 777</a><span> — Звонки из-за рубежа (оплата согласно тарифу)</span></p>
          </div>

          <div className="footer__content-license">Генеральная лицензия на осуществление банковских операций от 11 августа 2015 года. Регистрационный номер — 1481.</div>
          <a className="footer__content-policy" href="https://sberbusiness.live/privacy" target="_blank">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
