# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Client FAQ App

## Wireframe
[Wireframe Link](https://drive.google.com/file/d/1SB68QUhhkAro_ZN73xC4xlogFP0qEQXs/view?usp=drive_link)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/SimonProgAI/FAQ_app.git
   cd FAQ_app
   ```
2. Install dependencies:
   ```sh
   npm install
   npm i react-router-dom
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used
- React
- JavaScript
- CSS
- Express (backend)
- CORS
- MySQL

## Overview
The project is structured like a Q&A page with frequently asked questions grouped in categories, with category 5 reserved for user generated questions. Users can submit questions of their own. The page uses a MySQL database to store usernames and passwords, as well as questions/answers. Users cannot access the Q&A dashboard unless they use valid credentials.

## Backend Server
This project uses a Node.js Express backend for user management and Q&A data, hosted on Render.com.

- **Live API:** [https://server-faq-app.onrender.com](https://server-faq-app.onrender.com)
- **Source Code:** [Server_FAQ_App GitHub Repo](https://github.com/SimonProgAI/Server_FAQ_App)

### Key Features
- RESTful API for user management
- Modular route structure
- Easy deployment on Render.com

### Main API Endpoints
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user by ID
- `DELETE /users/:id` - Delete user by ID

See the [server README](https://github.com/SimonProgAI/Server_FAQ_App) for full setup and deployment instructions.

## Connecting Client to Server
The client app communicates with the backend via HTTP requests to the Render.com API. Ensure the client is configured to use the correct API base URL:
```
https://server-faq-app.onrender.com
```

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)


## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Builds the app for production to the `build` folder. See [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Learn More
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

For feedback or questions, please contact [lupiensimon@hotmail.com](mailto:lupiensimon@hotmail.com).

- [GitHub Profile](https://github.com/SimonProgAI)
- [LinkedIn](https://www.linkedin.com/in/simon-lupien-22594235a/)

