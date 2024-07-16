import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { getAuth } from 'firebase/auth/web-extension'
import { useNavigate, Link } from 'react-router-dom'
import Login from './Login'

const Blogs = () => {
  const auth = getAuth();
  return (

    <>
      <Navbar />
      <Login/>
      <div className="hero ">
        {/* /scroll bar*/}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>


          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ca7c68deddbda50e.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">

              </div>
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f40969b92552b8b4.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bdd9bb733f1c0b71.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" className="d-block w-100 h-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* product section food */}
        <div className="product-section d-flex gap-3 mt-2">
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71wcZ+5MYCL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Farmley Exotics Apricots Dry Fruits | 200g | Apricot, Dried Apricot, Dry Fruits, Apricots,.</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/51R-gcrumcL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Open Secret Premium Pistachios | 200g | Roasted and Salted Pistachios, Dry Fruits,</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/51Uf7XkHMIL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Yogabar Trail Mix - Daily Health Mix 850g - Healthy Trail Mix with Dry Fruits Nuts</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81XUXhHX1yL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">LILA DRY FRUITS Premium Dried Afghani Anjeer Jar Pack | Dried Figs | Rich Source of</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61eMslXEBgL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">NutriOrganics Dry Fruits Premium Seedless Kishmish |Green Raisins Kismis |1kg pack</p>
            </div>
          </div>
        </div>
        {/* product 2 scollbar machines */}
        <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="scroll-product ">
            <div className="scroll-page d-flex  pt-4 mt-2 pb-4 ps-2 gap-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61sS55wJtBL._AC_SY200_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71IaN-YErmL._SX679_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61oLPZ+I6HL._SX679_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61cX4WjiBmL._SX679_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61uy1umzl8L._SX679_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/710UhGWsb9L._AC_SY200_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/512oqfa7i9L._AC_SY200_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61hoCLBdJdL._AC_SY200_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71r85rnsKkL._AC_SY200_.jpg" class="card-img-top w-100 m-0" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71AuLyJxrgL._AC_SY200_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* see more (4 box) */}
        <div className="see-more-section d-flex gap-2">
          <div className="see-more">
            <h4>Appliances for your home | Up to 55% off</h4>
            <div className="box-see-more d-flex">
              <div class="card d-flex" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" class="card-img-top" alt="..." />
                <p>Air conditioners</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" class="card-img-top" alt="..." />
                <p>Refrigerator</p>
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" class="card-img-top" alt="..." />
                <p>Microwave </p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" class="card-img-top" alt="..." />
                <p>washing machine</p>
              </div>
            </div>
            <p><a href="">See more</a></p>
          </div>
          {/* second */}
          <div className="see-more">
            <h4 className='pb-4'>Starting ₹149 | Headphones</h4>
            <div className="box-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" class="card-img-top" alt="..." />
                <p>Starting ₹249 | boAt</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" class="card-img-top" alt="..." />
                <p>Starting ₹349 |boult</p>
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" class="card-img-top" alt="..." />
                <p>Starting ₹649 |Noise</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb_0.5x._SY116_CB553870684_.jpg" class="card-img-top" alt="..." />
                <p>Starting ₹149 |Zebronics</p>
              </div>
            </div>
            <p><a href="">See all Offers</a></p>
          </div>
          {/* third */}
          <div className="see-more">
            <h4>Revamp your home in style</h4>
            <div className="box-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" class="card-img-top" alt="..." />
                <p>Cushion covers, bedsheets & more</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" class="card-img-top" alt="..." />
                <p>Figurines, vases & more</p>
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" class="card-img-top" alt="..." />
                <p>Home storage</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" class="card-img-top" alt="..." />
                <p>Lighting solutions</p>
              </div>
            </div>
            <p><a href="">Explore all</a></p>
          </div>
          {/* fourth */}
          <div className="see-more">
            <h4>Automotive essentials | Up to 60% off</h4>
            <div className="box-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" class="card-img-top" alt="..." />
                <p>Cleaning accessories</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" class="card-img-top" alt="..." />
                <p>Tyre & rim care</p>
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" class="card-img-top" alt="..." />
                <p>Helmets</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" class="card-img-top" alt="..." />
                <p>Vacuum cleaner</p>
              </div>
            </div>
            <p><a href="">See more</a></p>
          </div>
        </div>
        {/* second scrollbar section helmet*/}
        <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
          <div className="scroll-product ">
            <div className="scroll-page2 d-flex  pt-4 mt-2 pb-2 ps-2 gap-3">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61KiRI1GmfL._AC_SY200_.jpg" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/818kmzObgCL._AC_SY200_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SY200_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/51BXMsxaVoL._AC_SY200_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/819Gt9Act8L._AC_SY200_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/613loUzm9WL._AC_SY200_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/41qegnT5ShL._AC_UF480,480_SR480,480_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61QX7+OFqML._SX522_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/41s6xCuou+L._AC_UF480,480_SR480,480_.jpg" class="card-img-top " alt="..." />
                <div class="card-body">
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/41HyNkloEfL._AC_UF480,480_SR480,480_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* procut 2 section cosmatics */}
        <div className="product-section product2 d-flex gap-2 mt-2">
          <div class="card" style={{ width: "13rem" }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41RjZryR9kL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Underarm Roll on </p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/31LegQziMtL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Minimalist Sunscreen</p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/41oIUWxtHlL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Dot & Key Ceramides Moisturizer </p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/311+wtuMn3L._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Dot & Key Watermelon Hyaluronic</p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img id='darma' src="https://m.media-amazon.com/images/I/715tikkLBfL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100" alt="..." />
            <div class="card-body">
              <p class="card-text">Soulflower Rosemary Essential Oil</p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img id='darma' src="https://images-na.ssl-images-amazon.com/images/I/41-finjO0fL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">The Derma Co 10% Vitamin C Face Serum</p>
            </div>
          </div>
          <div class="card" style={{ width: "13rem" }}>
            <img id='foundation' src="https://images-na.ssl-images-amazon.com/images/I/31x5Siz1vyL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">COLORESSENCE HD Foundation </p>
            </div>
          </div>
        </div>

        {/* Product2 section  mens wear*/}
        <div className="product-section d-flex gap-3 mt-2">
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61yWnrT3eQL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body px-5 ">
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹495</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹2,449</span></span>
              <p class="card-text">Men Solid Cotton Blend Straight Kurta Shirt</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71mmZUZ6JbL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body px-5">
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹399</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹999</span></span>
              <p class="card-text">Casual Shirt for Men||Popcorn Shirt for Men||Spread Collar||</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/51j2mBT8iiL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body px-5">
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹457</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹1,457</span></span>
              <p class="card-text">Men's Regular Fit Solid Soft Touch Cotton Casual Shirt with</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71kE75JMKjL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body px-5">
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹479</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹3,999</span></span>
              <p class="card-text">Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/618AldcT9TL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
            <div class="card-body px-5">
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹459</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹1,999</span></span>
              <p class="card-text">Textured Shirts for Men || Casual Shirt for Men || Shirt for</p>
            </div>
          </div>
        </div>

        {/* see more 2 (4 box) */}
        <div className="see-more-section d-flex gap-2">
          <div className="see-more">
            <h4 className='pb-4'>Up to 60% off | Top picks</h4>
            <div className="box-see-more d-flex">
              <div class="card d-flex" style={{ width: "18rem" }}>
                <img style={{ height: "130px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/July/BTF/1st/PC/Shoes-low._SY116_CB554442186_.jpg" class="card-img-top" alt="..." />
                <p>Sports shoes</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "130px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/July/BTF/1st/pcqc2-3-low._SY116_CB554637206_.jpg" class="card-img-top" alt="..." />
                <p>Jewellery & accessories</p>
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "130px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/July/BTF/1st/Pcqc2-4-low._SY116_CB554637206_.jpg" class="card-img-top" alt="..." />
                <p>Watches & smartwatches</p>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "130px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/July/BTF/1st/Pcqc-2-2-low._SY116_CB554637206_.jpg" alt="..." />
                <p>Bags, wallets & luggage</p>
              </div>
            </div>
            <p><a href="">See all offers</a></p>
          </div>
          {/* second */}
          <div className="see-more">
            <h4>Bestsellers in Women's Indian Clothing</h4>
            <div className="box3-see-more d-flex justify-content-center">
              <div class="card " style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71BLkd39VKL._AC_SY170_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61nCJ7mqXFL._AC_SY170_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="box3-see-more d-flex">
              <div class="card women1" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61SgADmAyDL._AC_SY170_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card women2" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/61RnS2ffZjL._AC_SY170_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <p><a href="">See all Offers</a></p>
          </div>
          {/* third */}
          <div className="see-more">
            <h4>Customers’ Most-Loved Fashion for you</h4>
            <div className="box-see-more d-flex">
              <div class="card" style={{ width: "18rem", height: "3rem" }}>
                <img style={{ height: "130px", width: "100px" }} src="https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "130px", width: "100px" }} src="https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="box2-see-more d-flex mt-5">
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "80px", width: "150px" }} src="https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "130px", width: "150px" }} src="https://m.media-amazon.com/images/I/710UZpVTAHL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <p><a href="">Explore all</a></p>
          </div>
          {/* fourth */}
          <div className="see-more">
            <h4>Customers’ Most-Loved products</h4>
            <div className="box-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71NnWe48fBL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71hs7OkrR4L._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <div className="box2-see-more d-flex">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71M5XL6LbFL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img style={{ height: "140px", width: "110px" }} src="https://m.media-amazon.com/images/I/71n5mI4dLjL._AC_SY145_.jpg" class="card-img-top" alt="..." />
              </div>
            </div>
            <p><a href="">See more</a></p>
          </div>
        </div>
        {/* women scroll bar */}
        <div id="carouselExampleDark" class="carousel carousel-light slide" data-bs-ride="carousel">
        <div className="scroll-product ">
          <div className="scroll-page3 d-flex  pt-4 mt-2 pb-4 ps-2 gap-3">
            <div className="product-section d-flex gap-3 mt-2">
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/3128CXXAwOL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Bishop Puff Sleeves Square Neck Slim Top Polyester</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71yZiVNXrVL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Square Neck Short Sleeve Midriff Cross Cotton Stretch</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71kcL71AFjL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">V-Collar Solid Crop Shirt for Women with Half Sleeves</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/81VOXGBGzpL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women Casual Flared Sleeves Printed Top</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/613UNYYYktL._AC_UL480_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Floral Printed Rayon Fitted Regular Fit Crop Top</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71f4K8vlkXL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Puff Sleeves Lining Textured Western Top for Office Women</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71t+-22gFWL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Casual Puff Sleeves Ruffled Collor Foral Top (Large,</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/51dj6aF2FYL._AC_UL480_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Full Sleeves Woven Cotton Casual Top</p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/71MAgnnOupL._AC_UL480_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Casual Regular Sleeves Printed Top,Multicolor </p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="https://m.media-amazon.com/images/I/81+NGQCF+qL._AC_UL480_QL65_.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">Women's Printed Regular Fit Crepe Long Sleeve Classy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
      <Footer />
    </div >
    </>

  )
}

export default Blogs