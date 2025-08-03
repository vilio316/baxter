"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  plugins,
} from "chart.js";

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export function ALineChart(props: {
  data_arr: [] | never[] | number[];
  source_array: [] | never[];
  color: string;
}) {
  const new_arr = [...props.data_arr];
  const direct_array = new_arr.toReversed();
  const label_arr = props.source_array;
  return (
    <>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "#1f1f1f",
              titleColor: "#ffffff",
              bodyColor: "#ffffff",
              borderColor: "#333",
              borderWidth: 1,
            },
          },
          scales: {
            x: {
              grid: {
                color: "rgba(255,255,255,0.05)",
              },
              ticks: {
                color: "#ccc",
                font: {
                  size: 10,
                },
              },
            },
            y: {
              grid: {
                color: "rgba(255,255,255,0.05)",
              },
              ticks: {
                color: "#ccc",
                font: {
                  size: 12,
                },
              },
            },
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
            },
            line: {
              borderWidth: 2,
            },
          },
        }}
        data={{
          labels: label_arr.toReversed().map(({ date }: { date: string }) => {
            if (date.length > 11) {
              let text = date.slice(11);
              return text;
            } else {
              return date;
            }
          }),
          datasets: [
            {
              label: "Price",
              data: direct_array,
              tension: 0.4,
              borderColor: props.color,
              backgroundColor: "transparent",
            },
          ],
        }}
      />
    </>
  );
}
