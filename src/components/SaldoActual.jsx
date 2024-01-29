import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { LinearChart } from './charts/LinearChart';
import BarChartExample from './BarChartExample';
import income from '../assets/icons/incomes.svg';
import outcome from '../assets//icons/outcomes.svg';
import dollar from '../assets/icons/dollar-sign.svg';
import Divider from '@mui/material/Divider';
import saldo from '../assets/icons/rest-saldo.svg';
import { DataContext } from '../context/provider/DataUserProvider';
import GastosChart from './charts/GastosChart';
import { LuAsterisk } from 'react-icons/lu';
import { AiOutlinePercentage } from 'react-icons/ai';
import { Card, CardContent, CircularProgress } from '@mui/material';
import ScrollToTopButton from './ScrollToTopButton';
import FinancialCard from './FinancialCard';
import { porcentageFunc } from '../utils/calculations/getPorcentageExpenses';

//

//

const SaldoActual = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { firstFours } = React.useContext(DataContext);
  // console.log('firstFours', firstFours);
  const [tooltipText, setTooltipText] = useState('');

  const gastosData = [
    { label: 'setiembre', amount: 500 },
    { label: 'octubre', amount: 750 },
    { label: 'noviembre', amount: 450 },
    { label: 'diciembre', amount: 800 },
  ];

  const totalIncomes = 1050;

  const porcentage = porcentageFunc(gastosData, totalIncomes);

  React.useEffect(() => {
    porcentageFunc(gastosData, totalIncomes);
  }, []);

  // Simular carga de imágenes
  React.useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = income; // Usar una de las imágenes para cargar

    imageLoader.onload = () => {
      // Todas las imágenes se han cargado
      setImagesLoaded(true);
    };
  }, []);

  return (
    <>
      <section className="total-saldo-actual">
        <br />
        <br />
        <div className="total-saldo-big-container">
          <h2 className="total-saldo-title">Saldo actual</h2>

          <div className="total-saldo-wrapper">
            <h4 className="total-saldo-subtitle">Análisis de gastos</h4>
            <div className="top-saldo-linear-aside-container">
              <div className="saldo-linear-contaienr">
                <LinearChart />
              </div>

              <div
                style={{ display: !imagesLoaded ? 'flex' : '', justifyContent: !imagesLoaded ? 'center' : '' }}
                className="aside-saldo-actual-container">
                {imagesLoaded ? (
                  <>
                    <div className="ingresos">
                      <div className="box1">
                        <img src={income} alt="" />
                        <h3>Ingresos</h3>
                      </div>
                      <p style={{ color: 'green' }}>
                        <img src={dollar} alt="" />
                        1500
                      </p>
                    </div>

                    <div className="gastos">
                      <div className="box1">
                        <img src={outcome} alt="" />
                        <h3>Gastos</h3>
                      </div>
                      <p style={{ color: 'red' }}>
                        <img src={dollar} alt="" />
                        600
                      </p>
                    </div>

                    <div className="saldo">
                      <div className="box1">
                        <img src={saldo} alt="" />
                        <h3>Saldo</h3>
                      </div>
                      <p>
                        <img src={dollar} alt="" />
                        900
                      </p>
                    </div>
                  </>
                ) : (
                  <CircularProgress />
                )}
              </div>
            </div>
            {/* entering extplanation for the chart */}
            <p
              style={{
                padding: '0.625em 0 3.25em 1.1em',
                fontSize: '1em',
                display: 'flex',
                alignItems: 'center',
              }}>
              <LuAsterisk /> Progresión de gastos en los últimos 4 meses
            </p>
            {/* entering extplanation for the chart */}
            <Divider />
            <div className="saldo-bar-container">
              <h3>Gastos por categoría</h3>

              <div className="saldo-bar-icons-most-expenses">
                <div className="saldo-bar-chart-wrapper">
                  <BarChartExample />
                </div>
                <div className="saldo-bar-chart-imgs">
                  <h4>Categorías con mas gastos:</h4>

                  <div className="img-icons-container">
                    {firstFours.map((item, index) => {
                      return (
                        <Tooltip
                          key={index}
                          title={`Monto gastado: ${item.monto} $`}
                          enterDelay={500}
                          leaveDelay={200}
                          placement="top">
                          <div className="saldo-bar-chart-img">
                            <img src={item.img} alt="" />
                            <h5>{item.name} </h5>
                          </div>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="bottom-compare-categories saldo-bar-container">
              <h4 className="comparative-title">Proporción de gastos</h4>

              <div className="gasto-chart-compare" style={{ width: '67%' }}>
                <GastosChart data={porcentage} />
                <p
                  style={{
                    padding: '1.25em 0 1.25em 0.93em',
                    fontSize: '1em',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <LuAsterisk /> Porcentaje de tus gastos sobre tus ingresos en <span style={{ opacity: '0' }}>.</span>{' '}
                  <AiOutlinePercentage />
                </p>
              </div>

              <Divider />

              <h5 className="recomendations-compare-title">Análisis en base a los datos</h5>

              <div className="card-saldo-actual-wrapper">
                {/* <Card style={{ borderRadius: '12px' }}>
                  <CardContent>
                    <p className="card-p-content">
                      <b>Gasto Promedio Mensual:</b> Calcula el promedio mensual de gastos sumando los gastos de los cuatro
                      meses y dividiéndolo entre el número de meses. Promedio Mensual = Gasto de Setiembre + Gasto de Octubre +
                      Gasto de Noviembre + Gasto de Diciembre 4 Promedio Mensual= 4 Gasto de Setiembre+Gasto de Octubre+Gasto de
                      Noviembre+Gasto de Diciembre
                    </p>
                  </CardContent>
                </Card>
                <Card style={{ borderRadius: '12px' }}>
                  <CardContent>
                    <p>
                      <b> Tendencia de Gastos: </b> <br /> Observa la tendencia general de los gastos. ¿Están aumentando,
                      disminuyendo o manteniéndose estables? Esto puede ayudarte a tomar decisiones sobre el manejo de tus
                      finanzas.
                    </p>
                  </CardContent>
                </Card>
                <Card style={{ borderRadius: '12px' }}>
                  <CardContent>
                    <p>
                      <b> Mes con Mayor/Menor Gasto:</b> Identifica el mes en el que gastaste más y el mes en el que gastaste
                      menos. Esto puede ayudarte a entender patrones estacionales o identificar meses en los que podrías
                      necesitar ajustar tus gastos.
                    </p>
                  </CardContent>
                </Card>
                <Card style={{ borderRadius: '12px' }}>
                  <CardContent>
                    <p>
                      <b> Análisis de Proporciones:</b> Examina la proporción de gastos en cada mes en relación con el total de
                      los cuatro meses. ¿Hubo un mes en el que gastaste más en comparación con los otros meses?
                    </p>
                  </CardContent>
                </Card> */}
                <FinancialCard />
                <FinancialCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
      <br />
      <br />
    </>
  );
};

export default SaldoActual;
