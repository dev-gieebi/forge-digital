import { useEffect } from 'react'

/**
 * Sets the document title and meta description for each page (SEO).
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description
  }, [title, description])
}
