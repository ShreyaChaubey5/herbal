// Dashboard/DashboardHome.jsx
import { Leaf, FlaskConical, Factory, Shield, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardHome({ role }) {
  const roleActions = {
    Collector: [
      { icon: <Leaf size={20} />, label: "Record Collection Event", path: "/record-collection" },
    ],
    Lab: [
      { icon: <FlaskConical size={20} />, label: "Upload Lab Test Report", path: "/upload-lab" },
    ],
    Manufacturer: [
      { icon: <Factory size={20} />, label: "Add Processing Step", path: "/processing-step" },
      { icon: <QrCode size={20} />, label: "Generate Product QR", path: "/generate-qr" },
    ],
    "Ayush Ministry": [
      { icon: <Shield size={20} />, label: "Review Compliance Reports", path: "/compliance-reports" },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome, {role} Dashboard 🌿</h2>
      <p className="dashboard-subtitle">
        Here are your quick actions for managing herbal provenance data.
      </p>

      <div className="actions-grid">
        {roleActions[role]?.map((action, index) => (
          <Link to={action.path} key={index} className="action-card">
            <div className="icon">{action.icon}</div>
            <p>{action.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
