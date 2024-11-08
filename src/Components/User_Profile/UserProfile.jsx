import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";

const UserProfile = () => {
  const [editOpen, setEditOpen] = useState(false);  // Start in view mode
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImage] = useState("");
  
  // Email validation regex
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedImageURL = localStorage.getItem("imageURL");

    if (savedName && savedEmail && savedImageURL) {
      setMyName(savedName);
      setEmail(savedEmail);
      setImage(savedImageURL);
    }
  }, []);

  // Save data to localStorage and toggle edit mode
  const saveData = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email.match(validRegex) || myName.length < 3) {
      alert("Please fill all required details with valid inputs.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("name", myName);
    localStorage.setItem("email", email);
    localStorage.setItem("imageURL", imageURL);

    // Set to view mode after saving
    setEditOpen(false);
  };

  return (
    <div>
      <h1 className="text-center mt-14 my-10 font-bold lg:text-3xl">
        User Profile Dashboard
      </h1>

      <div className="border rounded-xl lg:w-[60%] w-[80%] m-auto p-5">
        {editOpen ? (
          <>
            {/* Input Data */}
            <form className="w-full py-5" onSubmit={saveData}>
              <input
                placeholder="Your Name"
                aria-label="Name"
                className="w-full my-2 p-2 text-black rounded-xl relative"
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
                type="text"
                required
              />
              {myName.length < 3 && (
                <span className="text-red-600">
                  Name must contain more than 3 characters
                </span>
              )}

              <input
                placeholder="Email"
                aria-label="Email"
                className="w-full my-2 p-2 text-black rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              {!email.match(validRegex) && email.length > 0 && (
                <span className="text-red-600">Enter a valid email address</span>
              )}

              <input
                placeholder="Profile Image URL"
                aria-label="Profile Image URL"
                className="w-full my-2 p-2 text-black rounded-xl"
                value={imageURL}
                onChange={(e) => setImage(e.target.value)}
                type="text"
              />

              <button
                type="submit"
                className="p-2 my-2 w-full bg-yellow-400 font-bold text-black rounded-xl hover:bg-sky-400"
              >
                Save Data
              </button>
            </form>
          </>
        ) : (
          <>
            {/* View Data */}
            <div className="w-full lg:py-5 relative text-center">
              <div className="lg:w-[60%] m-auto">
                <img
                  src={imageURL || "https://via.placeholder.com/150"} // Fallback to a default image
                  alt="Profile"
                  className="w-full rounded-xl"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback on error
                />
              </div>
              <h1 className="text-3xl font-bold my-2 p-1">{myName}</h1>
              <h1 className="text-xl font-bold my-2 p-1">{email}</h1>

              <button
                className="lg:absolute right-1 top-4 text-xl flex justify-center items-center p-2 gap-2 lg:w-[100px] w-full my-2 border rounded-xl bg-yellow-400 text-black hover:bg-red-500 font-bold"
                onClick={() => setEditOpen(true)}
              >
                <BiEdit /> Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
