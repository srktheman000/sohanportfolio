import React from "react";
import "./Blog.css";
import Blogdata from "../../Data/Blogdata";
import Blogcard from "./Blogcard";
import Separator from "../../Common/Separator/Separator";
function Blog() {
  const data = Blogdata;
  console.log(data);
  return (
    <div className="blog">
      <Separator />
      <label className="section-title">
        <span className="projecthead">Blogs</span>
      </label>
      <div className="bloggrid">
        {data.map((blog) => {
          return <Blogcard blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
