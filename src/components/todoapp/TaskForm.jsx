import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [completionDate, setCompletionDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !completionDate) return;

    onAdd({ name: taskName, date: completionDate });
    setTaskName("");
    setCompletionDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={completionDate}
        onChange={(e) => setCompletionDate(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
