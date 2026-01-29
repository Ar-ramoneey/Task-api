A simple RESTful API built with Node.js, Express, and MongoDB to manage tasks.
This backend supports basic CRUD operations and can be used with any frontend (e.g., MERN Todo app).

🚀 Prerequisites
node.js: v22.19.0
npm: v9.6.7
MongoDB: v7.0.4 (MongoDB Atlas used for cloud database)

🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variable management
- cors for handling Cross-Origin Resource Sharing

📦 Installation
1. Clone the repository:
   git clone https://github.com/your-username/task-api.git
2. Navigate to the project directory:
   cd task-api
3. Install dependencies:
   npm install
4. Create a .env file in the root directory and add your MongoDB connection string:
   PORT=5000
    MONGO_URI=your_mongodb_connection_string
5. Start the server:
   npm run dev
6. The server will run on http://localhost:5000 by default.

📚 API Endpoints
- GET /api/tasks: Retrieve all tasks
Response Example:
[
  {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "title": "Sample Task",
    "status": "pending",
    "description": "This is a sample task description.",
    "priority": "high"
  }
]

- GET /api/tasks/:id: Retrieve a specific task by ID
Response Example:
{
  "_id": "60c72b2f9b1d8e001c8e4b8a",
  "title": "Sample Task",
  "status": "pending",
  "description": "This is a sample task description.",
  "priority": "high"
}

- POST /api/tasks: Create a new task
Request Body Example:
{
  "title": "New Task",
  "status": "in-progress",
  "description": "This is a new task description.",
  "priority": "medium"
}
Response Example:
{
  "_id": "60c72b2f9b1d8e001c8e4b8b",
  "title": "New Task",
  "status": "in-progress",
  "description": "This is a new task description.",
  "priority": "medium"
}
- PUT /api/tasks/:id: Update a task by ID
Request Body Example:
{
  "title": "Updated Task",
  "status": "completed",
  "description": "This task has been updated.",
  "priority": "low"
}
Response Example:
{
  "_id": "60c72b2f9b1d8e001c8e4b8a",
  "title": "Updated Task",
  "status": "completed",
  "description": "This task has been updated.",
  "priority": "low"
}
- DELETE /api/tasks/:id: Delete a task by ID
Response Example:
{
  "message": "Task deleted successfully."
}

🧪 API Testing (Postman Screenshots)

Below are screenshots demonstrating successful API requests using Postman.

### Create Task (POST /api/tasks)
![Create Task](screenshots/postman-create-task.png)

### Get All Tasks (GET /api/tasks)
![Get All Tasks](screenshots/postman-get-tasks.png)

### Get All Tasks (GET /api/tasks/:id)
![Get All Tasks](screenshots/postman-get-tasks-by-id.png)

### Update Task (PUT /api/tasks/:id)
![Update Task](screenshots/postman-update-task.png)

### Delete Task (DELETE /api/tasks/:id)
![Delete Task](screenshots/postman-delete-task.png)

Happy coding! 😊