import './sidepanel.scss';
import instagramm from '../../resources/icons/social/instagram.svg';
import telegramm from '../../resources/icons/social/Telegram_vertical.svg';
import github from '../../resources/icons/social/github.svg';



function Sidepanel () {
    return (
        <aside className="sidepanel">
            <div className="sidepanel__text">Социальные сети</div>
            <div className="sidepanel__divider"></div>
            <a href="https://t.me/tisnenkodi" className="sidepanel__link" target='_blank' rel="noreferrer" ><img src={telegramm} className='telegramm' alt="Telegramm"/></a>
            <a href="https://www.instagram.com/dr.tisnenko?igsh=emt5bndxYmhpMGdq" className="sidepanel__link" target='_blank' rel="noreferrer" ><img src={instagramm} alt="Instagramm"/></a>
            <a href="https://github.com/DmitriiTisnenko" className="sidepanel__link" target='_blank' rel="noreferrer" ><img src={github} alt="Github"/></a>
        </aside>
    )
}

export default Sidepanel;