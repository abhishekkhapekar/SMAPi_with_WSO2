import React, { useState } from 'react';
import api from '../../api/wso2_api' // 🔑 import your axios instance
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VIEWS = {
  index: 'Index Performance',
  active: 'Most Active equities',
  volume: 'Volume Gainers',
  high52: '52 Week High',
  low52: '52 Week Low',
};

const API_ENDPOINTS = {
  index: '/api/index-performance',
  active: '/api/most-active-equity',
  volume: '/api/volume-gainer',
  high52: '/api/week-52-high',
  low52: '/api/week-52-low',
};


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
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (key) => {
    setSelected(key);
    setLoading(true);

    try {
      const res = await api.get(API_ENDPOINTS[key]); // use central axios instance
      const responseData = Array.isArray(res.data) ? res.data : res.data.data || [];

      if (responseData.length > 0) {
        const cols = Object.keys(responseData[0]).map((k) => ({
          key: k,
          label: k.charAt(0).toUpperCase() + k.slice(1),
        }));
        setColumns(cols);
        setRows(responseData);
        toast.success(`${VIEWS[key]} data loaded successfully`);
      } else {
        setColumns([]);
        setRows([]);
        toast.info('No data available for this category');
      }
    } catch (err) {
      // ❌ No need to handle error here → interceptor will show toast automatically
      console.error(err);
      setColumns([]);
      setRows([]);
    } finally {
      setLoading(false);
    }
  };

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
            onClick={() => fetchData(key)}
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
          {loading ? <p>Loading...</p> : <DataTable columns={columns} rows={rows} />}
        </section>
      )}

      {/* 🔔 Toast notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
