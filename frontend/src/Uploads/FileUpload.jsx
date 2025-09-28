import { useState } from "react";

export default function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // preview for images
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(uploadedFile);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    // Mock upload (replace with backend API call)
    console.log("Uploading:", file.name);
    if (onUpload) onUpload(file);
    alert("✅ File uploaded successfully!");
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="upload-container">
      <h3 className="upload-title">📂 Upload File</h3>
      <input type="file" onChange={handleFileChange} />

      {preview && (
        <div className="upload-preview">
          <p>Preview:</p>
          <img src={preview} alt="preview" />
        </div>
      )}

      {file && <p className="file-name">Selected: {file.name}</p>}

      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>
    </div>
  );
}
