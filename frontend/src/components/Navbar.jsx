import { Leaf, FlaskConical, Factory, Shield } from "lucide-react";


export default function Navbar({ currentRole, setRole }) {
const roles = [
{ name: "Collector", icon: <Leaf size={18} /> },
{ name: "Lab", icon: <FlaskConical size={18} /> },
{ name: "Manufacturer", icon: <Factory size={18} /> },
{ name: "Ayush Ministry", icon: <Shield size={18} /> },
];


return (
<nav className="navbar">
<h1 className="logo">🌿 AyurTrace</h1>
<div className="role-buttons">
{roles.map((role) => (
<button
key={role.name}
onClick={() => setRole(role.name)}
className={`role-btn ${currentRole === role.name ? "active" : ""}`}
>
{role.icon} {role.name}
</button>
))}
</div>
</nav>
);
}