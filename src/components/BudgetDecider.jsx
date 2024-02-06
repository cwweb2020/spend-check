import { useEffect, useState } from 'react'
import piggy from '../assets/img/piggy.svg'
import { LuAsterisk } from 'react-icons/lu'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useGetScreenWidth } from '../hooks/useGetScreenWidth'
import personBudget from '../assets/img/plan4.png'
import { CircularProgress } from '@mui/material'

const BudgetDecider = ({ handleNext }) => {
  const [income, setIncome] = useState('')
  const [savingsPercentage, setSavingsPercentage] = useState('')
  const [savingsAmount, setSavingsAmount] = useState('')
  const [totalExpenses, setTotalExpenses] = useState('')

  const [imagesLoaded, setImagesLoaded] = useState(false)

  const screenWidth = useGetScreenWidth()

  const calculateSavings = () => {
    const incomeValue = parseFloat(income)
    const percentageValue = parseFloat(savingsPercentage)

    if (!isNaN(incomeValue) && !isNaN(percentageValue)) {
      const savings = (incomeValue * percentageValue) / 100
      setSavingsAmount(savings.toFixed(2))
      const monthlyExpenses = incomeValue - savings // Restamos el ahorro del ingreso
      setTotalExpenses(monthlyExpenses.toFixed(2))
      const toSaveInLocalStorage = { savings, monthlyExpenses }
      localStorage.setItem('budget', JSON.stringify(toSaveInLocalStorage))
      //
    } else {
      setSavingsAmount('')
      setTotalExpenses('')
    }
  }

  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = personBudget // Usar una de las imágenes para cargar

    imageLoader.onload = () => {
      // Todas las imágenes se han cargado
      setImagesLoaded(true)
    }
  }, [])

  return (
    <>
      <br />
      <br />
      <section className="budget-section">
        <h2 className="budget-title">Crear Presupuesto</h2>
        <div className="wrapper-p-budget-container">
          <div className="budget-wrapper-bottom-inscription-container">
            <div style={{ position: 'relative' }} className="budget-wrapper">
              <h4 className="budget-subtitle">Planificar ahorro</h4>
              <div className="inputs-wrapper">
                {/* Primer input-container */}
                <div className="input-container">
                  <label>Ingreso Mensual ($):</label>
                  <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
                </div>

                {/* Segundo input-container */}
                <div className="input-container">
                  <label>{screenWidth < 900 ? 'Porcent. de ahorro (%):' : 'Porcentaje de Ahorro (%):'}</label>
                  <input
                    style={{ flex: 'unset' }}
                    type="number"
                    value={savingsPercentage}
                    onChange={(e) => setSavingsPercentage(e.target.value)}
                  />
                </div>
              </div>

              <button className="budget-button" onClick={calculateSavings}>
                Calcular {screenWidth > 900 && 'Ahorro'}
              </button>

              {savingsAmount !== '' && (
                <div className="result-container">
                  <p>Ahorro Mensual Resultante:</p>
                  <div className="budget-amount-container">
                    <img src={piggy} alt="" />

                    <span>
                      <div className="budget-amount-meta">
                        <h4>Meta de gastos</h4>
                        <h3>${totalExpenses}</h3>
                      </div>

                      <div className="budget-amount-ahorro">
                        <h4>Ahorro Mensual</h4>
                        <h5>${savingsAmount}</h5>
                      </div>
                    </span>
                  </div>
                </div>
              )}
              {/* next button  */}
              <button
                style={{
                  display: savingsAmount !== '' ? 'flex' : 'none',
                  background: savingsAmount === '' && 'lightgray',
                  cursor: savingsAmount === '' && 'not-allowed',
                }}
                className="handle-next"
                disabled={savingsAmount === ''}
                onClick={handleNext}>
                {screenWidth > 900 ? 'siguiente' : ''} <span style={{ visibility: 'hidden' }}>/</span> <FaArrowRightLong />
              </button>
            </div>
            <p style={{ display: 'flex', alignItems: 'center', marginTop: screenWidth > 900 ? '18px' : '12px' }}>
              <LuAsterisk /> Estima una meta (presupuesto) {screenWidth > 900 ? 'de lo que quieres ahorrar' : 'de ahorro'}
            </p>
          </div>

          <div style={!imagesLoaded ? contenedorEstilo : {}} className="right-img-budget-container">
            {imagesLoaded ? <img src={personBudget} alt="" /> : <CircularProgress />}
          </div>
        </div>
      </section>

      <br />
      <br />
    </>
  )
}

const contenedorEstilo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '-webkit-fill-available',
}

export default BudgetDecider
