import React from "react";

export const TodoItem = ({ task, onToggle, onDelete }) => (
	<li className='flex justify-between items-center bg-gray-100 p-2 rounded'>
		<span
			onClick={() => onToggle(task.id)}
			className={`cursor-pointer ${
				task.completed ? "line-through text-gray-500" : ""
			}`}
		>
			{task.text}
		</span>
		<button
			onClick={() => onDelete(task.id)}
			className='text-red-500 hover:text-red-700 text-sm'
		>
			❌
		</button>
	</li>
);
