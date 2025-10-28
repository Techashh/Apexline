import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Exportcomponent = () => {
  return (
    <div>
        <Header/>

       <div class="export-section">
    <h1>EXPORT</h1>
    <div class="breadcrumb">
      <a href="#">Home</a> <span>&gt;</span> <a href="#">export</a>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Keywords" />
      <button>SEARCH</button>
    </div>
  </div>

  <section class="product-section">
    <h2>FOOD AND BEVERAGE</h2>
    <div class="underline"></div>

    <div class="product-grid">
      <div class="product-card">
        <img src="/public/driedcatfish.jpg" alt="Dried Catfish" />
        <h3>Dried Catfish</h3>
        <p>Premium sun-dried Nigerian catfish, rich in flavor and perfect for soups and stews.</p>
      </div>

      <div class="product-card">
        <img src="/public/palm-oil-food.jpg" alt="Palm Oil"/>
        <h3>Palm Oil</h3>
        <p>Pure, natural red palm oil from Nigeria — used for cooking and export worldwide.</p>
      </div>

      <div class="product-card">
        <img src="/public/garri-cassava-flakes.png" alt="Garri" />
        <h3>Garri (Cassava Flakes)</h3>
        <p>High-quality garri made from fresh cassava, great for soaking or cooking.</p>
      </div>

      <div class="product-card">
        <img src="/public/yamflour.jpeg" alt="Yam Flour" />
        <h3>Yam Flour (Elubo)</h3>
        <p>Finely processed yam flour used in making amala — a favorite Nigerian meal.</p>
      </div>

      <div class="product-card">
        <img src="/public/ogbona-seeds.png" alt="Ogbono Seeds" />
        <h3>Ogbono Seeds</h3>
        <p>Authentic ogbono seeds sourced from local Nigerian farmers for export.</p>
      </div>

      <div class="product-card">
        <img src="/public/crayfish.png" alt="Crayfish" />
        <h3>Crayfish</h3>
        <p>Clean, dried crayfish — a key ingredient in many Nigerian dishes.</p>
      </div>

      <div class="product-card">
        <img src="/public/melon_seeds.jpg"  alt="Egusi" />
        <h3>Melon Seeds (Egusi)</h3>
        <p>High-grade melon seeds used in making egusi soup, a Nigerian delicacy.</p>
      </div>

      <div class="product-card">
        <img src="/public/dried_pepper.png" nalt="Dried Pepper" />
        <h3>Dried Pepper Mix</h3>
        <p>A mix of dried chili and bell peppers for rich, spicy Nigerian meals.</p>
      </div>

      <div class="product-card">
        <img src="/public/honey.jpg" alt="Honey" />
        <h3>Honey</h3>
        <p>Freshly dried bitter leaves used in traditional Nigerian soups.</p>
      </div>

      <div class="product-card">
        <img src="/public/cashew_nut.jpeg" alt="Cashew Nut" />
        <h3>Cashew Nut</h3>
        <p>Crispy, delicious plantain chips made from ripe and unripe plantains.</p>
      </div>

      <div class="product-card">
        <img src="/public/millet.jpeg" alt="Millet Flour" />
        <h3>Millet Flour</h3>
        <p>Dried hibiscus leaves for making zobo drink, popular across Nigeria.</p>
      </div>

      <div class="product-card">
        <img src="/public/Groundnut.jpg"  alt="Groundnut" />
        <h3>Groundnut (Peanuts)</h3>
        <p>Roasted or raw groundnuts, freshly packed for local and international supply.</p>
      </div>
    </div>
  </section>

       
        <Footer />
      
    </div>
  )
}

export default Exportcomponent



