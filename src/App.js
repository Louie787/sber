import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/normalize.css';
import './styles/reset.css';
import './App.css';
import './styles/media.css';

function App() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);

  return (
    <>      
      <Header />
      <section
        className="postcard"
        style={{backgroundImage: 'url(./assets/bg/bg-postcard.png)'}}
      >
        <div className="container">
          <div className="postcard__inner">
            <div className="postcard__content">
              <h1 className="postcard__title">Мой папа — <span>инкассатор</span></h1>
              <div className="postcard__wrap">
                <a className="postcard__btn--down" href="#vid"></a>
                <p className="postcard__text">
                  А его машина похожа на самолёт! Смотрите, что думают дети о
                  работе инкассатора
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="videos">
        <a href="" name="vid"></a>
        <div className="container">
          <div className="videos__inner">
            <h3 className="videos__title">
              <span>Кто такие инкассаторы? </span>
              <span>Чем они занимаются и куда ездят целыми днями?</span>
            </h3>
            <p className="videos__text">
              Мы спросили об этом детей самих инкассаторов. Что получилось —
              смотрите в наших роликах.
            </p>
            <div className="videos__gallery">
              <div className="videos__item">
                <div className="videos__item-img" onClick={() => setPopupIsVisible(true)}>
                  <img src="./assets/content/artem.png" alt="" />
                  <div className="btn-play"></div>
                </div>
                <div className="videos__item-name">Артем</div>
                <div className="videos__item-text">
                  Инкассатор — необычный человек. Артём это точно знает! Ведь его
                  папа работает на машине, похожей на самолёт, и проводит
                  инкассацию нажатием одной кнопки.
                </div>
                { popupIsVisible && <div className="popup" onClick={() => setPopupIsVisible(false)}>
                  <div className="popup__inner">
                    <iframe src="https://player.vimeo.com/video/580789406?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>}
              </div>
              <div className="videos__item">
                <div className="videos__item-img" onClick={() => setPopupIsVisible(false)}>
                  <img src="./assets/content/lera.png" alt="" />
                  <div className="btn-play" ></div>
                </div>
                <div className="videos__item-name">Лера</div>
                <div className="videos__item-text">
                  Инкассаторов можно встретить в разных магазинах. У них есть
                  непростые ящики, которые умеют разукрашивать. А у одного из
                  инкассаторов есть даже торт — Лера же просила!
                </div>
                { popupIsVisible && <div className="popup" onClick={() => setPopupIsVisible(false)}>
                  <div className="popup__inner">
                    <iframe src="https://player.vimeo.com/video/580789598?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>}
              </div>
              <div className="videos__item">
                <div className="videos__item-img" onClick={() => setPopupIsVisible(true)}>
                  <img src="./assets/content/mark.png" alt="" />
                  <div className="btn-play" ></div>
                </div>
                <div className="videos__item-name">Марк</div>
                <div className="videos__item-text">
                  Быстрее гепарда, супергероев и даже ветра! Марк уверен:
                  инкассатора победить не просто. Особенно если это его папа.
                </div>
                { popupIsVisible && <div className="popup" onClick={() => setPopupIsVisible(false)}>
                  <div className="popup__inner">
                    <iframe src="https://player.vimeo.com/video/580790869?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="collection__inner">
          <div className="collection__inner--bg" style={{backgroundImage: 'url(./assets/bg/bg-collection.png)'}}></div>
          <div className="collection__inner--bg-mobile" style={{backgroundImage: 'url(./assets/bg/bg-collection-mobile.png)'}}></div>
            <div className="collection__content">
              <h3 className="collection__title">
                Инкассация — <span>это удобно!</span>
              </h3>
              <p className="collection__slogan">
                Подключайте инкассацию от СберБизнеса и будьте уверены, что деньги
                попадут на счёт.
              </p>
              <p className="collection__text">
                Зачисляем средства в любые банки без скрытых комиссий и платежей.
                Приезжаем в удобное для вас время
              </p>
              <a className="collection__btn--link" href="https://sber.me/?p=Kpb4x">Подробности</a>
            </div>
        </div>
      </section>

    <section className="vacancies">
        <div className="container">
          <div className="vacancies__inner">
            <div className="vacancies__inner--bg" style={{backgroundImage: 'url(./assets/bg/bg-vacancies.png)'}}></div>
            <div className="vacancies__content">
              <div className="vacancies__text">
                Будьте тем, кем дети мечтают стать <span>— работайте вместе с нами!</span>
              </div>
              <a className="vacancies__btn--link" href="https://sber.me/?p=DxtDz">Посмотреть вакансии</a>
            </div>
          </div>
        </div>
      </section>

      <section className="social">
        <div className="container">
          <div className="social__inner">
            <div className="social__slogan">
              Больше интересного об инкассации и не только — в наших соцсетях!
            </div>
            <ul className="social__icons">
              <li className="social__icons-item" id="social__icons-facebook"><a className="social__icons-link" href="https://sber.me/?p=Prvbc" style={{backgroundImage: 'url(./assets/icons/social-icons/facebook.svg)'}}></a></li>
              <li className="social__icons-item" id="social__icons-vk"><a className="social__icons-link" href="https://sber.me/?p=pqGMx" style={{backgroundImage: 'url(./assets/icons/social-icons/vkontakte.svg)'}}></a></li>
              <li className="social__icons-item" id="social__icons-instagram"><a className="social__icons-link" href="https://sber.me/?p=TmGRM" style={{backgroundImage: 'url(./assets/icons/social-icons/instagram.svg)'}}></a></li>
              <li className="social__icons-item" id="social__icons-youtube"><a className="social__icons-link" href="https://sber.me/?p=1QhT6" style={{backgroundImage: 'url(./assets/icons/social-icons/youtube.svg)'}}></a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
