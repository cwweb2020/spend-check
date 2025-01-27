import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { datos } from '../utils/fakeData'
import TrTableComponent from './TrTableComponent'
import Card from './Card'
// import iconChancho from "../assets/icons/pig.svg";
import TheadTable from './TheadTable'
import Flotante from './material-icons/Flotante'
import money from '../assets/img/money.svg'
import expenses from '../assets/img/expenses.svg'
import ModalForm from './ModalForm'
import { useGetScreenWidth } from '../hooks/useGetScreenWidth'

//

const Table = ({ titulo, bg }) => {
  const [data, setData] = useState(datos)
  const [total, setTotal] = useState(0)
  const screenWidth = useGetScreenWidth()
  //

  // obtengo la url actual
  const location = useLocation()
  const currentUrl = location.pathname
  const pureUrl = currentUrl.replace('/', '')

  ////
  const handleDelete = (id) => () => {
    const newData = data.filter((dato) => dato.id !== id)
    setData(newData)
  }

  ///

  const getTotal = () => {
    let precioSinSigno = data.map((dato) => dato.valor.replace('$', '').trim())
    let precioNumerico = precioSinSigno.map((dato) => parseFloat(dato))
    let total = precioNumerico.reduce((acc, curr) => acc + curr, 0)
    setTotal(total.toFixed(2))
  }

  useEffect(() => {
    getTotal()
  }, [data])

  return (
    <>
      <br />
      <br />
      <section className="total-table">
        <h2
          style={{
            backgroundColor:
              screenWidth < 900 && titulo === 'Ingresos'
                ? '#107acc'
                : screenWidth < 900 && titulo === 'Gastos'
                ? '#2f2c79'
                : '',
          }}>
          {titulo}{' '}
        </h2>
        <div className="table-wrapper">
          <div className="contenedor-titulo-botoningreso">
            <div className="testing">
              {/* <TableButton titulo={titulo} button={button} bg={bg} /> */}
              <Flotante bg={bg} />
              <h4 style={{ color: titulo === 'Gastos' ? 'red' : '#388e3c' }}>{titulo}</h4>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <TheadTable />
              </thead>
              <tbody>
                {/* <!-- Filas --> */}
                {data.map((dato, index) => {
                  return <TrTableComponent key={dato.id} dato={dato} index={index} handleDelete={handleDelete} />
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="box">
        <img src={titulo === 'Ingresos' ? money : expenses} alt="" style={{ width: screenWidth < 900 ? '100px' : '161px' }} />
        <div className="box-wrapper">
          <Card title={'Total'} total={total} icon={titulo === 'Ingresos' ? 'pig' : 'money'} />
        </div>
      </div>
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
      <ModalForm url={pureUrl} />
    </>
  )
}

export default Table

// display: grid;
// grid-template-columns: min-content 1fr 1fr;
