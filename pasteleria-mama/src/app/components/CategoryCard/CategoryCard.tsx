import styles from '../../Page/page.module.css'; // Import styles from the page module

interface CategoryCardProps {
  name: string;
  // Add imageUrl prop later if needed
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name }) => {
  return (
    <div className={styles.categoryCard}>
      {/* Background image will be set in CSS based on which card it is */}
      <div className={styles.categoryBanner}>{name}</div>
    </div>
  );
};

export default CategoryCard; 