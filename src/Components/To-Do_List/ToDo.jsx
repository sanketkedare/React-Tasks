// To-Do List Application
// This application allows users to create, manage, and categorize tasks. 
// Users can add new tasks, change their progress status, and reset the input field. 
// Tasks are organized into four categories: UPCOMING, INPROGRESS, COMPLETED, and DELETED.

import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import MyForm from "./MyForm";

/** Add functionality using local Storage
 *  Store and update All todos from local storage
 *  also create a button to clear all todos from local storage
 *  
 * */ 

const ToDo = () => {
  const progressType = ["UPCOMING", "INPROGRESS", "COMPLETED", "DELETED"];
  const [allToDos, setAllToDos] = useState([]);

  console.log(allToDos)

  const changeType = (id, newType) => {
    setAllToDos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, progress: newType } : task
      )
    );
  };

    // Load tasks from local storage on component mount
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (storedTodos) {
        setAllToDos(storedTodos);
      }
    }, []);
  
    // Save tasks to local storage whenever allToDos changes
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(allToDos));
    }, [allToDos]);

      // Clear all tasks from local storage and reset state
  const clearAllTasks = () => {
    const isConfirm = confirm("Are you sure, want to delete all todos?")
    if(isConfirm)
    {
      localStorage.removeItem("todos");
      setAllToDos([]);
    }
    return
  };

  return (
    <div className="relative mt-10 lg:w-[80%] m-auto">
      <h1 className="lg:text-3xl text-xl text-center font-bold">To Do List</h1>
      <MyForm setAllToDos={setAllToDos} />
      <button className="p-2 lg:w-[150px] text-sm border my-2 absolute right-1 rounded-xl bg-red-200 text-black font-bold hover:bg-white" onClick={clearAllTasks}>Clear ALL</button>
      <div className="mt-5 w-full">
        {progressType.map((type) => (
          <div className="mb-10 p-3" key={type}>
            <h1 className="m-2 lg:text-2xl">{type}</h1>
            {allToDos
              .filter((task) => task.progress === type)
              .map((task) => (
                <SingleTodo task={task} changeType={changeType} key={task.id} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
