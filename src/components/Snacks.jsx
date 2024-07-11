import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Snacks = () => {
  return (
    <>
      <div className="hero snacks-section">
        <Navbar />
        <div className="product-section first-section d-flex gap-3 mt-2" id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81EdhLjCRBL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 m-20 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Beyond Snáck Kerala Banana Chips | 3 Pack Combo, 300g| Original Style, Peri Peri, Sour</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹203</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹70</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71cmAZm0iLL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Kari Kari Chilli Garlic Rice Cracker & Peanut Mix | Crunchy Japanese Snacks |</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹69</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹100</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81t0-RJxAdL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Sunfeast Dark Fantasy Yumfills, 242g/253g, Rich Chocolate Pie Cake</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹115</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹135</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71-0O6rBH2L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Unibic Cookies, Assorted Cookies, 75 G(Pack Of 10)|Biscuits Combo</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹300</b> M.R.P:<span>(₹40/100g)</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/51CazxvAl9L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Haldiram's Nagpur Aloo Bhujia, 350g+50g Extra</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹89</b>(₹22.25/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹90</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        {/* 2 */}
        <div className="product-section d-flex gap-3 mt-2" id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/719XqawNI0L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 m-20 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">SATE Skinny -The Tasty baked Palak Bhujia Sev with 50% Less Oil, 20% Fewer Calories.</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹164</b>(₹82/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹170</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71kOsITKSkL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid " alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Lay's Potato Chips 50g/52g, American Style Cream & Onion Flavour</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹15</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹20</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71fEUbpVseL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Palfrey Roasted 5-Grain Multigrain Mix Super snacks 900g (Plain)</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹699</b>(₹76.68/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹899</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71PS2JMqnlL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Farmley Date Bites I 180 gram I Dates Barfi Made with Dates, Pista, Cashews, Almonds,</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹349</b>(₹173.20/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}></span>400</span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81gly3-JnBL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Sunfeast Dark Fantasy Choco Fills, 275g, Original Filled Cookies with Choco Crème</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹131</b>(₹47.25/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹170</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        {/* 3 */}
        <div className="product-section d-flex gap-3 mt-2" id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61IrX5MY--L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 m-20 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Caprice Classic Delicious Wafer Roll Sticks with Hazelnut and Cocoa Cream</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹149</b>(₹139.57/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹319</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71HKcE1UyKL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid " alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Paper Boat Chikki Jar, Peanut Bar, No Added Preservatives and Colours </p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹308</b>(₹38.50/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹350</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71fMorE9wAL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top mx-5 pt-2 wid2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Farmley Peri Peri Roasted Makhana In Olive Oil, Healthy & Crunchy Snacks 83g</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹192</b> (₹231.33/100g)M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹199</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71g3aGl8I8L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top  mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Haldiram's Nagpur Mini Bhakarwadi, 200g Mini Bhakarwadi</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹64</b>(₹25.60/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹55</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71h3Q0huzIL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">GreenFinity Chia Seeds 300g | Omega-3 Seeds for Eating |</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹142</b>(₹47.33/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹499</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        {/* 4 */}
        <div className="product-section d-flex gap-3 mt-2" id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81x83lBBD4L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 m-20 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Haldiram's Nagpur Whole Tasty Nuts, 200g spicy nuts</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹50</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹60</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71oIQdabJBL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Roasty Tasty Millet Munch Chatpata 200g - Gluten Free Healthy Snacks | Ideal for</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹130</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹140</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61wOOP0E9iL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Britannia 50-50, Maska Chaska, 105 gram 105g , Maska Chaska</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹40</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹50</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61xp7pSWukL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Haldirams Fatafat Bhel, 150g ,spicy and Sour , Fatafat bhel </p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹35</b> M.R.P:<span>(₹23.10/100g)</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71Tey62HA-L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 " alt="..." />
            <div class="card-body text-center">
              <p class="card-text">EAT BETTER CO - Hazelnut & Chocolate Sugar-Free Laddoos</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹399</b>(₹22.25/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹545</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        {/* 5 */}
        <div className="product-section d-flex gap-3 mt-2 " id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/918xlBWxClL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 m-20 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Haldiram's Nagpur Pancharatan Mixture, 150g / 200g (Weight May Vary)</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹80</b>(₹53.33/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹95</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71SjZUrMwsL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid " alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Kurkure Yummy Cheese Puffcorn Namkeen, 28g  Yummy Cheese Puffcorn</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹9</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹10</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/610waH-GFpL._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Tong Garden Imported - Party Snacks Combo, Kernel, 1 KG - (500 Gm X 2)</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹602</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹700</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71HsUXRVc3L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">UNIBIC Pop Crisp I Rice and Beans I Popped Chips I Spice and Herbs I </p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹40</b> M.R.P:<span>(₹100/100g)</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/718+OXiHL-L._AC_UL480_FMwebp_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Cravez Premium Cranberry - 500G | High Antioxidants, Dietary Fiber & No Gluten,</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹489</b>(₹97.80/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹999</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        {/* 6 */}
        <div className="product-section d-flex gap-3 mt-2" id='wid'>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71uoadMXYJL._AC_UL480_QL65_.jpg" class="card-img-top w-100 m-20 pt-2 wid" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Paper Boat Absolute Health Dry Fruits Mix, Premium Trail Mix | Healthy Mixed Nuts</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹1,098</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹1,800</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/61cjIFD5ZHL._AC_UL480_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2 " alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Lo! Foods - Keto South Indian Mixture (2 x 200g) | 3g Net Carb | Keto Snacks Tested </p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px'}}>₹540</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹598</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81HVsMbfnzL._AC_UL480_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Snackible Bestselling Snacks Box | Box of 10 Healthy Snacks | Healthy Gift Box </p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹610</b> M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹700</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/81tmtGCbruL._AC_UL480_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">Weleet Assorted Pack Of Multi Grain,Millet,Ragi & Banana Millet Digestive</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹275</b> M.R.P:<span>(₹76.38/100g)</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71tovyrCHtL._AC_UL480_QL65_.jpg" class="card-img-top w-100 mx-5 pt-2" alt="..." />
            <div class="card-body text-center">
              <p class="card-text">The Crunch Box Warm Caramel Crunch Popcorn Tin - 490 Gms | Perfect for Evenin</p>
              <span style={{ textAlign: 'center' }}> <b style={{ fontSize: '25px' }}>₹489</b>(₹119.25/100g) M.R.P:<span style={{ textDecorationLine: "line-through" }}>₹550</span></span>
              <button style={{width:"100%"}} className='btn btn-warning rounded-5 mt-2'>Add to cart</button>
            </div>
          </div>
         
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Snacks