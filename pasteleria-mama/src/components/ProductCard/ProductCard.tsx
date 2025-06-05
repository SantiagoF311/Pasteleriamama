'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/producto/${id}`} className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={styles.productImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <button
            onClick={(e) => e.preventDefault()}
            className={styles.addToCartButton}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </Link>
  );
} 