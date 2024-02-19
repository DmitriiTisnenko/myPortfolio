import './promo.scss'
import photo from '../../resources/imgs/photo_cafe.jpg'

function Promo () {
    return (
        <div className='promo'>
            <div className="title title_fz16 promo__subtitle">Меня зовут Дмитрий Тисненко</div>
            <h1 className="title title_fz48 promo__title">Я начинающий web-разработчик</h1>
            <div className="promo__btns">
                <a href="https://github.com/DmitriiTisnenko" target='_blank' rel="noreferrer" className="promo__link btn">Мой github</a>
                <a href="#about" className="promo__link">Про меня</a>
            </div>
            <img src={photo} alt="photoWithDog" className="promo_img" />
        </div>
    )
}

export default Promo;