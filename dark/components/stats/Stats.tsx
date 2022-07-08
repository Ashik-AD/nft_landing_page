import React, { ReactElement, FC } from "react";

const Stats: FC<PropsType> = ({ icon, value, label, unit }) => {
  return (
    <div
      className="flex flex-col space-16 content-center text-center p-16"
      style={{ width: 150 }}
    >
      <span style={{ fontSize: "2rem" }}>{icon}</span>
      <h2 className="text-heading">
        {value.toString().replaceAll(".", ",")}
        {unit && unit}
      </h2>
      <span className="text-medium text-gray-1000">{label}</span>
    </div>
  );
};

interface PropsType {
  icon: ReactElement;
  value: number;
  unit?: string;
  label: string;
}
export default Stats;
