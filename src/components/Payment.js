import react, {useState, useEffect} from "react";
import {Switch, Route} from 'react-router-dom';
import {validationNumber, validationMounth, validationYear, validationCvc, validationName} from "../functions/validation"
import * as apiBank from "../utils/apiBank"
import cardInfo from "../functions/cardInfo"
import Form from "./Form";
import PayStatus from "./PayStatus";
import Card from "./Card";

const Payment = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const [mounth, setMounth] = useState('')
    const [year, setYear] = useState('')
    const [cvc, setCvc] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [numberDirty, setNumberDirty] = useState(false)
    const [mounthDirty, setMounthDirty] = useState(false)
    const [yearDirty, setYearDirty] = useState(false)
    const [cvcDirty, setCvcDirty] = useState(false)
    
    const [formValid, setFormValid] = useState(false)

    const [nameError, setNameError] = useState('Поле не заполнено')
    const [numberError, setNumberError] = useState('Поле не заполнено')
    const [mounthError, setMounthError] = useState('Поле не заполнено')
    const [yearError, setYearError] = useState('Поле не заполнено')
    const [cvcError, setCvcError] = useState('Поле не заполнено');

    const [cardBankLogo, setCardBankLogo] = useState('')
    const [cardScheme, setCardScheme] = useState('')
    const [cardBankInfo, setCardBankInfo] = useState('')

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

    useEffect(() => {
        if (nameError || numberError || mounthError || yearError || cvcError) {
        setFormValid(false);
        } else {
        setFormValid(true);
        }
    }, [nameError, numberError, mounthError, yearError, cvcError]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'card-number':
                const numberCard = value.replace(/[^\d]/g, '').substring(0,24);
                const cardNumber = numberCard !== '' ? numberCard.match(/.{1,4}/g).join(' ') : '';
                console.log(cardNumber)
                setNumber(cardNumber);
                validationNumber(cardNumber, setNumberError)
                
                if (cardNumber.length > 6) {
                const cardNumbSlice = cardNumber.replace(/\s/g, '').slice(0,6);
                apiBank.informationRequest(cardNumbSlice)
                    .then((res) => {
                    cardInfo(res, setCardBankLogo, setCardScheme, setCardBankInfo)
                    })
                    .catch((err) => {
                        apiBank.showError(err)
                    })
                } else {
                    setCardBankLogo('')
                    setCardScheme('')
                    setCardBankInfo('')
                }
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
                setCvc(cardCvc);
                validationCvc(cardCvc, setCvcError);
                break
            case 'card-name':
                const nameCard = value.replace(/[^a-z A-Z]/g,'')
                setName(nameCard);
                validationName(nameCard, setNameError);
                break
        }
    }

    return (
        <main className="main section">
            <div className="payment">
                <h3 className="payment__tile">Оплата банковской картой</h3>
                    <Card
                        name={name}
                        number={number}
                        mounth={mounth}
                        year={year}
                        cardBankLogo ={cardBankLogo} 
                        cardScheme = {cardScheme}
                        cardBankInfo ={cardBankInfo}
                        />
                <div className="payment__wrapper">
                    <Switch>
                    <Route exact path="/">
                        <Form
                        name={name}
                        number={number}
                        mounth={mounth}
                        year={year}
                        cvc={cvc}
                        handleChange={handleChange}
                        blurHandler={blurHandler}
                        handleSubmit={handleSubmit}
                        numberError={numberError}
                        numberDirty={numberDirty}
                        mounthError={mounthError}
                        yearError={yearError}
                        yearDirty={yearDirty}
                        mounthDirty={mounthDirty}
                        cvcError={cvcError}
                        cvcDirty={cvcDirty}
                        nameDirty={nameDirty}
                        nameError={nameError}
                        formValid={formValid}
                        />
                    </Route>
                    <Route path="/check">
                        <PayStatus/>
                    </Route> 
                </Switch>
                </div>
            </div>
        </main>
    )
}

export default Payment;