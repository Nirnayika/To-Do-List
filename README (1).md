
# To-Do List

This is a full-stack To-Do List application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, read, update, and delete tasks, providing a simple and effective way to manage daily activities.


## Features

- Add Tasks: Users can add new tasks to the list.

- View Tasks: Users can view all their tasks in a list format.

- Update Tasks: Users can mark tasks as completed or edit the task details.

- Delete Tasks: Users can remove tasks from the list.

- Responsive Design: The application is responsive and works well on different screen sizes.



## Tech Stack

**Client:** React.js, Redux

**Server:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Version Control:** Git


## Installation

### Prerequisites
Make sure you have the following installed on your system:

Node.js

MongoDB

#### Steps
1. Clone the repository:

   git clone https://github.com/Nirnayika/To-do-list

   cd To-do-list

2. Install backend dependencies:

   cd server

   npm install

3. Install frontend dependencies:

   cd client

   npm install

4. Set up environment variables:

   Create a .env file in the backend directory and add the     following:


MONGO_URI=your-mongodb-connection-string
PORT=5000

5. Run the backend server:


   cd server

   npm start

6. Run the frontend server:

   Open a new terminal window, and run:

   cd client

   npm start

7.Access the application:

 Open your browser and navigate to http://localhost:3000.
## Usage

- Add a Task: Enter the task details in the input field and click the "Add Task" button.

- View Tasks: All tasks will be displayed on the main page.

- Edit a Task: Click the edit button next to a task, modify the details, and save.

- Delete a Task: Click the delete button to remove the task.




## API Reference

### Tasks

- GET /api/tasks - Get all tasks
- POST /api/tasks - Create a new task
- PUT /api/tasks/ - Update a task
- DELETE /api/tasks/ - Delete a task


## Contributing

Contributions are welcome! 

Please fork the repository and create a pull request with your changes. 

Make sure to follow the coding standards and write clear commit messages.

## License

[MIT](https://choosealicense.com/licenses/mit/)

