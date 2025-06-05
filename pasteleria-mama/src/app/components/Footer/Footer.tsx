'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Pastelería San Juan</h3>
          <Link href="/nosotros" className={styles.footerLink}>Sobre Nosotros</Link>
          <Link href="/contacto" className={styles.footerLink}>Contacto</Link>
          <Link href="/productos" className={styles.footerLink}>Productos</Link>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Horario</h3>
          <p className={styles.footerLink}>Lunes - Viernes: 8:00 - 20:00</p>
          <p className={styles.footerLink}>Sábados: 8:00 - 18:00</p>
          <p className={styles.footerLink}>Domingos: 9:00 - 14:00</p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contacto</h3>
          <a href="tel:+1234567890" className={styles.footerLink}>+1 (234) 567-890</a>
          <a href="mailto:info@pasteleriasanjuan.com" className={styles.footerLink}>info@pasteleriasanjuan.com</a>
          <p className={styles.footerLink}>Calle Principal 123, Ciudad</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Pastelería San Juan. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
} 