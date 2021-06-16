import React from 'react'
import "./Home.css"
import Product from '../components/commonComponents/Product'

function Home() {
    return (
        <div className="home">
            <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            
            <div className="home__productRow">
                <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" price="80,217" />

                <Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" rating={3} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" price="7,000" />
            </div>

            <div className="home__productRow">
                <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" price="14,000" />

                <Product title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" price="9,825" />

                <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" price="78" />
            </div>

            <div className="home__productRow">
                <Product title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" price="43,848" />

                <Product title="OPPO F19 Pro+ 5G (Space Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" rating={4} image="https://m.media-amazon.com/images/I/71uXmoBZpOL._AC_UL480_FMwebp_QL65_.jpg" price="25,990" />
            </div>
        </div>
    )
}

export default Home
