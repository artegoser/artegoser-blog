const metadataParser = require("markdown-yaml-metadata-parser");
const fs = require("fs");

let index = [];

// Get all files in ./posts
const files = fs.readdirSync("./posts");

// Loop through each file
for (const file of files) {
  // Read the file
  const content = fs.readFileSync(`./posts/${file}`, "utf8");

  // Parse the metadata
  let metadata = metadataParser(content).metadata;

  metadata.id = file.replace(/\.md$/, "");

  index.push(metadata);
}

index.sort((a, b) => {
  return new Date(b.datePublished) - new Date(a.datePublished);
});

fs.writeFileSync("./index.json", JSON.stringify(index, null, 2));

fs.writeFileSync(
  "./README.md",
  `# My blog posts\n\n${index
    .map((post) => `- [${post.title}](https://artegoser.ru/blog/${post.id})`)
    .join("\n")}`
);
