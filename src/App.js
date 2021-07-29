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
        class="postcard"
        style={{backgroundImage: 'url(./assets/bg/bg-postcard.png)'}}
      >
        <div class="container">
          <div class="postcard__inner">
            <div class="postcard__content">
              <h1 class="postcard__title">Мой папа — <span>инкассатор</span></h1>
              <div class="postcard__wrap">
                <a class="postcard__btn--down" href="#vid"></a>
                <p class="postcard__text">
                  А его машина похожа на самолёт! Смотрите, что думают дети о
                  работе инкассатора
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="videos">
        <a href="" name="vid"></a>
        <div class="container">
          <div class="videos__inner">
            <h3 class="videos__title">
              <span>Кто такие инкассаторы? </span>
              <span>Чем они занимаются и куда ездят целыми днями?</span>
            </h3>
            <p class="videos__text">
              Мы спросили об этом детей самих инкассаторов. Что получилось —
              смотрите в наших роликах.
            </p>
            <div class="videos__gallery">
              <div class="videos__item">
                <div class="videos__item-img" onClick={() => setPopupIsVisible(true)}>
                  <img src="./assets/content/artem.png" alt="" />
                  <div class="btn-play"></div>
                </div>
                <div class="videos__item-name">Артем</div>
                <div class="videos__item-text">
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
              <div class="videos__item">
                <div class="videos__item-img" onClick={() => setPopupIsVisible(false)}>
                  <img src="./assets/content/lera.png" alt="" />
                  <div class="btn-play" ></div>
                </div>
                <div class="videos__item-name">Лера</div>
                <div class="videos__item-text">
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
              <div class="videos__item">
                <div class="videos__item-img" onClick={() => setPopupIsVisible(true)}>
                  <img src="./assets/content/mark.png" alt="" />
                  <div class="btn-play" ></div>
                </div>
                <div class="videos__item-name">Марк</div>
                <div class="videos__item-text">
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

      <section class="collection">
        <div class="collection__inner">
          <div class="collection__inner--bg" style={{backgroundImage: 'url(./assets/bg/bg-collection.png)'}}></div>
          <div class="collection__inner--bg-mobile" style={{backgroundImage: 'url(./assets/bg/bg-collection-mobile.png)'}}></div>
            <div class="collection__content">
              <h3 class="collection__title">
                Инкассация — <span>это удобно!</span>
              </h3>
              <p class="collection__slogan">
                Подключайте инкассацию от СберБизнеса и будьте уверены, что деньги
                попадут на счёт.
              </p>
              <p class="collection__text">
                Зачисляем средства в любые банки без скрытых комиссий и платежей.
                Приезжаем в удобное для вас время
              </p>
              <a class="collection__btn--link" href="https://sber.me/?p=Kpb4x">Подробности</a>
            </div>
        </div>
      </section>

    <section class="vacancies">
        <div class="container">
          <div class="vacancies__inner">
            <div class="vacancies__inner--bg" style={{backgroundImage: 'url(./assets/bg/bg-vacancies.png)'}}></div>
            <div class="vacancies__content">
              <div class="vacancies__text">
                Будьте тем, кем дети мечтают стать <span>— работайте вместе с нами!</span>
              </div>
              <a class="vacancies__btn--link" href="https://sber.me/?p=DxtDz">Посмотреть вакансии</a>
            </div>
          </div>
        </div>
      </section>

      <section class="social">
        <div class="container">
          <div class="social__inner">
            <div class="social__slogan">
              Больше интересного об инкассации и не только — в наших соцсетях!
            </div>
            <ul class="social__icons">
              <li class="social__icons-item" id="social__icons-facebook"><a class="social__icons-link" href="https://sber.me/?p=Prvbc" style={{backgroundImage: 'url(./assets/icons/social-icons/facebook.svg)'}}></a></li>
              <li class="social__icons-item" id="social__icons-vk"><a class="social__icons-link" href="https://sber.me/?p=pqGMx" style={{backgroundImage: 'url(./assets/icons/social-icons/vkontakte.svg)'}}></a></li>
              <li class="social__icons-item" id="social__icons-instagram"><a class="social__icons-link" href="https://sber.me/?p=TmGRM" style={{backgroundImage: 'url(./assets/icons/social-icons/instagram.svg)'}}></a></li>
              <li class="social__icons-item" id="social__icons-youtube"><a class="social__icons-link" href="https://sber.me/?p=1QhT6" style={{backgroundImage: 'url(./assets/icons/social-icons/youtube.svg)'}}></a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
