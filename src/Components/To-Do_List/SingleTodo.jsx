import React from "react";
import { BsDatabaseDash } from "react-icons/bs";

const SingleTodo = ({ task, changeType }) => {
  const progressType = ["UPCOMING", "INPROGRESS", "COMPLETED", "DELETED"];

  return (
    <div
      className="lg:flex justify-between items-center grid grid-cols-5 lg:p-5 p-3 border rounded-xl my-2"
      key={task.id}
    >
      <h1 className="lg:w-1/2 lg:text-xl text-sm text-wrap text-justify overflow-auto col-span-2">{task.name}</h1>
      <span className="lg:text-sm text-[8px]">{task.createdAt}</span>
      <select
        value={task.progress}
        className="text-black p-2 rounded-xl lg:text-sm text-[8px] lg:w-[150px] w-full m-auto"
        onChange={(e) => changeType(task.id, e.target.value)}
      >
        {progressType.map((j) => (
          <option value={j} key={j} className="p-1 my-1">
            {j}
          </option>
        ))}
      </select>
      {task.progress !== "DELETED" && (
        <BsDatabaseDash className="lg:text-4xl text-xl m-auto text-red-500" onClick={() => changeType(task.id, "DELETED")} />
      )}
    </div>
  );
};

export default SingleTodo;
