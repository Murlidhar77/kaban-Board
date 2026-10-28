# 📋 Kanban Board

A clean, lightweight Kanban board built with **vanilla HTML, CSS, and JavaScript**. Create tasks, drag them across columns as they progress, and pick up right where you left off — everything is saved in your browser, so no backend or sign-up is needed.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

<!-- Add a screenshot or GIF of your board here -->
<!-- ![Kanban Board Preview](./screenshots/preview.png) -->

---

## ✨ Features

- **Three-column workflow** — organize work into *To Do*, *In Progress*, and *Done*.
- **Drag and drop** — move task cards between columns using the native HTML5 Drag and Drop API, with a colored highlight on the column you're hovering over.
- **Add tasks** — a modal form lets you enter a title and description; new tasks land in *To Do*.
- **Live task counters** — each column shows how many tasks it currently holds.
- **Personal profile** — set your name and a profile image URL; the task form greets you by name.
- **Persistent data** — tasks and profile are stored in `localStorage`, so they survive page refreshes.
- **Polished UI** — CSS Grid layout, a fixed sidebar, hover animations, smooth transitions, and a custom monospace font.

---

## 🛠️ Tech Stack

| Technology | Used for |
| --- | --- |
| **HTML5** | Semantic structure (`aside`, `nav`, `main`, `section`, `article`) and the `draggable` attribute |
| **CSS3** | Layout with Grid and Flexbox, CSS variables, transitions, custom fonts |
| **JavaScript (ES6)** | DOM manipulation, event handling, drag-and-drop logic, `localStorage` |

No frameworks, no libraries, no build step.

---

## 📁 Project Structure

```
kanban-board/
├── index.html        # Page markup
├── kaban.css         # Styles
├── kaban.js          # App logic
├── font/
│   └── LTSuperiorMono-Regular.otf
└── images/
    ├── dashboard.png
    ├── checklist.png
    ├── database.png
    ├── sun.png
    ├── user.png
    └── beach.png     # Favicon
```

---

## 🚀 Getting Started

No installation required.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# 2. Move into the project folder
cd <your-repo-name>

# 3. Open index.html in your browser
```

For the best experience, serve it with a simple local server (for example the **Live Server** extension in VS Code), since the project uses root-relative image paths.

---

## 🎮 How to Use

1. Click the **profile icon** (top right) and enter your name and an image URL, then click **Set Profile**.
2. Click **Create** to open the task form (a profile is required first).
3. Enter a title and description, then click **Submit** — the task appears in *To Do*.
4. **Drag** a card into *In Progress* or *Done* as you work.
5. Refresh the page — your board is still there.

---

## 🧠 Skills Used & What I Learned

### JavaScript
- **DOM manipulation** — selecting elements with `querySelector` / `querySelectorAll`, creating cards dynamically with `createElement`, and updating the UI with `appendChild` and `textContent`.
- **Event handling** — attaching listeners for clicks, `dragstart`, `dragend`, `dragenter`, `dragleave`, `dragover`, and `drop`.
- **HTML5 Drag and Drop API** — understanding that `dragover` needs `preventDefault()` for a drop to be allowed, and tracking the dragged element in a shared variable.
- **Browser storage** — saving and loading data with `localStorage`, serializing with `JSON.stringify` and `JSON.parse`.
- **Data structures** — storing tasks as an object keyed by column ID, each holding an array of task objects.
- **Array methods** — using `forEach` and `Array.from(...).map()` to rebuild state from the DOM.
- **Reusable functions** — wrapping repeated logic (`Createtask`, `Createdrag`) so the same code powers all three columns.
- **Defensive checks** — form validation, and guarding against missing profiles or empty drops.

### CSS
- **CSS Grid** — a two-dimensional page layout using `grid-template-areas` (sidebar, navbar, main) plus a three-column board.
- **Flexbox** — aligning navigation items, cards, and modal contents.
- **CSS variables** — a centralized color palette in `:root` for consistent theming.
- **Custom fonts** — loading a local font with `@font-face`.
- **Transitions & transforms** — hover lift on cards and buttons, and scale effects on drop targets.
- **Overlays / modals** — building popups with `position: fixed`, `inset: 0`, and `z-index`.
- **Focus & active states** — `:hover`, `:active`, and `:focus-visible` for better UX and accessibility.

### HTML
- Semantic page structure and accessible form inputs.
- Using the `draggable` attribute and dynamically generated markup.

### General
- Planning a UI from layout to interaction.
- Debugging with the browser DevTools (Elements, Console, and Application → Local Storage tabs).
- Organizing a project into separate HTML, CSS, and JS files.
- Using Git and GitHub to version and share a project.

---

## ⚠️ Known Limitations

This is a learning project, and there are a few things still in progress:

- The **Delete** button on cards is styled but not yet wired to remove tasks.
- The **theme toggle** (sun icon) and the sidebar links are currently visual only.
- Tasks are inserted using `innerHTML`; switching to `textContent` would prevent HTML injection from user input.
- Task order within a column isn't preserved when reordering inside the same column.

---

## 🗺️ Roadmap

- [ ] Make the Delete button remove tasks and update storage
- [ ] Add a working dark / light theme toggle
- [ ] Edit existing tasks
- [ ] Priority labels (High / Medium / Low)
- [ ] Due dates and search/filter
- [ ] Responsive layout for mobile
- [ ] Touch-friendly drag and drop

---

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork the repo, create a branch, and open a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Your Name**
GitHub: [Murlidhar77](https://github.com/Murlidhar77)

⭐ If you found this project helpful, consider giving it a star!
