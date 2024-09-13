import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  AreaChart,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";
import EmptyAlert from "./EmptyAlert";
import { Divide } from "hamburger-react";

function Chart({ key, title, data, XdataKey, dataKey , name }) {
  return (
    <section key={key} className="my-8 shadow-round p-2 rounded-lg">
      <h3 className="my-8 font-MorabbaBold text-2xl">{title}</h3>
      {data.length ? (
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={600}
            height={300}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
            className="text-secondary-400"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={XdataKey} />
            <YAxis tick={{ dx: -50 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#4a6dff"
              fill="#4a6dff"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <EmptyAlert text={`تا حالا ${name} ثبت نشده است.`} />
      )}
    </section>
  );
}

export default Chart;
