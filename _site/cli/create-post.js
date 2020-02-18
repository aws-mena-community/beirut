const fs = require("fs");
const path = require("path");

const createPost = () => {
  const titleInput = process.argv.slice(2).join(" ");
  let title = titleInput
    .toLowerCase()
    .split(" ")
    .join("-");
  if (title === "") {
    console.log("Title not specified");
    return;
  }
  const date = new Date(Date.now());

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  const postPath = path.join("_posts", `${year}-${month}-${day}-${title}.md`);
  if (fs.existsSync(postPath)) {
    console.log(`${postPath} already exists, try a different title`);
    return;
  }
  fs.writeFileSync(
    postPath,
    `---
  layout: post
  title:  "${titleInput}"
---  

## ${titleInput}

  `
  );
};

module.exports = createPost;

createPost();
