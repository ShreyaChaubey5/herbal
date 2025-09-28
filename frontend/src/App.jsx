import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoleView from "./components/RoleView";
import CommonDashboard from "./components/CommonDashboard";
import Home from "./Pages/Home";
import Login from "./Auth/Login";

// Pages for quick actions
import RecordCollection from "./Pages/RecordCollection";
import UploadLabReport from "./Pages/UploadLabReport";
import ProcessingStep from "./Pages/ProcessingStep";
import GenerateQR from "./Pages/GenerateQR";
import ComplianceReports from "./Pages/ComplianceReports";

export default function App() {
  const [role, setRole] = useState(null);
  const [qrScanned, setQrScanned] = useState(false); // ⬅️ start false so Home loads first

  return (
    <div className="app-container">
      <Navbar currentRole={role} setRole={setRole} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route
            path="/record-collection"
            element={
              role === "collector" ? (
                <RecordCollection />
              ) : (
                <Login setRole={setRole} />
              )
            }
          />
          <Route
            path="/upload-lab"
            element={
              role === "lab" ? <UploadLabReport /> : <Login setRole={setRole} />
            }
          />
          <Route
            path="/processing-step"
            element={
              role === "manufacturer" ? (
                <ProcessingStep />
              ) : (
                <Login setRole={setRole} />
              )
            }
          />
          <Route
            path="/compliance-reports"
            element={
              role === "ministry" ? (
                <ComplianceReports />
              ) : (
                <Login setRole={setRole} />
              )
            }
          />
          <Route path="/common-dashboard" element={<CommonDashboard />} />
          <Route path="/generate-qr" element={<GenerateQR />} />
        </Routes>
      </main>
    </div>
  );
}
