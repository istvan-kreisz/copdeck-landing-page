const fs = require('fs')
const globby = require('globby')

function addPage(page) {
	const path = page
		.replace('pages/', '')
		.replace('.tsx', '')
		.replace('.md', '')
		.replace('src/', '')
	let route = path === 'index' ? '' : '/' + path

	return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_BASE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby([
		'src/pages/**/*{.tsx,.mdx}',
		'src/posts/**/*{.tsx,.md}',
		'!src/pages/_*.tsx',
		'!src/pages/posts/**',
		'!src/post-drafts/**',
		'!src/pages/api',
	])
	const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

	fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
