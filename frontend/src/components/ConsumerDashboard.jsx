import { QrCode } from "lucide-react";


export default function ConsumerDashboard() {
return (
<div className="card">
<h2 className="card-title">
<QrCode size={20} /> Herbal Provenance Details
</h2>
<ul className="card-list">
<li>🌱 <b>Origin Farm:</b> Satara, Maharashtra</li>
<li>📍 <b>Geo-Coordinates:</b> 17.6800° N, 73.9850° E</li>
<li>🧪 <b>Lab Test:</b> DNA verified, pesticide safe</li>
<li>🏭 <b>Processed At:</b> Herbal Life Processing Unit, Pune</li>
<li>✅ <b>Sustainability:</b> Fair-trade, NMPB certified</li>
</ul>
</div>
);
}