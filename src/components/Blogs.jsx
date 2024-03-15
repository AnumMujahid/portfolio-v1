import React from "react";

const blogs = [
  {
    id: "blog-1",
    url: "#",
    category: "Market Analysis",
    title: "Market update: Is now the time to buy or sell?",
    date: "Jan 28, 2024",
    image: "https://framerusercontent.com/images/ZuUovpFhqD0mhHN1gVXxJJDbw.png",
  },
  {
    id: "blog-2",
    url: "#",
    category: "Market Analysis",
    title: "Market update: Is now the time to buy or sell?",
    date: "Jan 28, 2024",
    image:
      "https://framerusercontent.com/images/nMgkdOQCw67QB2USMnuGOOiVNeY.png",
  },
  {
    id: "blog-3",
    url: "#",
    category: "Market Analysis",
    title: "Market update: Is now the time to buy or sell?",
    date: "Jan 28, 2024",
    image:
      "https://framerusercontent.com/images/TzFal3pKOSQxMaLyBqk9fsOQf8M.png",
  },
  {
    id: "blog-4",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="flex relative">
        {blogs.map((blog) => (
          <a href="#">
            {blog.image ? (
              <div
                style={{ background: `url('${blog.image}')` }}
                className="rounded-md h-52"
              >
                <div className="p-5 text-left flex flex-col justify-between h-52">
                  <p className="bg-[#fbfbfb99] max-w-fit py-1 px-2 rounded-full text-[#354b6f] text-xs">
                    {blog.category}
                  </p>
                  <div>
                    <p className="text-xl font-bold text-black pb-3">
                      {blog.title}
                    </p>
                    <p className="text-sm text-white">{blog.date}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-52 bg-[#0e1d42]">
                <p>View All Posts</p>
              </div>
            )}
            {/* <div className="absolute top-0">
              <p className="bg-[#fbfbfb99] max-w-fit py-2 px-4 rounded-full text-[#354b6f]">
                {blog.category}
              </p>
              <p className="text-xl font-bold text-black">{blog.title}</p>
              <p className="text-sm text-white">{blog.date}</p>
            </div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
