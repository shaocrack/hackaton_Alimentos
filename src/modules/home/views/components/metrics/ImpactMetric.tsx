import React from "react";
import CountUp from "react-countup";
import "./ImpactMetric.css"

type ImpactMetricProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> | { style?: React.CSSProperties }>;
  label: string;
  value: number;
  suffix?: string;
  sub?: string;
};

const ImpactMetric: React.FC<ImpactMetricProps> = ({ icon: Icon, label, value, suffix = "", sub }) => (
  <div className="impact-card">
    <Icon style={{ fontSize: 40, color: "#ED6F1D" }} />
    <h3>
      <CountUp end={value} duration={3} separator="," suffix={suffix} />
    </h3>
    <p className="label">{label}</p>
    {sub && <span className="sub">{sub}</span>}
  </div>
);

export default ImpactMetric;
