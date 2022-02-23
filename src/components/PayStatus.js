import React from "react";

const PayStatus = () => {
  //  
  //   const [success, setSuccess] = useState(false);
  //   const [error, setError] = useState(false);
  //   const [load, setLoading] = useState(true);

  //   const checkStatus = (status) => {
  //       if (status === 'ok') {
  //           setSuccess(true);
  //           setLoading(false)
  //           return false;
  //       }
  //       if (status === 'fail') {
  //           setError(true);
  //           setLoading(false)
  //           return false;
  //       }
  //       return true;
  //   }

  return(
    <div className="check">
      <h3 className="check__title">Оплата</h3>
      <div className="spin">
        <div className="spin__big"></div>
        <div className="spin__small"></div>
      </div>
    </div>
  )
}
export default PayStatus;