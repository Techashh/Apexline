import React, { useState } from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { BiSolidFileImport } from "react-icons/bi";
import { TiExport } from "react-icons/ti";
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("whatido");

  return (
    <div>
      <Header />

      {/* Top Import Banner */}
      <div className="import-section">
        <h1>IMPORT</h1>
        <div className="breadcrumb">
          <a href="#">Home</a> <span>&gt;</span> <a href="#">Import</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Keywords" />
          <button>SEARCH</button>
        </div>
      </div>

      {/* Main Switch Section */}
      <div className="container">
        {/* Sidebar Tabs */}
        <div className="sidebar">
          <button
            className={activeTab === "whatido" ? "active" : ""}
            onClick={() => setActiveTab("whatido")}
          >
            WHAT I DO
          </button>

          <button
            className={activeTab === "mission" ? "active" : ""}
            onClick={() => setActiveTab("mission")}
          >
            MY MISSION
          </button>

          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            MY VISION
          </button>

          <button
            className={activeTab === "goal" ? "active" : ""}
            onClick={() => setActiveTab("goal")}
          >
            MY GOAL
          </button>
        </div>

        {/* Dynamic Content Section */}
        <div className="main-content">
          {activeTab === "whatido" && (
            <section className="what-i-do">
              <img src="/whatido_cargo.jpg" alt="Port and Cargo" />
              <h2>WHAT I DO</h2>
              <p>
                At <strong>Apexline Import and Export</strong>, we build strong
                international trade connections through quality import and export services.
              </p>

              <div className="services">
                {/* IMPORT */}
                <div className="service-box">
                  <h3>IMPORT</h3>
                  <p>
                    We import premium food items guaranteeing safety and international standards.
                  </p>
                  <div className="icon">
                    <BiSolidFileImport />
                  </div>
                </div>

                {/* BUY */}
                <div className="service-box">
                  <h3>BUY</h3>
                  <p>
                    We buy locally from farmers to support Nigeria’s agricultural sector.
                  </p>
                  <div className="icon">
                    <FaShoppingCart />
                  </div>
                </div>

                {/* EXPORT */}
                <div className="service-box">
                  <h3>EXPORT</h3>
                  <p>
                    We export Nigerian food products globally with smooth logistics.
                  </p>
                  <div className="icon">
                    <TiExport />
                  </div>
                </div>

                {/* SALES */}
                <div className="service-box">
                  <h3>SALES</h3>
                  <p>
                    We distribute imported and local foodstuffs across Nigeria.
                  </p>
                  <div className="icon">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "mission" && (
            <div>
              <h2>MY MISSION</h2>
              <p>
                To connect local producers to global markets while importing quality goods
                to improve industries and livelihoods.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <h2>MY VISION</h2>
              <p>
                To become Africa’s most trusted, efficient and innovative trade partner globally.
              </p>
            </div>
          )}

          {activeTab === "goal" && (
            <div>
              <h2>MY GOAL</h2>
              <p>
                To simplify cross-border trade for businesses and boost Nigeria’s economic growth.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
