
import { useState } from "react";
import FileUpload from "../Uploads/FileUpload";

export default function UploadLabReport() {
  const [formData, setFormData] = useState({
    batchId: "",
    herbName: "",
    moisture: "",
    pesticide: "",
    dnaBarcode: "",
    reportFile: null,
    remarks: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload via reusable FileUpload component
  const handleFileUpload = (file) => {
    setFormData({ ...formData, reportFile: file });
    console.log("Lab report uploaded:", file.name);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.reportFile) {
      alert("⚠️ Please upload a lab certificate PDF before submitting.");
      return;
    }

    console.log("Lab Report Data:", formData);

    // TODO: send formData to backend / blockchain API
    alert("✅ Lab Report Uploaded Successfully!");

    // Reset form
    setFormData({
      batchId: "",
      herbName: "",
      moisture: "",
      pesticide: "",
      dnaBarcode: "",
      reportFile: null,
      remarks: "",
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">🧪 Upload Lab Test Report</h2>
      <form onSubmit={handleSubmit} className="collection-form">
        <label>Batch ID</label>
        <input
          type="text"
          name="batchId"
          value={formData.batchId}
          onChange={handleChange}
          required
        />

        <label>Herb Name</label>
        <input
          type="text"
          name="herbName"
          value={formData.herbName}
          onChange={handleChange}
          required
        />

        <label>Moisture Content (%)</label>
        <input
          type="number"
          step="0.01"
          name="moisture"
          value={formData.moisture}
          onChange={handleChange}
          required
        />

        <label>Pesticide Residue Analysis</label>
        <input
          type="text"
          name="pesticide"
          placeholder="Pass / Fail or detailed results"
          value={formData.pesticide}
          onChange={handleChange}
          required
        />

        <label>DNA Barcode Test</label>
        <input
          type="text"
          name="dnaBarcode"
          placeholder="Authentication Result"
          value={formData.dnaBarcode}
          onChange={handleChange}
          required
        />

        <label>Upload Certificate (PDF)</label>
        <FileUpload onUpload={handleFileUpload} />

        <label>Remarks</label>
        <textarea
          name="remarks"
          placeholder="Additional comments by lab"
          value={formData.remarks}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Submit Lab Report
        </button>
      </form>
    </div>
  );
}
