
// export default function RoleView({ role }) {
// switch (role) {
// case "Collector":
// return <div className="role-view">📍 Collector Portal: Record new Collection Events with geo-tag & quality data.</div>;
// case "Lab":
// return <div className="role-view">🧪 Lab Dashboard: Upload Quality Test reports (moisture, pesticide, DNA).</div>;
// case "Manufacturer":
// return <div className="role-view">🏭 Manufacturer Dashboard: Manage Processing Steps & generate batch QR codes.</div>;
// case "Ayush Ministry":
// return <div className="role-view">⚖️ Ministry Portal: Review compliance, sustainability & export certifications.</div>;
// default:
// return null;
// }
// }
// components/RoleView.jsx
import DashboardHome from "../Dashboard/DashboardHome";

export default function RoleView({ role }) {
  if (!role) {
    return (
      <div className="no-role">
        <p>Please select a role to continue.</p>
      </div>
    );
  }

  return (
    <div className="role-view">
      <DashboardHome role={role} />
    </div>
  );
}
