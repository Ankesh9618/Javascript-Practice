# TODO Application

This project is part of my JavaScript learning journey. It is a simple TODO list application that demonstrates CRUD (Create, Read, Update, Delete) operations using localStorage. The application is built using HTML, CSS (Bulma framework), and JavaScript.

## Features

- Add tasks with a priority level (Low, Medium, High)
- Display a list of tasks with their priorities
- Modify tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks using localStorage

## Technologies Used

- HTML
- CSS (Bulma framework)
- JavaScript
- localStorage

## Setup Instructions

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Open the `index.html` file in your web browser:**
    ```sh
    open index.html
    ```

## Usage

### Adding a Task

1. Enter the task description in the "Task" input field.
2. Select the priority level (Low, Medium, High).
3. Click the "Add Task" button.

### Modifying a Task

1. Click the "Modify" button next to the task you want to modify.
2. The task description and priority level will be populated in the input fields.
3. Make the desired changes and click the "Add Task" button to save the modifications.

### Deleting a Task

1. Click the "Delete" button (represented by a trash icon) next to the task you want to delete.

### Marking a Task as Completed

1. Click the "Completed" button next to the task you want to mark as completed.

## Code Explanation

### HTML

The `index.html` file contains the structure of the application, including the form for adding tasks and the table for displaying tasks.

### CSS

The `styles.css` file contains custom styles for the application. The Bulma framework is used for responsive and easy-to-use styles.

### JavaScript

The `script.js` file contains the logic for handling tasks:

- `getTask()`: Retrieves tasks from localStorage and populates the task table.
- `putTask()`: Adds a new task to localStorage and updates the task table.
- `deleteTask(button)`: Deletes a task from localStorage and updates the task table.
- `modifyTask(button)`: Populates the task form with the selected task's details for modification.
- `completedTask(button)`: Marks a task as completed and updates the completed task count.
- `resetCompleted()`: Resets the completed task count to zero.

## Conclusion

This project helped me understand how to work with localStorage, manipulate the DOM, and use the Bulma framework for styling. I learned how to implement basic CRUD operations and handle user input efficiently. Feel free to explore and modify the code to add more features or improve the existing ones.

Happy coding!

## Author

Ankesh Agarwal

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Bulma CSS framework for styling.
- JavaScript for providing the core functionality.
- HTML and CSS for structuring and styling the web page.

---

© 2024 Ankesh Agarwal. All rights reserved.

