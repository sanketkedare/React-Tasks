import React from "react";
import { BsDatabaseDash } from "react-icons/bs";

const SingleTodo = ({ task, changeType }) => {
  const progressType = ["UPCOMING", "INPROGRESS", "COMPLETED", "DELETED"];

  return (
    <div
      className="flex justify-between items-center lg:p-5 p-3 border rounded-xl my-2"
      key={task.id}
    >
      <h1 className="w-1/2 lg:text-xl text-wrap text-justify overflow-auto">{task.name}</h1>
      <select
        value={task.progress}
        className="text-black p-2 rounded-xl text-sm"
        onChange={(e) => changeType(task.id, e.target.value)}
      >
        {progressType.map((j) => (
          <option value={j} key={j} className="p-1 my-1">
            {j}
          </option>
        ))}
      </select>
      {task.progress !== "DELETED" && (
        <BsDatabaseDash className="lg:text-4xl text-xl text-red-500" onClick={() => changeType(task.id, "DELETED")} />
      )}
    </div>
  );
};

export default SingleTodo;
