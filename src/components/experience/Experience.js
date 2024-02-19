import './experience.scss';
import university from '../../resources/icons/experience/university.svg';
import courses from '../../resources/icons/experience/courses.svg';
import developer from '../../resources/icons/experience/developer.svg';
import designer from '../../resources/icons/experience/designer.svg';

function Experience () {
    return (
        <div className="experience">
            <div className="title title_fz16 subtitle-center">Опыт</div>
            <div className="title title-center">Чем я буду полезен</div>
            <div className="divider"></div>
            <div className="experience__wrapper">
                <div className="experience__column">
                    <h3 className="title title_fz20">Мои сильные стороны</h3>
                    <ul>
                        <li>
                            <div className="experience__item">
                                <div className="experience__item-head">
                                    <div className="experience__item-icon"><img src={courses} alt="university"/></div>
                                    <h4 className="title title_fz14">Готовность учиться</h4>
                                    <div className="experience__item-subtitle">Да-да, даже после стольки лет)</div>
                                </div>
                                <div className="experience__item-body">
                                    Учился 8 лет в мед. институте, постоянные обучения при работе врачом, два года изучения web-разработки. Теперь обучение чему-то новому воспринимается как полезная привычка, а не обходимость) 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="experience__item">
                                <div className="experience__item-head">
                                    <div className="experience__item-icon"><img src={university} alt="courses"/></div>
                                    <h4 className="title title_fz14">Сильные soft-скилы</h4>
                                    <div className="experience__item-subtitle">Ну а куда же без них)</div>
                                </div>
                                <div className="experience__item-body">
                                    Хорошие комнуникативные навыки, всегда помогали мне в любой отрасли. Работа врачом только усилила их, а увлечение психологией, как хобби, помогло закрепить и упорядочить. 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="experience__item">
                                <div className="experience__item-head">
                                    <div className="experience__item-icon"><img src={designer} alt="courses"/></div>
                                    <h4 className="title title_fz14">Хорошие понимание user-friendly подхода</h4>
                                    <div className="experience__item-subtitle">Могу учавствовать в разработке дизайна проекта</div>
                                </div>
                                <div className="experience__item-body">
                                    Достаточно часто приходится сталкиваться с неудобством интерфейса сайтом и его мобильной версии. И порой несколько media запросов или небольшие изменения верстки могут кардинально улучшить user experience. У меня достаточно часто появляются идеи как можно усовершенствовать посещяемый мной сайт и тем самым улучшить отношение пользователей к продукту и повыстить интуитивность пользования.
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="experience__item">
                                <div className="experience__item-head">
                                    <div className="experience__item-icon"><img src={courses} alt="university"/></div>
                                    <h4 className="title title_fz14">Владение английский языком</h4>
                                    <div className="experience__item-subtitle">Уровень Pre-Intermediate/Intermediate</div>
                                </div>
                                <div className="experience__item-body">
                                    Этот навык позволяет читать техническую документацию на английском, в т.ч. для React, т.к. рускоязычные источники уже не обновляются( Это позволяет получать новую информацию для максимально эффективного применения технологий.  
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                <div className="experience__column">
                    <h3 className="title title_fz20">Опыт работы</h3>
                    <ul>
                        <li>
                            <div className="experience__item">
                                <div className="experience__item-head">
                                    <div className="experience__item-icon"><img src={developer} alt="developer"/></div>
                                    <h4 className="title title_fz14">Хоть и не большой, но все же есть</h4>
                                    <div className="experience__item-subtitle">Частично релевантный)</div>
                                </div>
                                <div className="experience__item-body">
                                    После окнчания курсов по JS и возвращению в Тирасполь в 2023, месяц работал на предприимчивых ребят, которые находили различиные заказы и передавали разработчикам на выполнение. Занимался изменениями структуры сайта, переверстыванием, добавлением фич типа слайдеров, полосы прокрутки в мобильной версии (пожелание заказчика) и т.д. на CMS WordPress, Joomla и Битрикс. Достаточно интересный опыт, который так же подтолкнул меня к изучению React, чтобы иметь доступ к более интересным и сложным задачам и проектам. <br /> <br />Конечно не могу не упомянуть свой опыт работы в медицине, который может оказаться невероятным плюсом при работе с health-tech проектами.
                                </div>
                            </div>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}

export default Experience;