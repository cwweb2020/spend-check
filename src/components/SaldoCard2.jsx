import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ingresos from '../assets/icons/summary/income-summary.svg';
import gastos from '../assets/icons/summary/pay-summary.svg';
import saldo from '../assets/icons/summary/saldo-summary.svg';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';

const SaldoCard2 = () => {
  const [porcent, setPorcent] = useState(null);

  const screenWidth = useGetScreenWidth();

  // calculate porcentage
  const calculatePorcentage = (incoms, expenses) => {
    const porcent = (expenses * 100) / incoms;
    return porcent;
  };
  const porcentaje = calculatePorcentage(2500, 1500);

  useEffect(() => {
    setPorcent(porcentaje);
  }, [porcentaje]);

  const circleStyle = {
    '--porcentaje': porcentaje,
  };

  return (
    <>
      <section className="total-summary-balance">
        <div className="summary-balance-container">
          <h5> Resumen actual</h5>
          <div className="summary-balance-card">
            <div className="summary-balance-wrapper">
              <div className="summary-balance-left-box">
                <div className="summary-balance-up">
                  <h4>
                    <img src={ingresos} alt="" />
                    Ingresos:
                  </h4>
                  <span style={{ visibility: 'hidden' }}>.</span>
                  <p>
                    <span>$</span>2500
                  </p>
                </div>
                {/* <Divider style={{ width: '100%', margin: 'auto' }} /> */}

                <div className="summary-balance-bottom">
                  <h4>
                    <img src={gastos} alt="" />
                    Gastos:
                  </h4>
                  <span style={{ visibility: 'hidden' }}>.</span>
                  <p>
                    <span>$</span>1500
                  </p>
                </div>

                <div className="summary-balance-footer">
                  <h4>
                    <img src={saldo} alt="" />
                    Saldo:
                  </h4>
                  <span style={{ visibility: 'hidden' }}>.</span>
                  <p>
                    <span>$</span>1000
                  </p>
                </div>
              </div>
              <div className="summary-balance-right-box" style={circleStyle}>
                <svg width={'150px'} height={'150px'}>
                  <circle cx="50%" cy="50%" r="65" pathLength={100}></circle>
                  <circle cx="50%" cy="50%" r="65" pathLength={100}></circle>
                </svg>
                <div className="summary-balance-center-circle">
                  <h5 className="summary-balance-right-box-gastos">Gastos</h5>
                  <p> {porcent}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      {screenWidth < 900 && (
        <>
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default SaldoCard2;
