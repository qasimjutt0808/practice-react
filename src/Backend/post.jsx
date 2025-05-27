import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const API = 'http://localhost:8000/api/tasks';

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data.tasks);
  };

  const addTask = async () => {
    if (!input.trim()) return;
    await axios.post(API, { task: input.trim() });
    setInput('');
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = async (id) => {
    await axios.put(`${API}/${id}`, { task: editText });
    setEditId(null);
    setEditText('');
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
  <>
    <div>
      <h1>To-Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item) => (
          <li key={item._id}>
            {editId === item._id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(item._id)}>Save</button>
              </>
            ) : (
              <>
                <span>{item.task}</span>
                <button onClick={() => startEdit(item._id, item.task)}>
                  Edit
                </button>
              </>
            )}
            <button onClick={() => deleteTask(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}

export default Post;
