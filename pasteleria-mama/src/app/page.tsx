'use client';

import ProductCard from '@/components/ProductCard';
import {
  Main,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  ProductsSection,
  SectionTitle,
  ProductsGrid,
  AboutSection,
  AboutContainer,
  AboutText
} from './page.styles';

const featuredProducts = [
  {
    name: "Torta de Chocolate",
    description: "Deliciosa torta de chocolate con relleno de ganache y decoración de frutas",
    price: 45.99,
    imageUrl: "/images/chocolate-cake.jpg"
  },
  {
    name: "Cupcakes Variados",
    description: "Set de 6 cupcakes con diferentes sabores y decoraciones",
    price: 24.99,
    imageUrl: "/images/cupcakes.jpg"
  },
  {
    name: "Tarta de Manzana",
    description: "Tarta tradicional de manzana con canela y azúcar morena",
    price: 32.99,
    imageUrl: "/images/apple-pie.jpg"
  }
];

export default function Home() {
  return (
    <Main>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Pastelería Mama</HeroTitle>
          <HeroSubtitle>Dulces momentos, sabores inolvidables</HeroSubtitle>
          <HeroButton>
            Ver Productos
          </HeroButton>
        </HeroContent>
      </HeroSection>

      <ProductsSection>
        <SectionTitle>Nuestros Productos Destacados</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </ProductsGrid>
      </ProductsSection>

      <AboutSection>
        <AboutContainer>
          <SectionTitle>Sobre Nosotros</SectionTitle>
          <AboutText>
            En Pastelería Mama, creamos deliciosos postres artesanales con los mejores ingredientes
            y mucho amor. Cada producto está hecho con dedicación y pasión por la repostería.
          </AboutText>
        </AboutContainer>
      </AboutSection>
    </Main>
  );
}
