# Pingora 💬

**A full-stack real-time chat application built with the MERN stack and Socket.IO.**

Pingora is a real-time messaging application designed to make online communication seamless and secure. It combines JWT-based authentication, protected user profiles, cloud-based image uploads, and real-time messaging in a responsive interface.

Built to explore modern full-stack development, Pingora brings together REST APIs, database management, authentication middleware, cloud services, and event-driven communication.

## ✨ Features

- 🔐 **JWT Authentication** — Secure user authentication using JSON Web Tokens and HTTP-only cookies.
- 🔒 **Password Security** — Password hashing with `bcryptjs` to protect stored credentials.
- 👤 **User Profiles** — Manage profile information and customize profile pictures.
- ☁️ **Cloudinary Integration** — Upload and store profile images in the cloud.
- 💬 **Real-Time Messaging** — Exchange messages instantly using Socket.IO.
- 🗄️ **Persistent Storage** — Store user and application data in MongoDB using Mongoose.
- 🛡️ **Security Middleware** — Helmet, CORS configuration, and cookie parsing.
- ⚡ **RESTful API** — Organize backend functionality through Express routes and controllers.
- 🧭 **Client-Side Routing** — Navigate between application pages using React Router DOM.
- 🎨 **Responsive Interface** — Build a modern UI with Tailwind CSS and DaisyUI.
- 🔔 **Toast Notifications** — Provide feedback for user interactions and application events.
- 🧩 **Reusable Components** — Structure the frontend for maintainability and reuse.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Styling | Tailwind CSS, DaisyUI |
| Routing | React Router DOM |
| Icons | React Icons |
| Notifications | React Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcryptjs, HTTP-only cookies |
| Real-Time Communication | Socket.IO |
| Cloud Storage | Cloudinary |
| Security & Middleware | Helmet, CORS, cookie-parser, Morgan |
| Configuration | dotenv |

## 🏗️ Architecture

Pingora follows a client-server architecture:

1. **Frontend:** React provides the user interface and communicates with the backend through HTTP requests.
2. **Backend:** Express handles API requests, authentication, business logic, and data operations.
3. **Database:** MongoDB persists user and message data.
4. **Authentication:** JWTs are used to authenticate requests to protected endpoints.
5. **Real-Time Layer:** Socket.IO enables real-time communication between connected clients.
6. **Cloud Storage:** Cloudinary stores profile images and provides hosted image URLs.

## 📂 Project Structure

```text
Pingora/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
|   |   ├── constants/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following:

- [Node.js](https://nodejs.org/) and npm
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or local MongoDB instance
- A [Cloudinary](https://cloudinary.com/) account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/SehajdeepSinghNibber/Pingora.git
cd Pingora
```

### 2. Install Dependencies

Install the backend dependencies:

```bash
cd server
npm install
```

In a separate terminal, install the frontend dependencies:

```bash
cd Pingora/client
npm install
```

Run the second command from the directory containing the cloned repository. If your frontend folder has a different name, substitute that name accordingly.

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Ensure these names match the variables read by your configuration files. If your application uses additional variables, such as a frontend origin or a client URL, configure those as well.

**Security checklist:**
- Never commit `.env` files or expose credentials.
- Use a strong, randomly generated JWT secret.
- Configure CORS to allow only trusted frontend origins.
- Keep your database credentials and Cloudinary API secret private.

### 4. Start the Backend

From the `server` directory:

```bash
npm run dev
```

Ensure that your `server/package.json` defines the `dev` script.

### 5. Start the Frontend

From the `client` directory, in a separate terminal:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## 🔐 Security Considerations

Pingora incorporates several security practices:

- **Password hashing:** Passwords are hashed before being stored.
- **Authentication:** JWTs authenticate requests to protected routes.
- **HTTP-only cookies:** JavaScript cannot directly access cookies configured with the `HttpOnly` attribute.
- **Security headers:** Helmet helps configure HTTP security headers.
- **Cross-origin controls:** CORS restricts browser-based cross-origin access according to the configured policy.
- **Environment configuration:** Sensitive credentials are supplied through environment variables.

These measures provide a foundation for secure application development. Production deployment should also include input validation, appropriate cookie settings, rate limiting, authorization checks, and secure error handling.

## 🧠 What I Learned

Through Pingora, I explored practical full-stack engineering concepts, including:

- Building REST APIs with Node.js and Express.
- Implementing authentication and protected routes.
- Hashing passwords and handling JWT-based sessions.
- Modeling application data with MongoDB and Mongoose.
- Integrating third-party cloud services.
- Implementing real-time communication with Socket.IO.
- Managing frontend navigation and application state in React.
- Organizing backend code into routes, controllers, middleware, models, and utilities.

## 👨‍💻 Author

**Sehajdeep Singh**

- GitHub: [@SehajdeepSinghNibber](https://github.com/SehajdeepSinghNibber)
- Project Repository: [Pingora](https://github.com/SehajdeepSinghNibber/Pingora)

---

*Built with ❤️ using React, Node.js, MongoDB, Express, and Socket.IO.*
