import { QrCode } from "lucide-react";


export default function CommonDashboard() {
const herbalData = {
medicineName: "AyurDigest Tonic",
herbs: [
{
name: "Ashwagandha",
origin: "Satara, Maharashtra",
uses: ["Stress relief", "Energy booster"],
benefits: ["Improves digestion", "Skin rejuvenation", "Hair strengthening"],
},
{
name: "Tulsi",
origin: "Varanasi, Uttar Pradesh",
uses: ["Respiratory health", "Immunity booster"],
benefits: ["Acne control", "Cold relief", "Detoxification"],
},
{
name: "Amla",
origin: "Indore, Madhya Pradesh",
uses: ["Liver health", "Blood purification"],
benefits: ["Promotes hair growth", "Enhances skin glow", "Boosts metabolism"],
},
],
diseaseCure: ["Indigestion", "Acidity", "Weak Immunity"],
};


return (
<div className="card">
<h2 className="card-title">
<QrCode size={20} /> Medicine Provenance Details
</h2>
<div className="info-card">
<p><b>Medicine Name:</b> {herbalData.medicineName}</p>
<p><b>Used for Curing:</b> {herbalData.diseaseCure.join(", ")}</p>
</div>


<h3 style={{ marginTop: "1rem", color: "#4d5a3f" }}>🌿 Herbal Composition</h3>
<div className="herb-cards">
{herbalData.herbs.map((herb, index) => (
<div key={index} className="herb-card">
<h4>{herb.name}</h4>
<p><b>📍 Origin:</b> {herb.origin}</p>
<p><b>🩺 Uses:</b> {herb.uses.join(", ")}</p>
<p><b>✨ Benefits:</b> {herb.benefits.join(", ")}</p>
</div>
))}
</div>
</div>
);
}