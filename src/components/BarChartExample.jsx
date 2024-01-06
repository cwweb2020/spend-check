import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { DataContext } from "../context/provider/DataUserProvider";

const BarChartExample = () => {
  const [Label, setLabel] = React.useState([]);

  const { setFirstFours } = React.useContext(DataContext);
  // Datos
  // const data = [
  //   { name: "Octubre", ingresos: 1200, gastos: 800 },
  //   { name: "Noviembre", ingresos: 1800, gastos: 1200 },
  //   { name: "Diciembre", ingresos: 1700, gastos: 312 },
  //   // ... más datos
  // ];
  //

  //  este es el dato que va
  //   viene data de la base de datos
  // const db = [
  //   {
  //     name: "Vivienda",
  //     monto: 290,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/home.svg?alt=media&token=6a0a6660-2c8f-4a8b-ad2a-d444f39f668a",
  //   },
  //   {
  //     name: "Entretenimiento",
  //     monto: 60,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/entert.svg?alt=media&token=77ee7b04-4136-4d12-848f-ddf876cac98d",
  //   },
  //   {
  //     name: "Transporte",
  //     monto: 55,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/bus.svg?alt=media&token=2bede269-1af9-4dce-81f5-145fb1f92880",
  //   },
  //   {
  //     name: "Alimentación",
  //     monto: 210,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/market.svg?alt=media&token=73bd82a4-bb8c-4217-a72b-b78309a27772",
  //   },
  //   {
  //     name: "Educación",
  //     monto: 75,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/edu.svg?alt=media&token=9adb76e8-c715-4cc0-8b9d-d4f5e39bcbe4",
  //   },
  //   {
  //     name: "Salud",
  //     monto: 150,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/health.svg?alt=media&token=931e40d1-5b09-4e32-bd01-829c8dae0a8e",
  //   },
  //   {
  //     name: "Gym",
  //     monto: 20,
  //     img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/resto.svg?alt=media&token=a8af68af-d22b-4833-a4ed-d9c1b2295b8a",
  //   },
  // ];
  const db = [
    {
      name: "Vivienda",
      monto: 290,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/home.svg?alt=media&token=6a0a6660-2c8f-4a8b-ad2a-d444f39f668a",
      color: "#4CAF50", // Verde mate
    },
    {
      name: "Entretenimiento",
      monto: 40,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/entert.svg?alt=media&token=77ee7b04-4136-4d12-848f-ddf876cac98d",
      color: "#795548", // Marrón mate
    },
    {
      name: "Transporte",
      monto: 55,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/bus.svg?alt=media&token=2bede269-1af9-4dce-81f5-145fb1f92880",
      color: "#2196F3", // Azul mate
    },
    {
      name: "Alimentación",
      monto: 210,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/market.svg?alt=media&token=73bd82a4-bb8c-4217-a72b-b78309a27772",
      color: "#FF5722", // Naranja mate
    },
    {
      name: "Educación",
      monto: 75,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/edu.svg?alt=media&token=9adb76e8-c715-4cc0-8b9d-d4f5e39bcbe4",
      color: "#607D8B", // Gris azulado mate
    },
    {
      name: "Salud",
      monto: 150,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/health.svg?alt=media&token=931e40d1-5b09-4e32-bd01-829c8dae0a8e",
      color: "#FF9800", // Amarillo mate
    },
    {
      name: "Gym",
      monto: 20,
      img: "https://firebasestorage.googleapis.com/v0/b/spend-check-4b8e8.appspot.com/o/resto.svg?alt=media&token=a8af68af-d22b-4833-a4ed-d9c1b2295b8a",
      color: "#9C27B0", // Púrpura mate
    },
  ];

  const data2 = [...db];
  //////

  const orderedData = [...data2].sort((a, b) => b.monto - a.monto);

  // getting the firest 4 elements of the array
  const firstFour = [...orderedData].slice(0, 4);

  const countWordsLength = (str) => {
    let abreviated = str.map((item) => {
      if (item.name.length > 5) {
        item.name = item.name.slice(0, 6) + ".";
      }
      return item;
    });
    setLabel(abreviated);
  };

  useEffect(() => {
    // countWordsLength(data2);
    countWordsLength(orderedData);
    setFirstFours(firstFour);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={2}>
      <BarChart
        data={Label}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        margin={{ top: 5, right: 30, left: 20, bottom: 6 }}
        width={500}
        height={300}
      >
        <CartesianGrid strokeDasharray="3 8" />
        <XAxis dataKey="name" />
        {/* <XAxis dataKey="name" /> */}
        {/* <XAxis dataKey="name" angle={-45} interval={0} textAnchor="end" /> */}
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        {/* <Bar dataKey="ingresos" fill="#82ca9d" name="Ingresos" />
        <Bar dataKey="gastos" fill="#8884d8" name="Gastos" /> */}
        {/* este que envuelvo es el que estaba antes columna unica de un solo color */}
        {/* <Bar dataKey="monto" fill="#455a64" name="Monto" /> */}
        {/* este que envuelvo es el que estaba antes columna unica de un solo color */}
        <Bar dataKey="monto" name="Monto">
          {Label.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
