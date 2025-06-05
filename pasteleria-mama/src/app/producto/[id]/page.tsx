'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { products, Product } from '@/data/products';
import styles from '../ProductDetail.module.css';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const resolvedParams = React.use(params);

  useEffect(() => {
    setProduct(products.find(p => p.id === resolvedParams.id));
  }, [resolvedParams.id]);

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Producto no encontrado</div>;
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageColumn}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className={styles.contentColumn}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
        <button className={styles.addToCartButton}>Agregar al carrito</button>
      </div>
    </div>
  );
} 