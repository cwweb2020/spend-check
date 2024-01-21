import React from 'react';
import { FaMoneyBill, FaMoneyCheck, FaMoneyBillAlt } from 'react-icons/fa';
import { useGetScreenWidth } from '../hooks/useGetScreenWidth';
import gastos from '../assets/icons/summary/pay-summary.svg';
import ingresos from '../assets/icons/summary/income-summary.svg';
import saldo from '../assets/icons/summary/saldo-summary.svg';

const SaldoCard = () => {
  const screenWidth = useGetScreenWidth();

  return (
    <>
      <section className="total-summary-container">
        <div className="upper-summary-container">
          <h4>Resumen actual</h4>
          <div className="total-summary-wrapper">
            <div style={{ borderLeft: '4px solid #08af13' }} className="summary-card-container">
              <div className="icon-summary-title">
                <img src={ingresos} alt="" />
                <p className="summary-card-header">Ingresos</p>
              </div>
              <p className="card-number-income">
                <span style={{ color: 'black' }}>$</span> 960
              </p>
            </div>

            <div style={{ borderLeft: '4px solid #c92e13' }} className="summary-card-container">
              <div className="icon-summary-title">
                <img src={gastos} alt="" />
                <p className="summary-card-header">Gastos</p>
              </div>

              <p className="card-number-expense">
                <span style={{ color: 'black' }}>$</span> 350
              </p>
            </div>

            <div style={{ borderLeft: '4px solid #1089b1' }} className="summary-card-container">
              <div className="icon-summary-title">
                <img src={saldo} alt="" />
                <p className="summary-card-header">Saldo</p>
              </div>
              <p className="card-number-balance">
                <span style={{ color: 'black' }}>$</span> 610
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {screenWidth < 900 && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
    </>
  );
};

export default SaldoCard;
