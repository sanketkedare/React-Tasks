// SinglePost.js

import React, { useEffect, useState } from "react";

const SinglePost = ({ item, handlerOpenPost, openPost }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(openPost === "ALL");
  }, [openPost]);

  return (
    <div
      className={`${openPost === item.id ? 'bg-sky-300' : ''} my-3 border p-3 rounded-xl lg:px-10 cursor-pointer w-[380px] ${isOpen ? "h-[200px]" : "h-[70px] overflow-hidden"} text-left`}
      onClick={() => handlerOpenPost(item.id)}
    >
      <h1 className={`text-sm font-bold capitalize ${openPost === item.id ? 'text-black' :'text-yellow-300'} text-wrap `}>
        {item.id} ] {item.title}
      </h1>
      {isOpen && (
        <p className="my-2">{item.body}</p>
      )}
    </div>
  );
};

export default SinglePost;
