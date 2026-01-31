const { createClient } = require('contentful')

const client = createClient({
  space: 'qzzzxounvc79',
  accessToken: 'XH7jNzuCAjxlBaSnZ-lVVGXNl5GuRF0kyHUTwsGBu6o'
})

async function check() {
  try {
    const res = await client.getEntries({
      content_type: 'butterCookies',
      select: 'fields.name,fields.description,fields.price,fields.category,fields.image,fields.featured'
    })

    console.log('Entries fetched:', res.items.length)
    res.items.forEach((it, idx) => {
      console.log(`#${idx + 1}:`, it.fields.name, '| featured:', !!it.fields.featured)
    })
  } catch (err) {
    console.error('Error fetching entries:', err.message || err)
    process.exit(1)
  }
}

check()
