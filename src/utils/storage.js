const STORAGE_KEY = "tasks";

export const loadTasks = () => {
	try {
		const data = localStorage.getItem(STORAGE_KEY);
		return data ? JSON.parse(data) : [];
	} catch {
		return [];
	}
};

export const saveTasks = (tasks) => {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	} catch {
		// fallback logic
	}
};
