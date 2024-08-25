// pages/index.tsx
import ProductSlider from '@/components/Slider'
import ProtectedContent from '../components/product'
import React from 'react'
import ProductCard from '../components/product/Detail'
import { ProductInterface } from '@/interfaces'
import AudioPlayer from '@/components/Player'

const exampleProduct: ProductInterface = {
  _id: '1',
  title: 'جادوی فکر بزرگ',
  src: '/images/product1.png',
  subImages: ['/images/book-cover.jpg', '/images/book-cover2.jpg'],
  price: 76000,
  content: '',
  writer: 'دیوید جوزف شوارتز',
  publishDate: '2021-01-01',
  categories: 'کتاب‌های صوتی',
  rates: 4.4,
  comments: [
    // {
    //   user: 'کاربر1',
    //   comment: 'خیلی خوب بود!',
    // },
  ],
  description: 'استفاده از قدرت فکر...',
  keywords: ['کتاب', 'فکر بزرگ', 'جادو'],
}

const HomePage = () => {
  return (
    <div>
      <AudioPlayer/>
      <ProductCard product={exampleProduct} />
      <ProductSlider />
      {/* <ProtectedContent /> */}
    </div>
  )
}

export default HomePage
