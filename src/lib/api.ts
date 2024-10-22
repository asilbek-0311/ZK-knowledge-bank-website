import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'src/articles')

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
}

export interface ArticleContent {
  frontmatter: Article;
  content: string;
}

function slugify(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/\.md$/, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export async function getArticles(): Promise<Article[]> {
  if (!fs.existsSync(articlesDirectory)) {
    console.warn(`Articles directory not found: ${articlesDirectory}`);
    return [];
  }

    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
    const slug = slugify(fileName)
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontmatter } = matter(fileContents)

    return {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      categories: frontmatter.categories || [],
    }
  })

  return articles
}

export async function getArticle(slug: string): Promise<ArticleContent> {
  const fileNames = fs.readdirSync(articlesDirectory);
  const fileName = fileNames.find(file => slugify(file) === slug);

  if (!fileName) {
    throw new Error(`Article not found: ${slug}`);
  }

  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontmatter, content } = matter(fileContents)

  return {
    frontmatter: {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      categories: frontmatter.categories || [],
    },
    content,
  }
}