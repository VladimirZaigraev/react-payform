import react, {useState, useEffect} from "react";
import {validationNumber, validationMounth, validationYear, validationCvc, validationName} from "../functions/validation"
import * as apiBank from "../utils/apiBank"

const PaymentForm = () => {
    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState('Поле не заполнено')
    const [number, setNumber] = useState('')
    const [numberDirty, setNumberDirty] = useState(false)
    const [numberError, setNumberError] = useState('Поле не заполнено')
    const [mounth, setMounth] = useState('')
    const [mounthDirty, setMounthDirty] = useState(false)
    const [mounthError, setMounthError] = useState('Поле не заполнено')
    const [year, setYear] = useState('')
    const [yearDirty, setYearDirty] = useState(false)
    const [yearError, setYearError] = useState('Поле не заполнено')
    const [cvc, setCvc] = useState('')
    const [cvcDirty, setCvcDirty] = useState(false)
    const [cvcError, setCvcError] = useState('Поле не заполнено');
    const [formValid, setFormValid] = useState(false)
    
    
    useEffect(() => {
    if (nameError || numberError || mounthError || yearError || cvcError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, numberError, mounthError, yearError, cvcError]);


    const blurHandler = (event) => {
        switch (event.target.name) {
            case 'card-number':
                setNumberDirty(true)
                break
            case 'card-mounth':
                setMounthDirty(true)
                break
            case 'card-year':
                setYearDirty(true)
                break
            case 'card-cvc':
                setCvcDirty(true)
                break
            case 'card-name':
                setNameDirty(true)
                break
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {

            case 'card-number':
                const numberCard = value.replace(/[^\d]/g, '').substring(0,24);
                const cardNumber = numberCard !== '' ? numberCard.match(/.{1,4}/g).join(' ') : '';
                // event.target.value = numberCard
                console.log(cardNumber)
                setNumber(cardNumber);
                validationNumber(cardNumber, setNumberError)
                break
            case 'card-mounth':
                setMounth(value);
                validationMounth(value, setMounthError)
                break
            case 'card-year':
                setYear(value);
                validationYear(value, setYearError)
                break
            case 'card-cvc':
                const cardCvc = value.replace(/\D/g,'').substr(0,3)
        //      event.target.value = numbCvc;
        //      console.log(event.target.value)
                setCvc(cardCvc);
                validationCvc(cardCvc, setCvcError);
                break
            case 'card-name':
                const nameCard = value.replace(/[^a-z A-Z]/g,'')
                //event.target.value = nameChange
                setName(nameCard);
                validationName(nameCard, setNameError);
                break
        }
    }

    

    //     if (event.target.value.length > 6) {
    //         let cardNumb = event.target.value.replace(/\s/g, '').slice(0,6);
    //         apiBank.informationRequest(cardNumb)
    //         .then((res) => {
    //             console.log(res.scheme)
    //         })
    //         .catch((err) => apiBank.showError(err))
    //     }
        

    return (
        <div className="payment">
            <h3 className="payment__tile">Оплата банковской картой</h3>
            <div className="payment__card card">
                <div className="card__image">               
                    <div className="card__chip"></div>
                    <img src="./img/logo.svg" alt="bank-logo" className="card__bank-logo"/>
                </div>
                <p className="card__number">{number.length > 0 ? number : '0000  0000  0000  0000'}</p>
                <div className="card__info">
                    <p className="card__name">{name.length > 0 ? name : 'IVAN IVANOV'}</p>
                    <div className="card__valid-thru valid-thru">
                        <p className="valid-thru__text">MOUNTH/YEAR</p>
                        <div className="valid-thru__date">{mounth.length > 0 ? mounth : '00'}/{year.length > 0 ? year : '00'}</div>
                    </div>
                </div>
            </div>
            <form action="#" className="payment__form" onSubmit={handleSubmit}>
                <div className="payment__grid grid">
                    <div className="payment__wrapper grid__number">
                        <label className="payment__label" htmlFor="card-number">Номер карты</label>
                        <input 
                            value={number || ""} 
                            onBlur={event => blurHandler(event)} onChange={handleChange} 
                            type="text" 
                            className={`payment__input ${numberError && numberDirty ? "payment__error" : ""}`} id="card-number" 
                            name="card-number" 
                            placeholder="0000  0000  0000  0000" required minLength="13" 
                            maxLength="23" 
                            autoComplete="off"/>
                        <span className="payment__input-erorr" id="card-number-error">{numberError && numberDirty ?  numberError : ""}</span>
                    </div>
                    <div className="payment__wrapper gtid__mounth">
                        <label className="payment__label" htmlFor="card-mounth">Месяц</label>
                         <select className={`payment__select ${mounthError && mounthDirty ? "payment__error" : ""}`} onBlur={event => blurHandler(event)} id="card-mounth" name="card-mounth" value={mounth || ""} onChange={handleChange}>
                            <option defaultValue></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                         </select>
                         {mounthError && mounthDirty ? <span className="payment__input-erorr" id="input-year-error">{mounthError}</span> : ""}
                    </div>
                    <div className="payment__wrapper grid__year">
                        <label className="payment__label" htmlFor="card-year">Год</label>
                        <select 
                            className={`payment__select ${yearError && yearDirty ? "payment__error" : ""}`} 
                            onBlur={event => blurHandler(event)} name="card-year" 
                            id="card-year" 
                            value={year || ""} 
                            onChange={handleChange}>
                            <option defaultValue></option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                        </select>
                        {yearError && yearDirty ? <span className="payment__input-erorr" id="input-year-error">{yearError}</span> : ""}
                    </div>
                    <div className="payment__wrapper grid__cvc">
                        <label className="payment__label" htmlFor="card-cvc">Код</label>
                        <input 
                            type="password" 
                            className={`payment__input payment__cvc ${cvcError && cvcDirty ? "payment__error" : ""}`} 
                            value={cvc || ""} 
                            onBlur={event => blurHandler(event)} 
                            onChange={handleChange} 
                            id="card-cvc" 
                            name="card-cvc" 
                            placeholder="***" 
                            required 
                            minLength="3" 
                            maxLength="3" 
                            autoComplete="off"/>
                        {cvcError && cvcDirty ? <span className="payment__input-erorr" id="input-cvc-error">{cvcError}</span> : ""}
                     </div>
                     <div className="payment__wrapper grid__name">  
                        <label className="payment__label" htmlFor="card-name">Владелец карты</label>
                        <input 
                            className={`payment__input ${nameError && nameDirty ? "payment__error" : ""}`} 
                            type="text" 
                            value={name || ""} 
                            onBlur={event => blurHandler(event)} 
                            onChange={handleChange} 
                            id="card-name" 
                            name="card-name" 
                            placeholder="ИМЯ И ФАМИЛИЯ" 
                            required 
                            minLength="4" 
                            maxLength="20" 
                            autoComplete="off"/>
                        {nameError && nameDirty ? 
                        <span className="payment__input-erorr" id="input-name-error">{nameError}</span> : ""}
                    </div>
                    <button 
                        className={`grid__button payment__button ${formValid ? 'payment__button-active' : 'payment__button-disabled'}`} type="submit" 
                        name="paymentButton"
                        disabled={!formValid}
                        >Оплатить
                    </button>
                </div>       
            </form>
        </div>
    )
}

export default PaymentForm;