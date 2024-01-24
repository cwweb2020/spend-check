import React, { useEffect, useState } from 'react';

const ProgressBar = ({ totalGastos, values }) => {
  // console.log(totalGastos + 'totalGastos');
  // const progress = (montoAcumulado / totalGastos) * 100;

  // Determinar el color de fondo según el progress
  //  const backgroundColor = progress > 100 ? 'orangered' : '#007fff';

  useEffect(() => {
    const suma = values.reduce((acc, el) => acc + parseFloat(el) || 0, 0);
    // console.log('suma', suma);
  }, [values]);

  return (
    <section className="progress-bar-container">
      <div className="progress-bar-container-wrap">
        Total a trackear:
        <div className="total-to-track-amount">
          <p>
            <span style={{ visibility: 'hidden', display: 'inline-block' }}>/</span> <span>$ {totalGastos}</span>
          </p>
        </div>
      </div>
      {/* progress bar */}
      <div style={bar} className="barra">
        <span style={{ width: '30%', background: '#0076d4', display: 'block', height: '100%' }}></span>
      </div>
      <p>30 %</p>
      <div className="amount-info">
        <p>
          Monto sin trackear: <span style={{ visibility: 'hidden' }}>/</span> <span>$ 4900</span>
        </p>
      </div>
      {10 === 100 && (
        <i>
          <p style={alert}>¡Has completado el 100% de los gastos!</p>
        </i>
      )}
    </section>
  );

  //
  //   return (
  //     <section className="progress-bar-container">
  //       <p>Total a trackear: {totalGastos}</p>
  //       <div className="progress-bar" style={{ width: `${progress}%`, background: backgroundColor }}>
  //         <p className="progress-text">{progress.toFixed(2)}%</p>
  //       </div>
  //       <div className="amount-info">
  //         <p>Monto sin trackear: {totalGastos - montoAcumulado}</p>
  //       </div>
  //       {progress === 100 && (
  //         <i>
  //           <p>¡Has completado el 100% de los gastos!</p>
  //         </i>
  //       )}
  //     </section>
  //   );
};

const bar = {
  height: '16px',
  borderRadius: '18px',
  width: '100%',
  overflow: 'hidden',
  border: '0.5px solid gray',
};

const alert = {
  background: 'lightsalmon',
  width: 'fit-content',
  padding: '4px 8px',
  marginTop: '9px',
};

export default ProgressBar;
