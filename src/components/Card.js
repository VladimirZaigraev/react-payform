import React from "react";
import cardImages from "../functions/cardInfo"


const Card = (props) => {
  const name = props.name;
  const number = props.number;
  const mounth = props.mounth;
  const year = props.year;
  const cardBankLogo = props.cardBankLogo; 
  const cardScheme = props.cardScheme;
  const cardBankInfo = props.cardBankInfo;

   return (
            <div className="payment__card card">
                <div className="card__image">               
                    <div className="card__chip"></div>
                    {cardBankLogo === '' ? <p className="card__bank-info">{cardBankInfo}</p> : <div alt="bank-logo" className="card__bank-logo" style={{ backgroundImage: `url('${cardBankLogo}')` }}></div>}

                </div>
                <p className="card__number">{number.length > 0 ? number : '0000  0000  0000  0000'}</p>
                <div className="card__valid-thru valid-thru">
                        <p className="valid-thru__text">MOUNTH/YEAR</p>
                        <div className="valid-thru__date">{mounth.length > 0 ? mounth : '00'}/{year.length > 0 ? year : '00'}</div>
                    </div>
                <div className="card__info">
                    <p className="card__name">{name.length > 0 ? name : 'IVAN IVANOV'}</p>
                    <div  className="card__scheme"  style={{ backgroundImage: `url('${cardScheme}')` }}></div>
                </div>
            </div>     
   )
}
export default Card;