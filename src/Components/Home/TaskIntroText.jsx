import React, { useContext } from "react";
import { TheamContext } from "../../Utils/TheamContextComponent";

const image =
  "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/91881/248314/1676825553317_Rising_Sun__80789.1686998545.jpg?c=2";

// Task Introductory Text Component

const TaskIntroText = () => {
  const { theme } = useContext(TheamContext);
  return (
    <div
      style={{ background: theme.background }}
      className="lg:px-10 px-4 mx-2 relative lg:text-[30px] text-[20px] m-auto h-screen flex items-center justify-center text-center rounded-full shadow-sm bg-opacity-5 hover:bg-opacity-4"
    >
      <img
        src={image}
        className={`absolute ${
          theme.name === "Dark" ? "opacity-25" : "opacity-15"
        } overflow-hidden w-full h-full rounded-full`}
      />
      <p className="lg:w-full w-[70%] italic z-10">
        "We have a collection of tasks asked during coding rounds. <br />
        Explore these tasks and practice to strengthen your coding expertise in
        React. <br />
        Join us and collaborate with our team for growth and learning."
        <br />
      </p>
    </div>
  );
};

export default TaskIntroText;
