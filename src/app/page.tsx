import { getArticles, Article } from '@/lib/api'
import ArticleList from '@/components/ArticleList'
import CategoryList from '@/components/CategoryList'
import styles from './page.module.css'

export default async function Home() {
  const articles: Article[] = await getArticles()
  const categories = Array.from(new Set(articles.flatMap(article => article.categories)))

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Block page</h1>
      <h2 className={styles.subtitle}>ZK Knowledge bank</h2>
      <div className={styles.content}>
        <CategoryList categories={categories} />
        <ArticleList articles={articles} />
      </div>
    </main>
  )
}