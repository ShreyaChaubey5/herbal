// src/Pages/ComplianceReports.jsx
import { useState } from "react";

export default function ComplianceReports() {
  const [reports] = useState([
    {
      id: "RPT001",
      batchId: "BATCH1001",
      herb: "Ashwagandha",
      collector: "Collector A",
      complianceStatus: "Compliant",
      remarks: "Geo-fenced, seasonal harvest respected",
      date: "2025-09-20",
    },
    {
      id: "RPT002",
      batchId: "BATCH1002",
      herb: "Tulsi",
      collector: "Collector B",
      complianceStatus: "Non-Compliant",
      remarks: "Harvested outside approved season",
      date: "2025-09-21",
    },
  ]);

  return (
    <div className="form-container">
      <h2 className="form-title">📊 Compliance Reports</h2>
      <p className="dashboard-subtitle">
        Review sustainability & conservation compliance for herbal batches.
      </p>

      <div className="report-table">
        <table>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Batch ID</th>
              <th>Herb</th>
              <th>Collector</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.batchId}</td>
                <td>{r.herb}</td>
                <td>{r.collector}</td>
                <td
                  className={
                    r.complianceStatus === "Compliant"
                      ? "status-compliant"
                      : "status-noncompliant"
                  }
                >
                  {r.complianceStatus}
                </td>
                <td>{r.remarks}</td>
                <td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
