import { useState } from 'react';
import './contacts.scss';
import photo from '../../resources/imgs/photo_glasses.jpg';

function Contacts () {

    const [dataPosted, setPosted] = useState(false);
    const [error, setError] = useState(false);


    const closeModal = () => {
        setPosted(false);
        setError(false);
    }

    const onSetError = () => {
        setError(true);
    }

    const onPostData = (e, form) => {
        e.preventDefault();

        let formData = new FormData(form);

        fetch('../../mailer/smart.php', {
            method:'POST',
            body: formData
        })
        .then(setPosted(true))
        .catch(onSetError)
        .finally(form.reset())
    }

    const errorMessage = error ? <ErrorModal closeModal={closeModal}/> : null;
    const thanksModal = dataPosted ? <ThanksModal closeModal={closeModal}/> : null;

    return (
        <div className="contacts modal">
            {errorMessage}
            {thanksModal}
            <div className="contacts__wrapper">
                <div className="contacts__photo">
                    <img src={photo} alt="mountainPhoto"/>
                </div>

                <div className="contacts__descr">
                    <div className="title title_fz16">Контакты</div>
                    <div className="title contacts__title">Свяжитесь со мной</div>
                    <div className="divider divider_left"></div>
                    <div className="title title_fz14 contacts__text">
                        Любым удобным для вас способом:
                    </div>

                    <div className="contacts__social">
                        <a href="https://t.me/tisnenkodi" target='_blank' rel="noreferrer" className="contacts__link">
                            <svg data-name="telegramm" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.9959 30.8139C23.2737 30.8139 29.9806 24.0976 29.9806 15.8083C29.9806 7.51898 23.2737 0.802734 14.9959 0.802734C6.71812 0.802734 0.0112305 7.51898 0.0112305 15.8083C0.0112305 24.0976 6.71812 30.8139 14.9959 30.8139ZM6.86796 15.4832L21.3157 9.90487C21.9862 9.66228 22.5719 10.0687 22.3546 11.0841L22.3559 11.0828L19.8959 22.6884C19.7136 23.5112 19.2253 23.7113 18.5423 23.3236L14.7961 20.5588L12.9892 22.302C12.7894 22.5021 12.6208 22.6709 12.2337 22.6709L12.4997 18.8532L19.4426 12.5721C19.7448 12.3058 19.3752 12.1557 18.9768 12.4208L10.3969 17.8303L6.69814 16.6749C5.89521 16.4198 5.87773 15.8708 6.86796 15.4832V15.4832Z" fill="black"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/dr.tisnenko?igsh=emt5bndxYmhpMGdq" target='_blank' rel="noreferrer" className="contacts__link">
                            <svg data-name="instagramm" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960143 10.1808L0.960144 21.435C0.960144 26.6138 5.15398 30.8135 10.3256 30.8135L21.5641 30.8135C26.7356 30.8135 30.9295 26.6138 30.9295 21.435L30.9295 10.1808C30.9295 5.00201 26.7356 0.802319 21.5641 0.80232L10.3256 0.80232C5.15398 0.80232 0.960143 5.00201 0.960143 10.1808ZM21.5641 3.61587C25.1791 3.61587 28.1198 6.56071 28.1198 10.1808L28.1198 21.435C28.1198 25.0551 25.1791 27.9999 21.5641 27.9999L10.3256 27.9999C6.71051 27.9999 3.76977 25.0551 3.76977 21.435L3.76977 10.1808C3.76977 6.56071 6.71051 3.61587 10.3256 3.61587L21.5641 3.61587Z" fill="black"/>
                                <path d="M8.45251 15.8078C8.45251 19.9512 11.8072 23.3105 15.9448 23.3105C20.0825 23.3105 23.4372 19.9512 23.4372 15.8078C23.4372 11.6643 20.0825 8.30497 15.9448 8.30497C11.8072 8.30497 8.45251 11.6643 8.45251 15.8078ZM20.6276 15.8078C20.6276 18.3925 18.526 20.497 15.9448 20.497C13.3619 20.497 11.2621 18.3925 11.2621 15.8078C11.2621 13.223 13.3619 11.1185 15.9448 11.1185C18.526 11.1185 20.6276 13.223 20.6276 15.8078Z" fill="black"/>
                                <path d="M8.88891 7.74281C8.88891 7.19087 8.44193 6.74344 7.89056 6.74344C7.33919 6.74344 6.89221 7.19087 6.89221 7.74281C6.89221 8.29475 7.33919 8.74219 7.89056 8.74219C8.44193 8.74219 8.88891 8.29475 8.88891 7.74281Z" fill="black"/>
                            </svg>                            
                        </a>
                    </div>
                    <div className="title title_fz14 contacts__text">
                        Или оставьте ваши данные и я сам вам напишу:
                    </div>
                    <form action="#" onSubmit={(e) => onPostData(e, e.target)} className="contacts__form">

                        <div className="contacts__input">
                            <label htmlFor="name">Ваше имя</label>
                            <input required name="name" id="name" type="text"/>
                        </div>

                        <div className="contacts__input">
                            <label htmlFor="phone">Ваш телефон</label>
                            <input required name="phone" id="phone" type="tel" placeholder="0-77"/>
                        </div>

                        <div className="contacts__textarea">
                            <label htmlFor="text">Ваше сообщение</label>
                            <textarea name="text" id="text" placeholder="Тут вы можете написать информацию которую хотите мне сообщить."></textarea>
                        </div>
                        
                        <div className="contacts__triggers">
                            <button  className="btn">Отправить</button>
                            <div className="contacts__policy">
                                <input required type="checkbox"/>
                                <span>Я даю согласие на обработку персональных данных и соглашаюсь c 
                                    <a href="/privacy.html" className="link" target="_blank"> политикой конфиденциальности</a>   </span>                            
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

function ThanksModal (props) {
    return (
        <>
            <div className="modal__overlay">
                <div className="modal_thanks" id="thanks"> 
                    <div onClick={props.closeModal} className="modal__close">
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="modal__title">Спасибо за вашу заявку!</div>
                    <div className="modal__subtitle">Я свяжусь с вами <br/> в течение нескольких часов!</div>
                </div>
            </div>
        </>
    )
} 

function ErrorModal (props) {
    return (
        <>
            <div className="modal__overlay" id="error">
                <div className="modal_thanks"> 
                    <div onClick={props.closeModal} className="modal__close">
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="modal__title">Что-то пошло не так, попробуйте еще раз!</div>
                </div>
            </div>
        </>
    )
} 

export default Contacts;