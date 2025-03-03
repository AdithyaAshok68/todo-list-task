import React, { useState } from "react";

const Task = ({ index, task, moveTask, onDelete, onEdit, type }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleSave = () => {
    onEdit(index, editedTask); // Save both name and date
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-[#84C7E3] p-2 my-4 rounded">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
            className="border p-1 rounded w-full"
          />
          <input
            type="date"
            value={editedTask.date}
            onChange={(e) => setEditedTask({ ...editedTask, date: e.target.value })}
            className="border p-1 rounded"
          />
          <button onClick={handleSave} className="ml-2 bg-yellow text-white px-2 py-1 rounded">
            Save
          </button>
        </>
      ) : (
        <>
          <span className="mb-5 font-bold">{task.name} - {task.date}</span>
          <div>
            {type === "uncompleted" && (
              <button onClick={() => moveTask(index)} className="bg-green text-white px-2 py-1 rounded mr-2">
                Complete
              </button>
            )}
            {type === "uncompleted" && (
              <button onClick={() => setIsEditing(true)} className="bg-blue text-white px-2 py-1 rounded mr-2">
                Edit
              </button>
            )}
            <button onClick={() => onDelete(index, type)} className="bg-red text-white px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
