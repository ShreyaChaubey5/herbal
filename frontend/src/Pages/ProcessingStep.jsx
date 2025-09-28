// src/Pages/ProcessingStep.jsx
import { useState } from "react";

export default function ProcessingStep() {
  const [formData, setFormData] = useState({
    batchId: "",
    stepName: "",
    description: "",
    date: "",
    storageConditions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing Step Data:", formData);

    // TODO: Send to blockchain backend
    alert("✅ Processing Step Recorded Successfully!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">🏭 Add Processing Step</h2>
      <form onSubmit={handleSubmit} className="collection-form">
        
        <label>Batch ID</label>
        <input
          type="text"
          name="batchId"
          value={formData.batchId}
          onChange={handleChange}
          required
        />

        <label>Processing Step Name</label>
        <input
          type="text"
          name="stepName"
          placeholder="Drying / Grinding / Storage"
          value={formData.stepName}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Details of process..."
          value={formData.description}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Storage Conditions</label>
        <input
          type="text"
          name="storageConditions"
          placeholder="Temperature, humidity, etc."
          value={formData.storageConditions}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Save Processing Step
        </button>
      </form>
    </div>
  );
}
