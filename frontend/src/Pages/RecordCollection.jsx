import { useState } from "react";

export default function RecordCollection() {
  const [formData, setFormData] = useState({
    collectorId: "",
    herbName: "",
    origin: "",
    quantity: "",
    harvestDate: "",
    species: "",
    qualityMetrics: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Collection Event Data:", formData);

    // Here you can send data to blockchain backend via API
    alert("✅ Collection Event Recorded Successfully!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">📍 Record Collection Event</h2>
      <form onSubmit={handleSubmit} className="collection-form">
        
        <label>Collector ID / Name</label>
        <input
          type="text"
          name="collectorId"
          value={formData.collectorId}
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

        <label>Origin (GPS / Location)</label>
        <input
          type="text"
          name="origin"
          placeholder="Latitude, Longitude or Village Name"
          value={formData.origin}
          onChange={handleChange}
          required
        />

        <label>Quantity Collected (kg)</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <label>Harvest Date & Time</label>
        <input
          type="datetime-local"
          name="harvestDate"
          value={formData.harvestDate}
          onChange={handleChange}
          required
        />

        <label>Species Identification</label>
        <input
          type="text"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
        />

        <label>Initial Quality Metrics</label>
        <textarea
          name="qualityMetrics"
          placeholder="Moisture: 12%, Color: Greenish, Freshness: Good"
          value={formData.qualityMetrics}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Save Collection Event
        </button>
      </form>
    </div>
  );
}
