// src/Pages/GenerateQR.jsx
import { useState } from "react";
import QRCode from "react-qr-code";

export default function GenerateQR() {
  const [formData, setFormData] = useState({
    batchId: "",
    productName: "",
    manufactureDate: "",
    expiryDate: "",
  });

  const [qrData, setQrData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("QR Generation Data:", formData);

    // In a real app, you'd fetch blockchain provenance here
    setQrData(JSON.stringify(formData));

    alert("✅ QR Code Generated Successfully!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">🔗 Generate Product QR Code</h2>
      <form onSubmit={handleSubmit} className="collection-form">
        
        <label>Batch ID</label>
        <input
          type="text"
          name="batchId"
          value={formData.batchId}
          onChange={handleChange}
          required
        />

        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />

        <label>Manufacture Date</label>
        <input
          type="date"
          name="manufactureDate"
          value={formData.manufactureDate}
          onChange={handleChange}
          required
        />

        <label>Expiry Date</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Generate QR
        </button>
      </form>

      {qrData && (
        <div className="qr-section">
          <h3>📱 Scan This QR</h3>
          <QRCode value={qrData} size={200} />
        </div>
      )}
    </div>
  );
}
