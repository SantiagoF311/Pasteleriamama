'use client';

import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  padding: 1rem;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  color: #e91e63;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const AddToCartButton = styled.button`
  background-color: #e91e63;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }
`; 