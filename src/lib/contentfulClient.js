import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchButterCookies() {
  const contentType = import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE || 'butterCookies'
  const res = await client.getEntries({
    content_type: contentType,
    select: 'fields.name,fields.description,fields.price,fields.category,fields.image,fields.featured'
  })
  return res.items || []
}
