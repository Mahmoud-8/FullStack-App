# DigitalWeb & Contact Form App

This is a simple web application for submitting contact information through a form and displaying a thank-you message.

## Table of Contents
- [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Allows users to submit contact information (name, email, message) through a form.
- Displays a thank-you message after successful form submission.
- Built with React for the front end and an Express.js server for the back end.
- Uses MongoDB to store contact data.
- Utilizes React Router for client-side routing.



### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB installed and running (or a MongoDB Atlas account for cloud-based storage).
- Basic knowledge of React and Express.js.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-form-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd contact-form-app
   ```

3. Install dependencies for the server and client:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the `server` directory for server-related environment variables (e.g., MongoDB connection URI, server port).
   - Create a `.env.local` file in the `client` directory for client-related environment variables (e.g., API server URL).

5. Start the server and client:

   ```bash
   # Start the server (from the server directory)
   npm start

   # Start the client (from the client directory)
   npm start
   ```

6. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Fill out the contact form with your name, email, and message.
3. Click the "Send" button to submit the form.
4. Upon successful submission, you will be redirected to a thank-you page.
5. Check the server logs for messages regarding data submission.

## Project Structure

- `server/`: Contains the Express.js server code.
  - `app.js`: Server setup and routes.
  - `models/`: Defines the MongoDB schema and models.
  - `routes/`: Defines API routes.
- `client/`: Contains the React client code.
  - `src/`: Source code files.
    - `components/`: Reusable React components.
    - `pages/`: Main pages of the application.
    - `App.js`: Main React component and routing configuration.
  - `public/`: Static assets and HTML template.

