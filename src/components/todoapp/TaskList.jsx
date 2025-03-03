import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks, moveTask, onDelete, onEdit, type }) => {
  return (
    <div className="w-1/2 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {tasks.length === 0 ? (
        <p className="text-green">No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            moveTask={moveTask}
            onDelete={onDelete}
            onEdit={onEdit}
            type={type}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
