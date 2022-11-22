import React from 'react'
import { AboutUs, BestSellerProduct, Blog, Brands, DicountText, Founder, Navbar, OurProducts, ProductQuality, TopBanner } from '../../components/Index'

const LandingPage = () => {
  return (
    <main className='bg-primary'>
        <section>
            <DicountText />
        </section>

        <section>
          <Navbar />
        </section>

        <section>
          <TopBanner />
        </section>


        <section>
          <OurProducts />
        </section>

        <section>
          <BestSellerProduct />
        </section>


        <section>
          <Brands />
        </section>

        <section>
          <AboutUs />
        </section>

        <section>
          <ProductQuality />
        </section>

        <section>
          <Founder />
        </section>

    </main>
  )
}

export default LandingPage