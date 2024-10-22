import { getArticle } from '@/lib/api'
import { remark } from 'remark'
import html from 'remark-html'
import styles from './styles.module.css'

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  try{
    const { frontmatter, content } = await getArticle(params.slug)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return (
      <article className={styles.article}>
        <h1 className={styles.title}>{frontmatter.title}</h1>
        <div className={styles.categories}>
          {frontmatter.categories.map((category: string) => (
            <span key={category} className={styles.category}>
              {category}
            </span>
          ))}
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    )
  }catch(error){
    console.error('Error loading article:', error);
    return <div>Article not found</div>;
  }
  
}