import React, { useEffect, useRef, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { artical } from "./utils"; // Assuming this is correct
import { FcDislike, FcLike } from "react-icons/fc";
import { LuDelete } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import useGenrateId from "../To-Do_List/useGenrateId";

const Artical = ({ currentPerson }) => {
  const [likes, setLikes] = useState([]);
  const [disLikes, setDisLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const [commentOpen, setCommentOpen] = useState(false);

  const commentRef = useRef(null);

  const liked = () => {
    if (!likes.includes(currentPerson.id)) {
      if (disLikes.includes(currentPerson.id)) {
        setDisLikes(disLikes.filter((id) => id !== currentPerson.id));
      }
      setLikes([...likes, currentPerson.id]);
    } else {
      setLikes(likes.filter((id) => id !== currentPerson.id));
    }
  };

  const disLiked = () => {
    if (!disLikes.includes(currentPerson.id)) {
      if (likes.includes(currentPerson.id)) {
        setLikes(likes.filter((id) => id !== currentPerson.id));
      }
      setDisLikes([...disLikes, currentPerson.id]);
    } else {
      setDisLikes(disLikes.filter((id) => id !== currentPerson.id));
    }
  };

  const addComment = () => {
    if (commentRef.current.value) {
      const obj = {
        id: useGenrateId(),
        person: currentPerson,
        text: commentRef.current.value,
      };

      setComments([...comments, obj]);
    } else {
      return;
    }
  };

  const deleteComment = (id) =>
  {
    setComments(comments.filter((i)=> i.id !== id));

  }

  useEffect(()=>{
    setCommentOpen(false)
  },[currentPerson])

  return (
    <div className="w-3/4 px-5">
      {/* Community Section */}
      <div className="border p-4 my-3 rounded-xl bg-white text-black">
        <p className="text-right italic text-sm">{artical.date}</p>
        <h1 className="text-2xl font-bold">{artical.title}</h1>
        <p className="italic text-sm text-yellow-600 mt-2">
          Tags: {artical.tags.join(", ")}
        </p>
        <p className="my-2 text-wrap">{artical.content}</p>
        <h2 className="text-right">~ {artical.author}</h2>
        <div className="w-full p-3 flex items-center gap-10">
          <div className="flex gap-2 items-center px-3" onClick={liked}>
            {likes.includes(currentPerson.id) ? (
              <FcLike />
            ) : (
              <BiLike className="hover:text-red-700" />
            )}
            {likes.length}
          </div>
          <div className="flex gap-2 items-center px-3" onClick={disLiked}>
            {disLikes.includes(currentPerson.id) ? (
              <FcDislike />
            ) : (
              <BiDislike className="hover:text-sky-700" />
            )}
            {disLikes.length}
          </div>
          <div
            className="flex gap-2 items-center px-3"
            onClick={() => setCommentOpen((prev) => !prev)}
          >
            <FaRegCommentAlt className="hover:text-yellow-700" />
            {comments.length}
          </div>
        </div>
        {/* // Comment Section */}
        {commentOpen && (
          <div className="mt-2 border border-black rounded-xl p-2">
            <h1 className="font-bold">Comments</h1>
            <div className=" p-2 my-2">
              <textarea
                type="text"
                className="w-full border border-black p-2"
                placeholder="Enter your comment...."
                ref={commentRef}
              />
              <button
                onClick={addComment}
                className="bg-sky-500 p-2 rounded-xl border border-black font-bold w-full"
              >
                Submit
              </button>
            </div>
            {comments.map((i, index) => (
              <div className="border p-3 relative" key={index}>
                <span className="font-bold py-2 text-xl">{i.person.name} </span>
                <span className="text-right italic">~ {i.person.occupation}</span>
                <p className="text-lg">{i.text}</p>

                {(currentPerson.id === i.person.id )&& <MdDelete className="absolute top-5 right-5" onClick={() => deleteComment(i.id)}/>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Artical;
