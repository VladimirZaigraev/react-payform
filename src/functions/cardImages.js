import mastercard from '../images/logo-scheme/mastercard.svg'
import visa from '../images/logo-scheme/visa.svg'
import mir from '../images/logo-scheme/mir.svg'
import discover from '../images/logo-scheme/discover.svg'
import ae from '../images/logo-scheme/american_express.svg'
import alfaBank from '../images/logo-bank/alfa-bank.svg'
import sberbank from '../images/logo-bank/sberbank.svg'
import vtb from '../images/logo-bank/vtb.svg'

const cardImages = (res, setCardBankLogo, setCardTipe, setCardBankInfo) => {
  console.log(res)
  const scheme = res.scheme
  const bank = res.bank.name
  switch (scheme){    
    case 'mastercard':
      setCardTipe(mastercard)
      break;
    case 'visa':
      setCardTipe(visa)
      break;  
    case 'mir':
      setCardTipe(mir)
      break;
    case 'discover':
      setCardTipe(discover)
      break;

  }
  switch (bank) {
    case 'Alfa-Bank':
      setCardBankLogo(alfaBank)
      break;
    case 'SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)':
      setCardBankLogo(sberbank)
      break;
    case 'VTB24':
      setCardBankLogo(vtb)
      break;
    case 'American Express':
      setCardBankLogo(ae)
      break;
    default: 
      setCardBankInfo(bank)
  }
  
}
export default cardImages;