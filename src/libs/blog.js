import fs from "node:fs/promises";
import path from "node:path";

export const filePath = (fileName) =>
  path.join(process.cwd(), "src", "db", `${fileName}.json`);

export const readBlog = async () => {
  const blogFilePath = filePath("blog");
  let data = await fs.readFile(blogFilePath, "utf-8");
  if (data) {
    return JSON.parse(data);
  }
  data = [];
};

export const writeBlog = async (data) => {
  if (data) {
    const blogFilePath = filePath("blog");
    await fs.writeFile(blogFilePath, JSON.stringify(data, null, 2));
  }
};
