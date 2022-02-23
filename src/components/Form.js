import React from "react";
import {Link } from 'react-router-dom';

const Form = (props) => {
  const name = props.name;
  const number = props.number;
  const mounth = props.mounth;
  const year = props.year;
  const cvc = props.cvc;
  const handleChange = props.handleChange;
  const blurHandler = props.blurHandler;
  const numberError = props.numberError;
  const numberDirty = props.numberDirty;
  const mounthError = props.mounthError;
  const mounthDirty = props.mounthDirty;
  const yearDirty = props.yearDirty;
  const yearError = props.yearError;
  const cvcError = props.cvcError;
  const cvcDirty = props.cvcDirty;
  const nameDirty = props.nameDirty;
  const nameError = props.nameError;
  const formValid = props.formValid;
  const handleSubmit = props.handleSubmit;

  return(
        <form action="#" className="payment__form form" onSubmit={handleSubmit} novalidate>
          <div className="form__grid grid">
            <div className="form__wrapper grid__number">
              <label className={`form__label ${numberError && numberDirty ? "form__label-error" : ""}`} htmlFor="card-number">Номер карты</label>
                <input 
                  value={number || ""} 
                  onBlur={event => blurHandler(event)} onChange={handleChange} 
                  type="text" 
                  className={`form__input ${numberError && numberDirty ? "form__error" : ""}`} id="card-number" 
                  name="card-number" 
                  placeholder="0000  0000  0000  0000" required minLength="13" 
                  maxLength="23" 
                  autoComplete="off"/>
                  <span className="form__input-erorr" id="card-number-error">{numberError && numberDirty ?  numberError : ""}</span>
            </div>
            <div className="form__wrapper gtid__mounth">
                <label className={`form__label ${mounthError && mounthDirty ? "form__label-error" : ""}`} htmlFor="card-mounth">Месяц</label>
                  <select className={`form__select ${mounthError && mounthDirty ? "form__error" : ""}`} onBlur={event => blurHandler(event)} id="card-mounth" name="card-mounth" value={mounth || ""} onChange={handleChange}>
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
                  {mounthError && mounthDirty ? <span className="form__input-erorr" id="input-year-error">{mounthError}</span> : ""}
                </div>
            <div className="form__wrapper grid__year">
                <label className={`form__label ${yearError && yearDirty ? "form__label-error" : ""}`} htmlFor="card-year">Год</label>
                <select 
                  className={`form__select ${yearError && yearDirty ? "form__error" : ""}`} 
                  onBlur={event => blurHandler(event)} name="card-year" 
                  id="card-year" 
                  value={year || ""} 
                  onChange={event => handleChange(event)}>
                    <option defaultValue></option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                </select>
                {yearError && yearDirty ? <span className="form__input-erorr" id="input-year-error">{yearError}</span> : ""}
            </div>
            <div className="form__wrapper grid__cvc">
              <label className={`form__label ${cvcError && cvcDirty ? "form__label-error" : ""}`} htmlFor="card-cvc">Код</label>
                <input 
                  type="password" 
                  className={`form__input form__cvc ${cvcError && cvcDirty ? "form__error" : ""}`} 
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
                {cvcError && cvcDirty ? <span className="form__input-erorr" id="input-cvc-error">{cvcError}</span> : ""}
            </div>
            <div className="form__wrapper grid__name">  
              <label className={`form__label ${nameError && nameDirty ? "form__label-error" : ""}`} htmlFor="card-name">Владелец карты</label>
                <input 
                  className={`form__input ${nameError && nameDirty ? "form__error" : ""}`} 
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
                <span className="form__input-erorr" id="input-name-error">{nameError}</span> : ""}
            </div>
            <div className="grid__button">
            <Link to="/check">
              <button 
              className={`grid__button form__button ${formValid ? 'form__button-active' : 'form__button-disabled'}`} type="submit" 
              name="paymentButton"
              disabled={!formValid}
              >Оплатить
              </button>
            </Link>
            </div>

          </div>       
        </form>
  )
}
export default Form;