```markdown
# React App with Ant Design, TypeScript, Redux Toolkit and Docker

This repository contains a coding assignment implemented using React with  Ant Design components, TypeScript,
Redux Toolkit, React Router and Docker for containerization. The app integrates with a REST API,
which provides endpoints for retrieving user data and acquisitions.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/extmadhavi/react-larvis.git
cd react-larvis
```

### Install Dependencies

```bash
npm install
```

### Run the App Locally

```bash
npm start
```

This will start the React app locally and make it accessible at [http://localhost:3000](http://localhost:3000).

## Docker Setup

The app includes a Docker configuration for containerization. Follow these steps to run the app using Docker:

### Build Docker Image

```bash
docker build -t react-redux-app .
```

### Run Docker Container

```bash
docker run -p 8000:8000 -p 3000:3000 react-redux-app
```

The app will be accessible at [http://localhost:3000](http://localhost:3000) for the React app and [http://localhost:8000](http://localhost:8000) for the REST API.
## Application Flow 
![auth](https://github.com/extmadhavi/react-larvis/assets/50070482/806ac874-d616-4940-9166-7cf6254eacc2)

## REST API Endpoints

- `GET /users`: Retrieve a list of users.
- `GET /users/<user_id>`: Retrieve user details for a specific user.
- `POST /users/<user_id>`: Update user details.
- `GET /acquisitions`: Retrieve acquisitions data.

## Additional Notes

- The app uses Ant Design components for UI.
- TypeScript is used for type safety throughout the codebase.
- Responsive design is implemented for a smooth user experience on different devices.

Feel free to explore the codebase, make modifications, and use it as a starting point for your own projects.

If you encounter any issues or have questions, please don't hesitate to open an issue on this repository.

Happy coding!
```
