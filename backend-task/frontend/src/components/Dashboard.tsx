
import { useEffect, useState } from "react";
import API from "../api";

interface Task {
  id: string;
  title: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    const title = prompt("Enter task");
    if (!title) return;

    await API.post("/tasks", { title });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={addTask}>Add Task</button>
      <button onClick={logout}>Logout</button>

      {tasks.map((t) => (
        <div key={t.id}>
          {t.title}
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}