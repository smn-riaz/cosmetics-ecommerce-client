import React from 'react'
import prq1 from '../assets/prq1.png'
import prq2 from '../assets/prq2.png'
import prq3 from '../assets/prq3.png'
import prq4 from '../assets/prq4.png'
import brandbg from '../assets/brandbg.jpg'
import styles from '../styles/styles'


const ProductQuality = () => {
  const productQualities = [
    {
      image: prq1,
    },
    {
      image: prq2,
    },
    {
      image: prq3,
    },
    {
      image: prq4,
    }
  ];
  return (
    <section
    style={{
      background: `url(${brandbg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    className="p-4"
  >
    <div className="flex flex-col sm:flex-row justify-around items-center">
      {productQualities.map((brand) => (
        <div>
          <img
            src={brand.image}
            alt="Trusted Brand"
            className={`${styles.brandDiv} h-[150px]`}
          />
        </div>
      ))}
    </div>
  </section>
  )
}

export default ProductQuality