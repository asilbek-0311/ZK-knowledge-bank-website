import { Article } from '@/lib/api'
import ArticlePreview from './ArticlePreview'
import styles from './ArticleList.module.css'

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  )
}