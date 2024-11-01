// FetchPosts.js

import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

const FetchPosts = () => {
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState([]);
  const [openPost, setOpenPost] = useState(null);
  const [current, setCurrent] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const JSON = await res.json();
      setData(JSON);
      setShowData(true);
      console.log("Data fetched");
    } catch (error) {
      console.log(error);
    }
  };

  const removePosts = () => {
    setShowData(false);
    setOpenPost(null); // Reset all posts
  };

  const handlerOpenPost = (id) => {
    if (id === openPost) {
      setOpenPost(null);
    } else {
      setOpenPost(id === "ALL" ? "ALL" : id);
    }
  };

  useEffect(() => {
    if (openPost > 0) {
      setCurrent(data.find((item) => item.id === openPost));
    }
  }, [openPost]);

  return (
    <div className="lg:mt-10 mt-16 w-[80%] m-auto text-center">
      <h1 className="text-center lg:text-3xl  font-bold">Fetch Posts</h1>
      {!showData ? (
        <button
          className="lg:text-xl bg-yellow-400 text-black p-2 my-2 rounded-xl hover:bg-sky-300 font-bold w-[200px] m-auto"
          onClick={fetchData}
        >
          Get Data
        </button>
      ) : (
        <div className="flex justify-between my-2">
          <button
            className="lg:text-xl bg-red-600 text-white p-2 rounded-xl hover:bg-white hover:text-black font-bold lg:w-[200px]"
            onClick={removePosts}
          >
            Close All
          </button>

          <button
            className={`lg:text-xl ${
              openPost === "ALL" ? "bg-gray-700" : "bg-sky-600"
            } text-white p-2 rounded-xl hover:bg-white hover:text-black font-bold lg:w-[200px]`}
            onClick={() => handlerOpenPost("ALL")}
          >
            {openPost === "ALL" ? "Hide ALL" : "Show All"}
          </button>
        </div>
      )}

      {showData && (
        <div className="grid lg:grid-cols-3 grid-cols-1 h-[80vh] overflow-y-auto">
          {openPost > 0 && (
            <div className="col-span-1 border lg:h-[60vh] h-[40vh] lg:w-[90%] w-full lg:mt-10 p-3 rounded-xl bg-white text-gray-700 overflow-hidden">
              {current && (
                <div>
                  <h1 className="lg:text-2xl uppercase font-bold">
                    {current.id} ] {current.title}
                  </h1>
                  <p className="lg:mt-10 mt-5 lg:text-xl text-justify px-3">
                    {current.body}
                  </p>
                </div>
              )}
            </div>
          )}

          <div
            className={`flex flex-wrap justify-evenly ${
              openPost > 0 ? "col-span-2" : "col-span-3"
            } h-[80vh] mt-2  overflow-y-auto`}
          >
            {showData &&
              (data.length <= 0
                ? "Please Wait..."
                : data.map((item) => (
                    <SinglePost
                      item={item}
                      key={item.id}
                      handlerOpenPost={handlerOpenPost}
                      openPost={openPost}
                    />
                  )))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchPosts;
