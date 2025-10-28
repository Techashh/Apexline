import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Import = () => {
  return (
    <div>
      <Header />
       <div class="import-section">
    <h1>IMPORT</h1>
    <div class="breadcrumb">
      <a href="#">Home</a> <span>&gt;</span> <a href="#">Import</a>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Keywords" />
      <button>SEARCH</button>
    </div>
  </div>

  <section class="product-section">
    <h2>CARS, BUSES & TRUCKS</h2>
    <div class="underline"></div>

    <div class="product-grid">
      <div class="product-card">
        <img src="/toyota_camry.jpg" alt="Toyota Camry" />
        <h3>Toyota Camry</h3>
        <p>Reliable and fuel-efficient sedan, ideal for everyday commuting and family use.</p>
      </div>

      <div class="product-card">
        <img src="/honda.jpeg" alt="Honda Accord" />
        <h3>Honda Accord</h3>
        <p>Durable and comfortable car, popular choice among import buyers worldwide.</p>
      </div>

      <div class="product-card">
        <img src="/lexus.jpeg" alt="Lexus RX350" />
        <h3>Lexus </h3>
        <p>Luxury SUV with advanced performance and premium comfort, perfect for export markets.</p>
      </div>

      <div class="product-card">
        <img src="/toyota_bus.jpg"alt="Toyota Hiace Bus" />
        <h3>Toyota Hiace Bus</h3>
        <p>Durable passenger bus suitable for transport businesses and logistics companies.</p>
      </div>


      <div class="product-card">
        <img src="/Grand_cherokee.jpg" alt="Jeep Grand Cherokee" />
        <h3>Jeep Grand Cherokee</h3>
        <p>Powerful and refined SUV known for its luxury interior and excellent off-road capability. Ideal for both city and adventure driving.</p>
      </div>

      <div class="product-card">
        <img src="/range_rover.jpg"alt="Range Rover" />
        <h3>Range Rover</h3>
        <p>Iconic off-roader built for rugged terrains, offering unmatched durability and open-air freedom for outdoor enthusiasts.</p>
      </div>

      <div class="product-card">
        <img src="/corolla.jpeg" alt="Jeep Compass" />
        <h3>Corolla</h3>
        <p>Compact yet bold SUV that blends comfort, advanced technology, and capability for modern-day driving needs.</p>
      </div>


      <div class="product-card">
        <img src="/Mercedes.png" alt="Mercedes Sprinter" />
        <h3>Mercedes-Benz Sprinter</h3>
        <p>High-capacity, long-lasting van for commercial and passenger transport services.</p>
      </div>

      <div class="product-card">
        <img src="/volvo.jpeg"alt="Volvo FH Truck" />
        <h3>Volvo FH</h3>
        <p>Modern freight truck offering top performance, safety, and efficiency for exports.</p>
      </div>

      <div class="product-card">
        <img src="/nissan_caravan.jpg" alt="Nissan Urvan" />
        <h3>Nissan Urvan</h3>
        <p>Versatile 15-seater bus known for durability and comfort on Nigerian roads.</p>
      </div>

      <div class="product-card">
        <img src="/mack_truck.jpg" alt="Mack Truck" />
        <h3>Mack Truck</h3>
        <p>Heavy-duty truck built for industrial transport and long-distance hauling.</p>
      </div>

      <div class="product-card">
        <img src="/Mercedes_actors.png" alt="Mercedes Actros Truck" />
        <h3>Mercedes Actros</h3>
        <p>Powerful commercial truck for logistics, goods transport, and construction materials.</p>
      </div>

     
   
  
    </div>
  </section>
        
        <Footer />
    </div>
  )
}

export default Import
