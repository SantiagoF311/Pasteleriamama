'use client';

import ProductCard from '@/app/components/ProductCard/ProductCard';
import styles from './page.module.css';

const featuredProducts = [
  {
    id: 'pastel-chocolate',
    name: 'Pastel de Chocolate',
    description: 'Delicioso pastel de chocolate con relleno de ganache y decorado con frutas frescas.',
    price: 25.99,
    imageUrl: '/images/productosDestacados/torta1.jpg'
  },
  {
    id: 'cupcakes-vainilla',
    name: 'Cupcakes de Vainilla',
    description: 'Cupcakes esponjosos de vainilla con frosting de crema de mantequilla y decoraciones coloridas.',
    price: 15.99,
    imageUrl: '/images/productosDestacados/torta2.jpg'
  },
  {
    id: 'tarta-frutas',
    name: 'Tarta de Frutas',
    description: 'Tarta fresca con una selección de frutas de temporada y crema pastelera casera.',
    price: 20.99,
    imageUrl: '/images/productosDestacados/torta3.jpg'
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Uncommenting the hero section */}
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>San Juan Pastelería</h1>
          <p className={styles.heroSubtitle}>
            Descubre el sabor de la tradición en cada bocado.
            Nuestros pasteles artesanales están hechos con los mejores ingredientes
            y mucho amor.
          </p>
          <div className={styles.buttonGroup}>
            <button className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>Ver Menú</button>
            <button className={`${styles.heroButton} ${styles.heroButtonSecondary}`}>Hacer Pedido</button>
          </div>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>+100</div>
              <div className={styles.statLabel}>Recetas Únicas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statLabel}>Años de Experiencia</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>4.9</div>
              <div className={styles.statLabel}>Valoración Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryTop}>
              <img src="/images/torta1.jpg" alt="Cupcakes" className={styles.categoryImage} />
            </div>
            <div className={styles.categoryBanner}>Cupcakes</div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryTop}>
              <img src="/images/torta2.jpg" alt="Tortas" className={styles.categoryImage} />
            </div>
            <div className={styles.categoryBanner}>Tortas</div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryTop}>
              <img src="/images/torta3.jpg" alt="Postres" className={styles.categoryImage} />
            </div>
            <div className={styles.categoryBanner}>Postres</div>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryTop}>
              <img src="/images/torta4.jpg" alt="Galletas" className={styles.categoryImage} />
            </div>
            <div className={styles.categoryBanner}>Galletas</div>
          </div>
        </div>
      </section>

      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Nuestros Productos Destacados</h2>
        <div className={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <p className={styles.aboutText}>
            En Pastelería San Juan, cada dulce es una obra de arte hecha con los mejores ingredientes 
            y mucho cariño. Nuestra tradición familiar se refleja en cada receta, 
            manteniendo viva la autenticidad de los sabores de siempre.
          </p>
        </div>
      </section> */}
    </main>
  );
} 