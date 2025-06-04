'use client';

import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 20;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeroButton = styled.button`
  background-color: #e91e63;
  color: white;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c2185b;
  }
`;

export const ProductsSection = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const AboutSection = styled.section`
  background-color: #f5f5f5;
  padding: 4rem 1rem;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutText = styled.p`
  font-size: 1.125rem;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
`; 