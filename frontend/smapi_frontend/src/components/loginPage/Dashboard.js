import React, { useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

const VIEWS = {
  index: 'Index Performance',
  active: 'Most Active equities',
  volume: 'Volume Gainers',
  high52: '52 Week High',
  low52: '52 Week Low',
};

function useDatasets() {
  return useMemo(() => {
    return {
      index: {
        columns: [
          { key: 'index', label: 'Index' },
          { key: 'last', label: 'Last' },
          { key: 'change', label: 'Change' },
          { key: 'changePct', label: 'Change %' },
          { key: 'ytdPct', label: 'YTD %' },
        ],
        rows: [
          { index: 'NIFTY 50', last: '22,485.10', change: '+85.40', changePct: '+0.38%', ytdPct: '+9.12%' },
          { index: 'SENSEX', last: '74,952.35', change: '+272.80', changePct: '+0.37%', ytdPct: '+8.44%' },
          { index: 'BANK NIFTY', last: '48,612.20', change: '+135.30', changePct: '+0.28%', ytdPct: '+6.51%' },
          { index: 'NIFTY MIDCAP', last: '51,210.75', change: '-125.60', changePct: '-0.24%', ytdPct: '+14.07%' },
          { index: 'NIFTY IT', last: '38,245.60', change: '+221.10', changePct: '+0.58%', ytdPct: '+12.31%' },
        ],
      },
      active: {
        columns: [
          { key: 'symbol', label: 'Symbol' },
          { key: 'last', label: 'Last' },
          { key: 'changePct', label: 'Change %' },
          { key: 'volume', label: 'Volume' },
          { key: 'turnover', label: 'Turnover (Cr)' },
        ],
        rows: [
          { symbol: 'RELIANCE', last: '2,865.40', changePct: '+0.92%', volume: '1.24 Cr', turnover: '3,520' },
          { symbol: 'TCS', last: '3,981.75', changePct: '+0.45%', volume: '28.1 L', turnover: '1,110' },
          { symbol: 'HDFCBANK', last: '1,523.60', changePct: '-0.18%', volume: '2.02 Cr', turnover: '3,070' },
          { symbol: 'ICICIBANK', last: '1,161.80', changePct: '+0.30%', volume: '1.31 Cr', turnover: '1,520' },
          { symbol: 'INFY', last: '1,669.25', changePct: '+0.62%', volume: '58.4 L', turnover: '974' },
        ],
      },
      volume: {
        columns: [
          { key: 'symbol', label: 'Symbol' },
          { key: 'volume', label: 'Volume' },
          { key: 'avgVolume', label: 'Avg Volume (20d)' },
          { key: 'volumeChange', label: 'Volume % Change' },
        ],
        rows: [
          { symbol: 'IDEA', volume: '12.6 Cr', avgVolume: '5.9 Cr', volumeChange: '+113.6%' },
          { symbol: 'SUZLON', volume: '8.4 Cr', avgVolume: '3.3 Cr', volumeChange: '+154.5%' },
          { symbol: 'YESBANK', volume: '6.7 Cr', avgVolume: '2.9 Cr', volumeChange: '+131.0%' },
          { symbol: 'IRFC', volume: '3.1 Cr', avgVolume: '1.1 Cr', volumeChange: '+181.2%' },
          { symbol: 'SBIN', volume: '2.7 Cr', avgVolume: '1.2 Cr', volumeChange: '+125.0%' },
        ],
      },
      high52: {
        columns: [
          { key: 'symbol', label: 'Symbol' },
          { key: 'high', label: '52W High' },
          { key: 'date', label: 'Date' },
          { key: 'last', label: 'Last' },
          { key: 'changePct', label: 'Change %' },
        ],
        rows: [
          { symbol: 'DLF', high: '1,430.80', date: '2025-02-10', last: '1,419.35', changePct: '-0.80%' },
          { symbol: 'HAL', high: '4,850.25', date: '2025-02-12', last: '4,812.10', changePct: '-0.79%' },
          { symbol: 'IRCTC', high: '1,205.60', date: '2025-02-11', last: '1,189.10', changePct: '-1.37%' },
          { symbol: 'NHPC', high: '116.40', date: '2025-02-07', last: '115.10', changePct: '-1.12%' },
          { symbol: 'ITC', high: '512.40', date: '2025-02-10', last: '508.30', changePct: '-0.80%' },
        ],
      },
      low52: {
        columns: [
          { key: 'symbol', label: 'Symbol' },
          { key: 'low', label: '52W Low' },
          { key: 'date', label: 'Date' },
          { key: 'last', label: 'Last' },
          { key: 'changePct', label: 'Change %' },
        ],
        rows: [
          { symbol: 'PAYTM', low: '310.10', date: '2025-01-29', last: '324.50', changePct: '+4.63%' },
          { symbol: 'ZOMATO', low: '111.50', date: '2024-12-20', last: '117.20', changePct: '+5.11%' },
          { symbol: 'NYKAA', low: '130.20', date: '2024-11-18', last: '136.40', changePct: '+4.75%' },
          { symbol: 'UJJIVANSFB', low: '28.30', date: '2025-02-05', last: '29.10', changePct: '+2.83%' },
          { symbol: 'INDIGO', low: '2,090.00', date: '2025-01-03', last: '2,141.20', changePct: '+2.45%' },
        ],
      },
    };
  }, []);
}

function DataTable({ columns, rows }) {
  return (
    <div className="table-responsive table-section">
      <table className="table table-striped align-middle custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th scope="col" key={col.key}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Dashboard() {
  const [selected, setSelected] = useState(null);
  const data = useDatasets();

  const columns = selected ? data[selected].columns : [];
  const rows = selected ? data[selected].rows : [];

  return (
    <div className="dashboard-container">
      <div className="report-header">
        <h1 className="report-title">Stock Market data Report</h1>
        <p className="report-subtitle">Click a category to view the latest market lists</p>
      </div>

      <div className="button-row">
        {Object.entries(VIEWS).map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`btn view-button ${selected === key ? 'view-button--active' : ''}`}
            onClick={() => setSelected(key)}
            aria-pressed={selected === key}
          >
            {label}
          </button>
        ))}
      </div>

      {selected && (
        <section className="list-wrapper">
          <div className="list-header d-flex justify-content-between align-items-center">
            <h2 className="list-title m-0">{VIEWS[selected]}</h2>
            <span className="badge rounded-pill view-badge">{rows.length} items</span>
          </div>
          <DataTable columns={columns} rows={rows} />
        </section>
      )}
    </div>
  );
}
