import './about.scss'
import photo from '../../resources/imgs/photo_with_dog.jpg'
import aboutIcon1 from "../../resources/icons/about_me/web_development.svg"
import aboutIcon2 from "../../resources/icons/about_me/mobile_dev.svg"
import aboutIcon3 from "../../resources/icons/about_me/design.svg"

function About () {
        return (
            <div className="about" id='about'>
                <div className="about__wrapper">
                    <div className="about__photo">
                            <img src={photo} alt="about_photo"/>
                    </div>

                    <div className="about__descr">
                        <div className="title title_fz16 about__aboutme">Про меня</div>
                        <div className="title about__subtitle">Привет, меня зовут Дима</div>
                        <div className="divider divider_left"></div>
                        <div className="about__text">
                            Я родился и на данный момент проживаю в Тирасполе. Долгое время учился, жил и работал в нескольких городах России. Проработав 5 лет врачом, решил что хочу кардинально поменять свою жизнь и воодушевившись рассказами моих друзей и примерами знакомых, решил стать web разработчиком. С 2022 года начался мой челендж, который и длится по настоящее время.
                        </div>
                    </div>

                    <div className="about__skills">
                        <div className="about__skill">
                            <div className="about__skill-circle">
                                <img src={aboutIcon1} alt="web_dev"/>
                            </div>
                            <div className="about__skill-item">
                                <div className="title title_fz14">Верстка</div>
                                <div className="about__skill-text">
                                    Следуя классике с апреля 2022 года по июль 2022 я прошел курс по верстке – HTML5, CSS3, адаптивная верстка по макетам, работал в основном с Figma.
                                </div>
                            </div>
                        </div>
                        <div className="about__skill">
                            <div className="about__skill-circle">
                                <img src={aboutIcon3} alt="mobile_dev"/>
                            </div>
                            <div className="about__skill-item">
                                <div className="title title_fz14">Куда же без JS) </div>
                                <div className="about__skill-text">
                                    C июля 2022 по май 2023 изучал JavaScrypt. Что позволило не просто верстать, а уже стать полноценным web-разработчиком.
                                </div>
                            </div>
                        </div>
                        <div className="about__skill">
                            <div className="about__skill-circle">
                                <img src={aboutIcon2} alt="design"/>
                            </div>
                            <div className="about__skill-item">
                                <div className="title title_fz14">React</div>
                                <div className="about__skill-text">
                                    Осознав, что этих навыков не достататочно для современного рынка, я взялся за изучение React, чем и продолжаю заниматься в настоящее время. На данный момент моя цель, научиться разрабатывать мобильные приложения)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default About;