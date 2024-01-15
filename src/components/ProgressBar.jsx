import React, { useEffect, useState } from 'react';

const ProgressBar = ({ totalGastos, values }) => {
  // console.log(totalGastos + 'totalGastos');
  // const progress = (montoAcumulado / totalGastos) * 100;

  // Determinar el color de fondo según el progress
  //  const backgroundColor = progress > 100 ? 'orangered' : '#007fff';

  useEffect(() => {
    const suma = values.reduce((acc, el) => acc + parseFloat(el) || 0, 0);
    console.log('suma', suma);
  }, [values]);
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

export default ProgressBar;
