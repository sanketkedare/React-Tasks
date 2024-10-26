import React, { useEffect, useRef, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { artical } from "./utils"; // Import the article data
import { FcDislike, FcLike } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import useGenrateId from "../To-Do_List/useGenrateId"; // Custom hook to generate unique IDs

/**
 * Artical Component
 * This component displays an article and allows users to like, dislike,
 * and comment on it. It manages the state of likes, dislikes, and comments
 * for the currently selected user.
 */
const Artical = ({ currentPerson }) => {
  // State to hold likes, dislikes, and comments
  const [likes, setLikes] = useState([]);
  const [disLikes, setDisLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentOpen, setCommentOpen] = useState(false); // Toggle comment section visibility
  const commentRef = useRef(null); // Reference for the comment input field

  // Function to handle liking the article
  const liked = () => {
    const isLiked = likes.includes(currentPerson.id); // Check if the current user has liked
    const isDisliked = disLikes.includes(currentPerson.id); // Check if the current user has disliked

    // Update likes state
    setLikes(isLiked ? likes.filter((id) => id !== currentPerson.id) : [...likes, currentPerson.id]);
    // Remove from dislikes if already disliked
    if (isDisliked) {
      setDisLikes(disLikes.filter((id) => id !== currentPerson.id));
    }
  };

  // Function to handle disliking the article
  const disLiked = () => {
    const isDisliked = disLikes.includes(currentPerson.id); // Check if the current user has disliked
    const isLiked = likes.includes(currentPerson.id); // Check if the current user has liked

    // Update dislikes state
    setDisLikes(isDisliked ? disLikes.filter((id) => id !== currentPerson.id) : [...disLikes, currentPerson.id]);
    // Remove from likes if already liked
    if (isLiked) {
      setLikes(likes.filter((id) => id !== currentPerson.id));
    }
  };

  // Function to add a comment
  const addComment = () => {
    if (commentRef.current.value) {
      const obj = {
        id: useGenrateId(), // Generate a unique ID for the comment
        person: currentPerson, // Current user
        text: commentRef.current.value, // Comment text
      };

      setComments((prevComments) => [...prevComments, obj]); // Update comments state
      commentRef.current.value = ""; // Clear the input field
    }
  };

  // Function to delete a comment
  const deleteComment = (id) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id)); // Filter out the deleted comment
  };

  // Effect to close comment section when the user changes
  useEffect(() => {
    setCommentOpen(false);
  }, [currentPerson]);

  return (
    <div className="w-3/4 lg:px-5 px-2">
      <div className="border p-4 my-3 rounded-xl bg-white text-black">
        <p className="text-right italic lg:text-sm text-[10px]">{artical.date}</p>
        <h1 className="lg:text-2xl font-bold">{artical.title}</h1>
        <p className="italic text-sm text-yellow-600 mt-2">
          Tags: {artical.tags.join(", ")} {/* Display article tags */}
        </p>
        <p className="my-2 text-wrap">{artical.content}</p> {/* Display article content */}
        <h2 className="text-right">~ {artical.author}</h2>
        
        <div className="w-full p-3 flex items-center lg:gap-10">
          {/* Like button */}
          <div className="flex gap-2 items-center px-3" onClick={liked}>
            {likes.includes(currentPerson.id) ? <FcLike /> : <BiLike className="hover:text-red-700" />}
            {likes.length} {/* Display number of likes */}
          </div>
          
          {/* Dislike button */}
          <div className="flex gap-2 items-center px-3" onClick={disLiked}>
            {disLikes.includes(currentPerson.id) ? <FcDislike /> : <BiDislike className="hover:text-sky-700" />}
            {disLikes.length} {/* Display number of dislikes */}
          </div>
          
          {/* Comments toggle button */}
          <div
            className="flex gap-2 items-center px-3"
            onClick={() => setCommentOpen((prev) => !prev)} // Toggle comment section visibility
            aria-label="Toggle comments" // Accessibility label
          >
            <FaRegCommentAlt className="hover:text-yellow-700" />
            {comments.length} {/* Display number of comments */}
          </div>
        </div>
        
        {/* Comment section */}
        {commentOpen && (
          <div className="mt-2 border border-black rounded-xl p-2">
            <h1 className="font-bold">Comments</h1>
            <div className="p-2 my-2">
              <textarea
                className="w-full border border-black p-2 rounded-xl"
                placeholder="Enter your comment..." // Placeholder for comment input
                ref={commentRef} // Reference to the input field
              />
              <button
                onClick={addComment} // Add comment on button click
                className="bg-sky-500 p-2 rounded-xl border border-black font-bold w-full"
                aria-label="Submit comment" // Accessibility label
              >
                Submit
              </button>
            </div>
            
            {/* Display comments */}
            {comments.map((comment) => (
              <div className="border p-3 relative" key={comment.id}>
                <span className="font-bold py-2 lg:text-xl">{comment.person.name}</span>
                <br />
                <span className="text-right italic">~ {comment.person.occupation}</span>
                <p className="text-lg text-wrap text-justify">{comment.text}</p>
                
                {/* Delete comment button for the current user's comments */}
                {currentPerson.id === comment.person.id && (
                  <MdDelete className="absolute top-5 right-5 cursor-pointer" onClick={() => deleteComment(comment.id)} aria-label="Delete comment" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Artical;
