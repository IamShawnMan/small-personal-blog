import { v4 } from "uuid";
import { readBlog, writeBlog } from "../libs/index.js";

export const blogController = {
  getAll: async (req, res, next) => {
    try {
      const blogs = await readBlog();

      res.status(200).send({ data: blogs });
    } catch (error) {
      next(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const blogs = await readBlog();

      const blog = blogs.findOne((blog) => blog.id === id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      res.status(200).json({ data: blog });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { title, content, published } = req.body;
      const blog = {
        id: v4(),
        title,
        content,
        published,
      };

      const blogs = await readBlog();

      blogs.push(blog);
      writeBlog(blogs);

      res.status(201).json({ data: blog });
    } catch (error) {
      next(error);
    }
  },
};
