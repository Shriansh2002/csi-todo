import React, { useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/storage";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [filter, setFilter] = useState("all");
	const [sortOrder, setSortOrder] = useState("asc");

	useEffect(() => {
		setTasks(loadTasks());
	}, []);

	useEffect(() => {
		saveTasks(tasks);
	}, [tasks]);

	const handleAddTask = () => {
		const trimmed = newTask.trim();
		if (!trimmed) return;
		setTasks((prev) => [
			...prev,
			{ id: Date.now(), text: trimmed, completed: false },
		]);
		setNewTask("");
	};

	const toggleTask = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const removeTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const filtered = tasks.filter((task) => {
		if (filter === "active") return !task.completed;
		if (filter === "completed") return task.completed;
		return true;
	});

	const sorted = [...filtered].sort((a, b) =>
		sortOrder === "asc"
			? a.text.localeCompare(b.text)
			: b.text.localeCompare(a.text)
	);

	return (
		<div className='max-w-xl mx-auto p-4 shadow-xl bg-white rounded-xl'>
			<h1 className='text-2xl font-bold mb-4'>📝 To-Do List</h1>

			<div className='flex gap-2 mb-4'>
				<input
					className='flex-1 border px-2 py-1 rounded'
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder='Enter a new task'
				/>
				<button
					onClick={handleAddTask}
					className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
				>
					Add
				</button>
			</div>

			<div className='flex justify-between mb-2 text-sm'>
				<div className='flex gap-2'>
					{["all", "active", "completed"].map((f) => (
						<button
							key={f}
							onClick={() => setFilter(f)}
							className={`px-2 py-1 rounded ${
								filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
							}`}
						>
							{f}
						</button>
					))}
				</div>
				<button
					onClick={() =>
						setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
					}
					className='text-gray-600 underline'
				>
					Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
				</button>
			</div>

			<ul className='space-y-2'>
				{sorted.map((task) => (
					<TodoItem
						key={task.id}
						task={task}
						onToggle={toggleTask}
						onDelete={removeTask}
					/>
				))}
				{sorted.length === 0 && (
					<li className='text-center text-gray-400 mt-4'>No tasks found.</li>
				)}
			</ul>
		</div>
	);
};
