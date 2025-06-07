import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './InputForm.module.css'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import Button from '../UI/Button'
import convertLogo from '../assets/convertorLogo.jpeg'
const InputForm = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo()

  const options = Object.keys(currencyInfo)
  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }
  const toAmountChangeHandler = (event) => {
    setConvertedAmount(event.target.value)
  }
  const fromCurrencyChangeHandler = (event) => {
    setFrom(event.target.value)
  }
  const toCurrencyChangeHandler = (event) => {
    setTo(event.target.value)
  }
  const swapHandler = (event) => {
    setFrom(to)
    setTo(from)
    const exchangeRate = currencyInfo[from] / currencyInfo[to];
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }
  const convertHandler = () => {
    if (!amount || isNaN(amount)) return;
    const exchangeRate = currencyInfo[to] / currencyInfo[from];
    setConvertedAmount((amount * exchangeRate).toFixed(2));
  }
  console.log(convertedAmount)
  return (
    <Card className={classes['input-form']}>
      <img className={classes.convertImage} src={convertLogo} alt='Logo' style={{ height: '5rem', borderRadius: '1rem' }} />
      <div className={classes['input-from']}>
        <div className={classes['input-from-upper']}>
          <label>From</label>
          <label>Currency Type</label>
        </div>
        <div className={classes['input-from-lower']}>
          <input type='number' placeholder='Enter Amount' value={amount} onChange={amountChangeHandler}></input>
          {
            <select onChange={fromCurrencyChangeHandler} value={from}>
              {
                options.map((currency) => (
                  <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))
              }
            </select>
          }
        </div>
      </div>
      <Button className={classes.btn} on={swapHandler}>Swap</Button>
      <div className={classes['input-to']}>
        <div className={classes['input-to-upper']}>
          <label>To</label>
          <label>Currency Type</label>
        </div>
        <div className={classes['input-to-lower']}>
          <input type='number' placeholder='Enter Amount' value={convertedAmount} onChange={toAmountChangeHandler} readOnly></input>
          {
            <select onChange={toCurrencyChangeHandler} value={to}>
              {
                options.map((currency) => (
                  <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                ))
              }
            </select>
          }
        </div>
      </div>
      <Button className={classes.convert} on={convertHandler}>
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </Button>
    </Card>
  )
}

export default InputForm
