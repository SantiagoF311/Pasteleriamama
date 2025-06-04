'use client';

import Image from 'next/image';
import {
  CardContainer,
  ImageContainer,
  ContentContainer,
  ProductName,
  ProductDescription,
  PriceContainer,
  Price,
  AddToCartButton
} from './ProductCard.styles';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </ImageContainer>
      <ContentContainer>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <PriceContainer>
          <Price>${price.toFixed(2)}</Price>
          <AddToCartButton>
            Agregar al carrito
          </AddToCartButton>
        </PriceContainer>
      </ContentContainer>
    </CardContainer>
  );
} 