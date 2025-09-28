// src/Pages/Home.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const carouselImages = [
  "/assets/herbal1.jpg",
  "/assets/herb2.jpg",
  "/assets/herb3.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section text-center py-8 bg-beige">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assets/herbal1.jpg"
                className="img-fluid"
                style={{ height: "400px", objectFit: "cover", width:"100%" }}
                alt="herbs"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>🌿 Ayurvedic Herbal Traceability Platform</h5>
                <p>
                  {" "}
                  A blockchain-powered system ensuring{" "}
                  <strong>authenticity</strong>,<strong> sustainability</strong>
                  , and <strong> transparency</strong>
                  in the Ayurvedic herbal supply chain — from farmers to
                  consumers.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="assets/herb3.jpg"
                className="img-fluid"
               style={{ height: "400px", objectFit: "cover", width:"100%" }}
                alt="herbs"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>🌿 Ayurvedic Herbal Traceability Platform</h5>
                <p>
                  {" "}
                  A blockchain-powered system ensuring{" "}
                  <strong>authenticity</strong>,<strong> sustainability</strong>
                  , and <strong> transparency</strong>
                  in the Ayurvedic herbal supply chain — from farmers to
                  consumers.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="assets/herb6.jpeg"
                className="img-fluid"
               style={{ height: "400px", objectFit: "cover", width:"100%" }}
                alt="herbs"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>🌿 Ayurvedic Herbal Traceability Platform</h5>
                <p>
                  {" "}
                  A blockchain-powered system ensuring{" "}
                  <strong>authenticity</strong>,<strong> sustainability</strong>
                  , and <strong> transparency</strong>
                  in the Ayurvedic herbal supply chain — from farmers to
                  consumers.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="hero-actions flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Link
            to="/common-dashboard"
            className="scan-btn px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            📱 Scan QR to Verify Medicine
          </Link>
          <Link
            to="/record-collection"
            className="secondary-btn px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            👨‍🌾 Join as Collector
          </Link>
        </div>
      </section>

      {/* Roles Section */}
      <section className="roles-section px-4 md:px-8 py-12">
        <h2 className="section-title text-2xl font-bold text-center mb-8">
          Stakeholder Access
        </h2>
        <div className="roles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/record-collection"
            className="role-card p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">👨‍🌾 Collector</h3>
            <p>Record herbal collection events with geo-tagging.</p>
          </Link>
          <Link
            to="/upload-lab"
            className="role-card p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">🧪 Lab</h3>
            <p>Upload test results for quality & authentication.</p>
          </Link>
          <Link
            to="/processing-step"
            className="role-card p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">🏭 Manufacturer</h3>
            <p>Add processing steps and generate product QR codes.</p>
          </Link>
          <Link
            to="/compliance-reports"
            className="role-card p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">🏛️ Ayush Ministry</h3>
            <p>Review compliance & sustainability reports.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
