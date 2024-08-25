import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './index.module.css';
import { ProductInterface } from '../../../interfaces';

interface ProductCardProps {
  product: ProductInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      {/* Image Section */}
      <div className={styles.productImage}>
        <img
          src={product.src}
          alt={product.title}
        />
        <div className={styles.subImagesLabel}>
          {product.subImages.length} تصاویر بیشتر
        </div>
      </div>

      {/* Title and Author Section */}
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productWriter}>{product.writer}</p>
      </div>

      {/* Price and Rating Section */}
      <div className={styles.productMeta}>
        <span className={styles.productPrice}>
          {product.price.toLocaleString('fa-IR')} تومان
        </span>
        <div className={styles.productRating}>
          <StarRatings
            rating={product.rates}
            starRatedColor="#ffbf00"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
          <span className={styles.ratingCount}>({product.comments.length})</span>
        </div>
      </div>

      {/* Description Section */}
      <div className={styles.productDescription}>
        {product.description}
      </div>

      {/* Buttons Section */}
      <div className={styles.productActions}>
        <button className={styles.buyButton}>خرید</button>
        <button className={styles.wishlistButton}>افزودن به لیست علاقه‌مندی‌ها</button>
      </div>
    </div>
  );
};

export default ProductCard;
