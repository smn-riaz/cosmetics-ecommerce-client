import React from 'react'
import { AboutUs, BestSellerProduct, Blog, Brands, Features, FindBeauty, Footer, Founder, Navbar, NewProducts, OurProducts, ProductQuality, ProductTypes, Testimonials, TopBanner } from '../../components/Index'

const LandingPage = () => {
  return (
    <main className='bg-primary'>
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
          <ProductTypes />
        </section>
 
        <section>
          <Founder />
        </section>

        <section>
          <Features />
        </section>


         <section>
          <FindBeauty />
        </section>

        <section>
          <NewProducts />
        </section>

    

        <section>
          <Blog />
        </section>


         <section>
          <Footer />
        </section>
        
    </main>
  )
}

export default LandingPage