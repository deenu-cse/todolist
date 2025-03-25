"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { MoreVertical, Trash2, CheckCheck } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    setIsToken(!!localStorage.getItem("authToken"));
  }, []);

  const placeholders = [
    "Add your first task for today...",
    "Plan your day, one task at a time!",
    "What's your top priority today?",
    "Stay organized – add a new task!",
    "Don't forget to complete your goals!",
  ];

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const { data } = await axios.get("https://to-do-backend-peach.vercel.app/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleChange = (e) => setInputValue(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return alert("Task cannot be empty");

    try {
      const token = localStorage.getItem("authToken");
      const { data } = await axios.post(
        "https://to-do-backend-peach.vercel.app/tasks",
        { title: inputValue },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTasks((prev) => [data, ...prev]);
      setInputValue("");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://to-do-backend-peach.vercel.app/tasks/${id}`);

      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const { data } = await axios.put(
        `https://to-do-backend-peach.vercel.app/tasks/${id}`,
        updatedData,
      );

      setTasks((prev) => prev.map((task) => (task._id === id ? data : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="h-[40rem] -mt-16 flex flex-col justify-center items-center px-4">
      {isToken ? (
        <>
          <h2 className="mb-10 text-xl text-center dark:text-white">
            Stay Organized – Add Your Tasks!
          </h2>

          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />

          <div className="mt-8 flex flex-col items-center justify-center w-full max-h-80 overflow-y-auto gap-3 pt-8 pb-2">
            {tasks.length === 0 ? (
              <p className="text-gray-500">No tasks added yet!</p>
            ) : (
              tasks.map((task) => (
                <div key={task._id} className="flex w-[60%] justify-between items-center font-medium bg-blue-100 text-blue-900 px-4 rounded-full shadow-sm">
                  <span className="flex gap-1.5 p-2 items-center">
                    {task.completed ? <CheckCheck size={24} className="text-green-700 -ml-4" /> : ''}
                    {task.title}
                  </span>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical size={20} className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleDelete(task._id)} className="cursor-pointer">
                        Delete Task <Trash2 size={15} className="text-red-500" />
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdate(task._id, { completed: !task.completed })} className={`cursor-pointer ${task.completed ? "bg-green-400" : "bg-red-400"}`} >
                        {task.completed ? (
                          <>
                            Mark Incomplete
                          </>
                        ) : (
                          <>
                            Mark Completed <CheckCheck size={15} className="text-green-500" />
                          </>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <span>Your are not Loged In! Please LogIn to proceed</span>
      )}
    </div>
  );
};

export default ToDo;
