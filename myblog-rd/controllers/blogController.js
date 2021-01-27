const blogModel = require("../models/blogModel");

module.exports = {
  postBlog: async function (ctx, next) {
    let results = await blogModel.getBlogs();
    if (results.length > 0) {
      ctx.body = {
        state: "success",
        blogs: results,
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  DetailBlog: async (ctx,next) =>{
    let { blogId } = ctx.params;
    let results = await blogModel.getBlogById(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blog = {
        blog_id,
        title,
        content,
        post_time,
      };
      blog.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blog.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
      }
      console.log(blog);
    }
  },
   listBlog: async (ctx, next) => {
    let results = await blogModel.getBlogs();
    if (results.length > 0) {
      ctx.body = {
        state: "success",
        blogs: results,
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  }

}
