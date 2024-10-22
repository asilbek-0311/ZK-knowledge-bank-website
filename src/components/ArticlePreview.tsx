import Link from 'next/link'
import { Article } from '@/lib/api'
import styles from './ArticlePreview.module.css'

export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <div className={styles.articlePreview}>
      <Link href={`/${article.slug}`} className={styles.link}>
        <h3 className={styles.title}>{article.title}</h3>
      </Link>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <div className={styles.categories}>
        {article.categories.map((category: string) => (
          <span key={category} className={styles.category}>
            {category}
          </span>
        ))}
      </div>
    </div>
  )
}