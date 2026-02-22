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
        <h1>ABOUT US</h1>
          <div className="import-section-inner">
        <div className="breadcrumb">
          <a href="#">Home</a> <span>&gt;</span> <a href="#">About Us</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Keywords" />
          <button>SEARCH</button>
        </div>
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
             <h2>Our Core Operations at Apexline Import and Export</h2>
              <p className='p'> At <strong>Apexline Import and Export</strong>, we specialize in creating strong international trade connections that empower businesses to thrive beyond borders. 
              Our focus is on exporting high-quality agricultural produce, foodstuffs, and raw materials from Nigeria to countries around the world, while also importing essential goods, equipment,
               and innovative products that support industries and improve livelihoods locally. 
               We handle every stage of the process from sourcing and packaging to shipping, documentation, and customs clearance — ensuring a smooth and transparent trade experience for all our clients. 
               With Apexline, businesses gain a trusted logistics partner that values efficiency, quality, and integrity. 
                Our operations are driven by a vision to make global trading simpler, faster, and more reliable. We connect local producers to international buyers, open access to global markets,
                 and contribute to the sustainable growth of the Nigerian economy. Whether you are looking to import essential products or export premium goods, Apexline delivers a seamless, professional, and dependable solution every time. </p>
           
          <section class="what-i-do">
        <h2>WHAT I DO</h2>
        <div class="underline"></div>
        </section>

              <div className="services">
                {/* IMPORT */}

                <div className="service-box">
                  <h3>IMPORT</h3>
                  <p className='p'>
                    We import premium food products like rice, cooking oil, flour, and canned goods from reliable global suppliers. Our import services ensure Nigerians have access to quality, affordable, and safe food items that meet international standards.
                  </p>
                  <div className="icon">
                    <BiSolidFileImport />
                  </div>
                </div>

                {/* BUY */}
                <div className="service-box">
                  <h3>BUY</h3>
                  <p className='p'>
                    We source and buy agricultural products directly from trusted local farmers and distributors. This helps sustain Nigeria’s agricultural sector while guaranteeing that only the best food items are prepared for export and local sales.
                  </p>
                  <div className="icon">
                    <FaShoppingCart />
                  </div>
                </div>

                {/* EXPORT */}
                <div className="service-box">
                  <h3>EXPORT</h3>
                  <p className='p'>
                   Our export services connect Nigerian food products like garri, palm oil, dried fish, melon seeds, and yam flour to international markets. We handle logistics, packaging, and documentation to make overseas trading smooth and secure.
                  </p>
                  <div className="icon">
                    <TiExport />
                  </div>
                </div>

                {/* SALES */}
                <div className="service-box">
                  <h3>SALES</h3>
                  <p className='p'>We supply imported and local foodstuffs to wholesalers, supermarkets, and retail outlets across Nigeria. Through our strong distribution network, we ensure timely delivery and consistent product quality.                  </p>
                  <div className="icon">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "mission" && (
            <div>
              <img src="/mission.jpg" alt="Port and Cargo" />
              <h2>Our Mission at Apexline Import and Export</h2>
<p className='p'>
  At <strong>Apexline Import and Export</strong>, our mission is to strengthen global trade systems by enabling businesses in Nigeria and beyond to access high-quality products with ease and confidence.
  We are committed to building a seamless channel for imports that support local industries while helping exporters reach profitable international markets.
  <br />
  By leveraging innovation, strong partnerships, and ethical business practices, we strive to deliver value at every stage of the supply chain.
  <br />
  Our mission is to ensure that every client enjoys reliable service, affordable logistics, and a transparent trading experience that promotes growth and sustainability.
</p>
 <section class="what-i-do">
        <h2>WHAT I DO</h2>
        <div class="underline"></div>
        </section>
<div className="services">
                {/* IMPORT */}
                <div className="service-box">
                  <h3>IMPORT</h3>
                  <p className='p'>
                    We import premium food products like rice, cooking oil, flour, and canned goods from reliable global suppliers. Our import services ensure Nigerians have access to quality, affordable, and safe food items that meet international standards.
                  </p>
                  <div className="icon">
                    <BiSolidFileImport />
                  </div>
                </div>

                {/* BUY */}
                <div className="service-box">
                  <h3>BUY</h3>
                  <p className='p'>
                    We source and buy agricultural products directly from trusted local farmers and distributors. This helps sustain Nigeria’s agricultural sector while guaranteeing that only the best food items are prepared for export and local sales.
                  </p>
                  <div className="icon">
                    <FaShoppingCart />
                  </div>
                </div>

                {/* EXPORT */}
                <div className="service-box">
                  <h3>EXPORT</h3>
                  <p className='p'>
                   Our export services connect Nigerian food products like garri, palm oil, dried fish, melon seeds, and yam flour to international markets. We handle logistics, packaging, and documentation to make overseas trading smooth and secure.
                  </p>
                  <div className="icon">
                    <TiExport />
                  </div>
                </div>

                {/* SALES */}
                <div className="service-box">
                  <h3>SALES</h3>
                  <p className='p'>We supply imported and local foodstuffs to wholesalers, supermarkets, and retail outlets across Nigeria. Through our strong distribution network, we ensure timely delivery and consistent product quality.                  </p>
                  <div className="icon">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>

            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <img src="/vission.jpg" alt="Port and Cargo" />
             <h2>Our Vision at Apexline Import and Export</h2>
<p className='p'>
  Our vision is to become a globally recognized leader in the import and export sector — a brand known for excellence, trust, and meaningful economic impact.
  We aspire to continually expand Africa’s footprint in international markets by increasing access to global trade opportunities for businesses of all sizes.
  <br />
  Through innovation, advanced logistics, and unwavering integrity, we aim to simplify worldwide trading and become the most preferred bridge between Nigeria and the global economy.
</p>
 <section class="what-i-do">
        <h2>WHAT I DO</h2>
        <div class="underline"></div>
        </section>
<div className="services">
                {/* IMPORT */}
                <div className="service-box">
                  <h3>IMPORT</h3>
                  <p className='p'>
                    We import premium food products like rice, cooking oil, flour, and canned goods from reliable global suppliers. Our import services ensure Nigerians have access to quality, affordable, and safe food items that meet international standards.
                  </p>
                  <div className="icon">
                    <BiSolidFileImport />
                  </div>
                </div>

                {/* BUY */}
                <div className="service-box">
                  <h3>BUY</h3>
                  <p className='p'>
                    We source and buy agricultural products directly from trusted local farmers and distributors. This helps sustain Nigeria’s agricultural sector while guaranteeing that only the best food items are prepared for export and local sales.
                  </p>
                  <div className="icon">
                    <FaShoppingCart />
                  </div>
                </div>

                {/* EXPORT */}
                <div className="service-box">
                  <h3>EXPORT</h3>
                  <p className='p'>
                   Our export services connect Nigerian food products like garri, palm oil, dried fish, melon seeds, and yam flour to international markets. We handle logistics, packaging, and documentation to make overseas trading smooth and secure.
                  </p>
                  <div className="icon">
                    <TiExport />
                  </div>
                </div>

                {/* SALES */}
                <div className="service-box">
                  <h3>SALES</h3>
                  <p className='p'>We supply imported and local foodstuffs to wholesalers, supermarkets, and retail outlets across Nigeria. Through our strong distribution network, we ensure timely delivery and consistent product quality.                  </p>
                  <div className="icon">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "goal" && (
            <div>
              <img src="/goal.jpg" alt="Port and Cargo" />
            <h2>Our Business Goals at Apexline Import and Export</h2>
<p className='p'>
  Our primary goal is to unlock global value for local products while ensuring Nigerians have steady access to essential imports.
  We aim to continually enhance our supply chain operations, promote fair trade, and build long-lasting partnerships across continents.
  <br />
  By focusing on efficiency, customer satisfaction, and sustainable practices, Apexline seeks to drive national economic development and set a new standard for international trading excellence.
</p>
 <section class="what-i-do">
        <h2>WHAT I DO</h2>
        <div class="underline"></div>
        </section>
<div className="services">
                {/* IMPORT */}
                <div className="service-box">
                  <h3>IMPORT</h3>
                  <p className='p'>
                    We import premium food products like rice, cooking oil, flour, and canned goods from reliable global suppliers. Our import services ensure Nigerians have access to quality, affordable, and safe food items that meet international standards.
                  </p>
                  <div className="icon">
                    <BiSolidFileImport />
                  </div>
                </div>

                {/* BUY */}
                <div className="service-box">
                  <h3>BUY</h3>
                  <p className='p'>
                    We source and buy agricultural products directly from trusted local farmers and distributors. This helps sustain Nigeria’s agricultural sector while guaranteeing that only the best food items are prepared for export and local sales.
                  </p>
                  <div className="icon">
                    <FaShoppingCart />
                  </div>
                </div>

                {/* EXPORT */}
                <div className="service-box">
                  <h3>EXPORT</h3>
                  <p className='p'>
                   Our export services connect Nigerian food products like garri, palm oil, dried fish, melon seeds, and yam flour to international markets. We handle logistics, packaging, and documentation to make overseas trading smooth and secure.
                  </p>
                  <div className="icon">
                    <TiExport />
                  </div>
                </div>

                {/* SALES */}
                <div className="service-box">
                  <h3>SALES</h3>
                  <p className='p'>We supply imported and local foodstuffs to wholesalers, supermarkets, and retail outlets across Nigeria. Through our strong distribution network, we ensure timely delivery and consistent product quality.                  </p>
                  <div className="icon">
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
