import React, { useEffect, useRef, useState } from 'react'
import BarChartExample from './BarChartExample'
import balance from '../assets/img/balance.svg'
import balanza from '../assets/icons/balanza.svg'
import sad from '../assets/icons/sad.svg'
import { useNavigate } from 'react-router-dom'

//
const BudgetSummary = () => {
  const storedAltura = localStorage.getItem('altura')
  const miElementoRef = useRef(null)
  const [altura, setAltura] = useState(storedAltura ? parseInt(storedAltura, 10) : 0)

  const navigate = useNavigate()

  useEffect(() => {
    // Recuperar la altura almacenada desde el localStorage
    const storedAltura = localStorage.getItem('altura')

    // Verificar si no existe el elemento "altura" o su valor es 0
    if (!storedAltura || parseInt(storedAltura, 10) === 0) {
      // Calcular la altura del elemento
      const nuevaAltura = miElementoRef.current.offsetHeight
      setAltura(nuevaAltura)
      // Almacenar la nueva altura en el localStorage
      localStorage.setItem('altura', nuevaAltura.toString())
    } else {
      // Si existe un valor diferente de 0, utilizarlo como la altura inicial
      setAltura(parseInt(storedAltura, 10))
    }
  }, [])

  return (
    <>
      <section className="total-balance">
        <div className="wrapper-balance">
          <h3>Presupuesto</h3>
          <br />
          <div className="balance-chart-container">
            <div ref={miElementoRef} className="balance-container">
              <img src={balance} alt="" width={400} />
            </div>
            <div style={{ minHeight: altura }} className="balance-chart">
              {/* <BarChartExample /> */}
              {/* elimino el chart de barras y reemplazo por el resumen de presupuesto */}

              {true ? (
                <>
                  <div className="budgetsummary-wrapper">
                    <div className="budget-sum-title-container">
                      <img src={balanza} alt="" />
                      <div className="presupuest-title-faltan-presupuestar">
                        <p>Total presupuestado</p>
                        <h4>
                          <span>Faltan: $</span> <span style={{ fontSize: '1.2em' }}> 4800</span>
                        </h4>
                      </div>
                    </div>
                    <p>nivel actual</p>
                    <div className="barra">
                      <span style={{ width: '20%', background: '#0076d4', display: 'block', height: '100%' }}></span>
                    </div>
                    <h5 style={{ fontSize: '13px' }}>20 %</h5>
                  </div>
                </>
              ) : (
                <h4 style={{ fontSize: '1.2em', display: 'flex', alignItems: 'center', alignSelf: 'center' }}>
                  ..Aun no has creado un presupuesto <img src={sad} alt="" width={45} />
                </h4>
              )}
              {true && (
                <button onClick={() => navigate('/meta')} className="budget-more-details">
                  ver detalle
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  )
}

export default BudgetSummary
