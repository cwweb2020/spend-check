import React from 'react';

const FinancialCard = () => {
  // podria recibir estos props
  // { title, icon, description, tips}

  const title = 'Cuenta de Ahorros';
  const description = 'Esta cuenta te permite ahorrar dinero de manera segura y con intereses competitivos.';
  const tips = [
    'Realiza depósitos periódicos para aumentar tus ahorros.',
    'Revisa tus estados de cuenta mensuales para realizar un seguimiento de tus gastos.',
    'Considera configurar una transferencia automática a tu cuenta de ahorros.',
  ];

  return (
    <div className="financial-card">
      <div className="financial-card-header">
        <h2>{title}</h2>
        {/* <img src={icon} alt={title} /> */}
      </div>
      <div className="financial-card-body">
        <p>{description}</p>
      </div>
      <div className="financial-card-footer">
        <h3 style={{ fontSize: '1.2em' }}>Tips:</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialCard;
