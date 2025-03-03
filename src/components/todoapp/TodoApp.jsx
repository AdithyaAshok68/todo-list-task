import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "tailwindcss/tailwind.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load tasks from localStorage when the app starts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    
    // Ensure that tasks are in the correct format
    setTasks(Array.isArray(savedTasks) ? savedTasks : []);
    setCompletedTasks(Array.isArray(savedCompletedTasks) ? savedCompletedTasks : []);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0 || completedTasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  }, [tasks, completedTasks]);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // Save instantly
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index, type) => {
    if (type === "uncompleted") {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } else {
      const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
      setCompletedTasks(updatedCompletedTasks);
      localStorage.setItem("completedTasks", JSON.stringify(updatedCompletedTasks));
    }
  };

  const moveTask = (index) => {
    const taskToMove = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = [...completedTasks, taskToMove];

    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);

    // Save to localStorage immediately
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("completedTasks", JSON.stringify(updatedCompletedTasks));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
        <TaskForm onAdd={addTask} />
        <div className="flex gap-4">
          <TaskList
            title="Uncompleted Tasks"
            tasks={tasks}
            moveTask={moveTask}
            onDelete={deleteTask}
            onEdit={updateTask}
            type="uncompleted"
          />
          <TaskList
            title="Completed Tasks"
            tasks={completedTasks}
            moveTask={() => {}}
            onDelete={deleteTask}
            onEdit={() => {}}
            type="completed"
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default TodoApp;
