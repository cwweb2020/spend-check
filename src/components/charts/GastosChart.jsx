import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GastosChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destruir el gráfico existente si hay uno
      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((el) => el.label),
          datasets: [
            {
              label: "% gastos",
              data: data.map((el) => el.percent),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 3,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      // Limpiar al desmontar el componente
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default GastosChart;
