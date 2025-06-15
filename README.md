# 📝 React To-Do List App

A sleek, minimal To-Do List app built using **Vite**, **React**, and **Tailwind CSS**. Tasks are stored in `localStorage`, with support for filtering, sorting, and state persistence across page reloads.

---

## ✨ Features

- ✅ Add, remove, and toggle task completion
- 🔍 Filter tasks by status (All / Active / Completed)
- ↕️ Sort tasks alphabetically (A-Z / Z-A)
- 💾 Persistent task state with `localStorage`
- 🎯 Responsive UI built with Tailwind CSS
- ♻️ Clean, modular code structure (components, utils)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Shriansh2002/csi-todo.git
cd react-todo-list
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Your app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🛠 Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🧪 Testing (Manual)

Since this is a simple UI app, you can manually test via:

1. ✅ Add a new task → check if it appears in the list
2. ✅ Toggle a task → check if it is marked completed
3. ✅ Delete a task → check if it is removed
4. 🧭 Change filter/sort → observe task list update

For automated testing (optional), consider tools like **React Testing Library**.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── utils/
│   └── storage.js
├── App.jsx
├── main.jsx
├── index.css
```

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧑‍💻 Author

Built by [Shriansh Agarwal](https://shrianshagarwal.in)

---
