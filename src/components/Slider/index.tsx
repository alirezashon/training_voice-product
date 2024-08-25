import React, { useRef } from 'react'
import styles from './index.module.css'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  image: string
  price: string
  oldPrice: string
  discount: number
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },  {
    id: 1,
    title: 'Product 1',
    image: '/images/product1.png',
    price: '1,800 تومان',
    oldPrice: '2,000 تومان',
    discount: 10,
    rating: 4.5,
    reviews: 12,
  },
]

const ProductSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -=
        sliderRef.current.offsetWidth / products.length
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft +=
        sliderRef.current.offsetWidth / products.length
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.arrowLeft} onClick={scrollLeft}>
        ◀
      </button>
      <div className={styles.slider} ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id} className={styles.productBox}>
            <Image
            width={333} height={444} src={product.image} alt={product.title} className={styles.image}/>
            <div className={styles.details}>
              <h3>{product.title}</h3>
              <p className={styles.price}>
                <span className={styles.oldPrice}>{product.oldPrice}</span>{' '}
                {product.price}
              </p>
              <p className={styles.discount}>-{product.discount}%</p>
              <p className={styles.rating}>
                {product.rating} ★ ({product.reviews} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={scrollRight}>
        ▶
      </button>
    </div>
  )
}

export default ProductSlider
