import styles from './CategoryList.module.css'

export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <aside className={styles.categoryList}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.list}>
        {categories.map((category) => (
          <li key={category} className={styles.item}>
            <a href={`#${category}`} className={styles.link}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}