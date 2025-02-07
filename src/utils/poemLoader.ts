import { parse } from 'yaml'

export interface PoemMeta {
  title: string
  author: string
  date: string
}

export interface Poem extends PoemMeta {
  id: string
  content: string
}

export async function loadPoem(filePath: string): Promise<Poem> {
  const response = await fetch(filePath)
  const text = await response.text()

  // 分割 frontmatter 和内容
  const [, frontmatter, content] = text.split('---\n')

  // 解析 frontmatter
  const meta = parse(frontmatter) as PoemMeta

  // 生成唯一ID
  const id = filePath.split('/').pop()?.replace('.md', '') || ''

  return {
    ...meta,
    id,
    content: content.trim(),
  }
}

export async function loadAllPoems(): Promise<Poem[]> {
  const poemFiles = import.meta.glob('/src/content/poems/*.md', { eager: true, as: 'raw' })

  const poems = await Promise.all(
    Object.entries(poemFiles).map(async ([path]) => {
      return await loadPoem(path)
    }),
  )

  // 按日期排序
  return poems.sort((a, b) => b.date.localeCompare(a.date))
}
