import db from "../model/db";

export default function Home() {
  return (
    <div className="m-5">
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Income</div>
          <div className="stat-value">$69,400</div>
        </div>

        <div className="stat">
          <div className="stat-title">Expenses</div>
          <div className="stat-value">$89,400</div>
        </div>
      </div>
    </div>
  );
}
