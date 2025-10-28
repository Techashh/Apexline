import React, { useEffect, useRef } from "react";
import { FaHandshake } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidFileImport } from "react-icons/bi";
import { TiExport } from "react-icons/ti";
import { GiShoppingBag } from "react-icons/gi";
import { LuShip } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Swiper from "swiper";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";

// Import Swiper core styles + your custom styles
import "swiper/css";
import "swiper/css/navigation";


const Herosection = () => {

  // hero secttion slider begins
  const swiperRef = useRef(null);
  const interleaveOffset = 0.5;
   useEffect(() => {
    // Register Swiper modules
    Swiper.use([Navigation, Keyboard, Mousewheel]);

    // Initialize Swiper
    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheel: { forceToAxis: true },
      keyboard: { enabled: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // Interleave animation logic
      on: {
        progress: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            const slideProgress = swiper.slides[i].progress;
            const innerOffset = swiper.width * interleaveOffset;
            const innerTranslate = slideProgress * innerOffset;
            const inner = swiper.slides[i].querySelector(".slide-inner");
            if (inner) {
              inner.style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
            }
          }
        },
        touchStart: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = `${speed}ms`;
            const inner = swiper.slides[i].querySelector(".slide-inner");
            if (inner) inner.style.transition = `${speed}ms`;
          }
        },
      },
    });
    // Cleanup on unmount
    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  //hero section slider //
  // const services = [
  //   {
  //     title: "OCEAN FREIGHT SHIPPING",
  //     description:
  //       "Reliable sea freight solutions connecting major ports worldwide with speed and safety.",
  //     image: "/images/ship.jpg",
  //   },
  //   {
  //     title: "AIR FREIGHT SHIPPING",
  //     description:
  //       "Fast and secure air cargo transport for urgent and high-value shipments.",
  //     image: "/images/air.jpg",
  //   },
  //   {
  //     title: "CAR SHIPPING",
  //     description:
  //       "Professional vehicle transport services with full tracking and insurance.",
  //     image: "/images/truck.jpg",
  //   },
  // ];

  return (
    <>
      {/* new */}
 <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="slide-inner">
              <h2>Welcome to Our Website</h2>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="slide-inner">
              <h2>Beautiful Design, Powerful Code</h2>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="slide-inner">
              <h2>Scroll, Swipe, and Enjoy</h2>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>


      {/* <div className='ovalay'></div>
      <div className="herosection">
        <section className="hero">
          <div className="hero-content">
            <h1>Connecting <span> Businesses</span> Across Borders</h1>
            <p>
              We provide reliable import and export solutions that move your goods
              swiftly and safely — empowering your business to grow globally with
              ease.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get a Quote</button>
              <button className="btn-secondary">Explore Services</button>
            </div>
          </div>
        </section>
      </div> */}

      {/* ABOUT SECTION */}
      <section className="features">
        <div className="section-title">
          <h2>About <span>Us</span></h2>
        </div>
        <div className="features-container">
          <div className="feature">
            <h3>Global Reach</h3>
            <p>Extensive network of partners worldwide.</p>
          </div>
          <div className="feature">
            <h3>Reliable Service</h3>
            <p>Trusted by businesses for timely deliveries.</p>
          </div>
          <div className="feature">
            <h3>Custom Solutions</h3>
            <p>Tailored logistics to fit your needs.</p>
          </div>
        </div>
        <div className="features-container">
          <div className="feature">
            <h3>Freight Forwarding</h3>
            <p>Comprehensive freight solutions by air, sea, and land.</p>
          </div>
          <div className="feature">
            <h3>Customs Brokerage</h3>
            <p>Expert handling of customs documentation and compliance.</p>
          </div>
          <div className="feature">
            <h3>Warehousing</h3>
            <p>Secure storage facilities with inventory management.</p>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION */}
      <section className="our_services">
        <h2>Our <span>Services</span></h2>
        <p>We provide efficient and reliable logistics solutions across air, sea, and land transport.</p>

        <div className="services-grid">
          <div className="service-card">
            <img src=" /best_sea.jpg" alt="Ocean Freight" />
            <div className="service-content">
              <h3>OCEAN FREIGHT SHIPPING</h3>
              <p>Reliable sea freight solutions connecting major ports worldwide.</p>
              <a href="#" className="read-more">READ MORE →</a>
            </div>
          </div>

          <div className="service-card">
            <img src=" /plane-at-gate.webp" alt="Air Freight" />
            <div className="service-content">
              <h3>AIR FREIGHT SHIPPING</h3>
              <p>Fast and secure air cargo transport for urgent shipments.</p>
              <a href="#" className="read-more">READ MORE →</a>
            </div>
          </div>

          <div className="service-card">
            <img src="/Truck-Freight-Shipping-Step-by-Step-Process.jpg" alt="Car Shipping" />
            <div className="service-content">
              <h3>CAR SHIPPING</h3>
              <p>Professional vehicle transport services with full tracking and insurance.</p>
              <a href="#" className="read-more">READ MORE →</a>
            </div>
          </div>
        </div>
      </section>


      <section class="what-i-do">
        <h2>WHAT I DO</h2>
        <div class="underline"></div>

        <div class="services">
          <div class="service-box">
            <h3>IMPORT</h3>
            <p>
              We import premium food products like rice, cooking oil, flour, and canned goods from reliable global suppliers. Our import services ensure Nigerians have access to quality, affordable, and safe food items that meet international standards.
            </p>
            <div class="icon">
              <i class="fa-solid fa-ship"> <BiSolidFileImport /></i>
            </div>
          </div>

          <div class="service-box">
            <h3>BUY</h3>
            <p>
              We source and buy agricultural products directly from trusted local farmers and distributors. This helps sustain Nigeria’s agricultural sector while guaranteeing that only the best food items are prepared for export and local sales.
            </p>
            <div class="icon">
              <i class="fa-solid fa-cart-shopping"><FaShoppingCart /></i>
            </div>
          </div>

          <div class="service-box">
            <h3>EXPORT</h3>
            <p>
              Our export services connect Nigerian food products like garri, palm oil, dried fish, melon seeds, and yam flour to international markets. We handle logistics, packaging, and documentation to make overseas trading smooth and secure.
            </p>
            <div class="icon">
              <i class="fa-solid fa-plane-departure"><TiExport /></i>
            </div>
          </div>

          <div class="service-box">
            <h3>SALES</h3>
            <p>
              We supply imported and local foodstuffs to wholesalers, supermarkets, and retail outlets across Nigeria. Through our strong distribution network, we ensure timely delivery and consistent product quality.
            </p>
            <div class="icon">
              <i class="fa-solid fa-bag-shopping"><GiShoppingBag /></i>
            </div>
          </div>
        </div>
      </section>



      {/* THE BEST SEA & AIR FREIGHT SECTION */}
      <div className='ovalays'>
        <section className='best_sea'>
          <p>We provide</p>
          <h1>THE BEST SEA AND AIR FREIGHT SERVICES</h1>
          <p className='shipping'>For Book Your Shipping From any Country</p>
          <button>Contact with us</button>
        </section>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <section>
        <div className="why-choose">
          <div className="why-choose-container">
            <div className="why-left">
              <img src="/why-choose-us.jpg" alt="Handshake" />
            </div>

            <div className="why-middle">
              <h2>WHY CHOOSE US?</h2>
              <div className="underline"></div>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour.
              </p>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, making it look like readable English.
              </p>
              <a href="#" className="read-more">READ MORE →</a>
            </div>

            <div className="why-right">
              <div className="featuress">
                <div className="icon"><FaHandshake /></div>
                <p>WE ARE TRUSTED</p>
              </div>
              <div className="featuress">
                <div className="icon"><FaUnlock /></div>
                <p>THE BEST SECURITY</p>
              </div>
              <div className="featuress">
                <div className="icon"><AiTwotoneLike /></div>
                <p>100% GUARANTEE</p>
              </div>
              <div className="featuress">
                <div className="icon"><FaLocationDot /></div>
                <p>QUICK LOCATION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Herosection
