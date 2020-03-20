const fs = require('fs');
const path = require('path');
const config = require(path.resolve('./gatsby-config'));
/**
 * yarn post slug
 * => /content/blog/YYYY/MM/${slug}/index.md
 *
 * ---
 * title: slug
 * #subtitle: 
 * date:
 * categories: []
 * author: siteMetadata.author
 * #featuredImage
 * ---
 */

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const slug = process.argv[2];
const basePath = `./content/blog/`;
const { author } = config.siteMetadata;

if (!fs.existsSync(path.resolve(`${basePath}${year}/`))) {
  fs.mkdirSync(path.resolve(`${basePath}${year}/`));
}
if (!fs.existsSync(path.resolve(`${basePath}${year}/${month}/`))) {
  fs.mkdirSync(path.resolve(`${basePath}${year}/${month}/`));
}
if (!fs.existsSync(path.resolve(`${basePath}${year}/${month}/${slug}/`))) {
  fs.mkdirSync(path.resolve(`${basePath}${year}/${month}/${slug}/`));
} else {
  throw new Error(`Already Existed!`);
}

fs.writeFile(path.resolve(`${basePath}${year}/${month}/${slug}/index.mdx`), archetypes(date, slug), err => {
  if (err) throw err;
});

function archetypes(date, slug) {
  return [
    '---',
    `title: ${slug.replace('-', ' ')}`,
    `#subtitle: `,
    `date: ${date.toISOString()}`,
    `categories: []`,
    `tags: []`,
    `author: ${author}`,
    `#featuredImage: `,
    `#fullWidth: true`,
    '---',
    ''
  ].join('\n');
}
