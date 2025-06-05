'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link 
            href="/" 
            className={styles.logo}
          >
            Pastelería San Juan
          </Link>
          <div className={styles.navLinks}>
            <Link 
              href="/productos" 
              className={styles.navLink}
            >
              Productos
            </Link>
            <Link 
              href="/nosotros" 
              className={styles.navLink}
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className={styles.navLink}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 