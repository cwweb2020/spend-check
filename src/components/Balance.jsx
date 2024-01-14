import React, { useEffect, useRef, useState } from 'react';
import BarChartExample from './BarChartExample';
import balance from '../assets/img/balance.svg';

const Balance = () => {
  const miElementoRef = useRef(null);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    // Accede a la altura del elemento
    const altura = miElementoRef.current.offsetHeight;
    //  console.log('Altura del elemento:', altura);
    setAltura(altura);
  }, []);

  return (
    <>
      <section className="total-balance">
        <div className="wrapper-balance">
          <h3>Balance</h3>
          <br />
          <div className="balance-chart-container">
            <div ref={miElementoRef} className="balance-container">
              <img src={balance} alt="" width={400} />
            </div>
            <div style={{ minHeight: altura }} className="balance-chart">
              <BarChartExample />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default Balance;
