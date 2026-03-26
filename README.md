# 🚀 Full Stack Task Manager (Backend Assignment)

A full-stack application demonstrating secure authentication, role-based access control, and task management using modern technologies.

---

## 📌 Features

### 🔐 Authentication

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication

### 👤 Role-Based Access

* User & Admin roles
* Admin can view all tasks
* Users can only manage their own tasks

### 📦 Task Management

* Create tasks
* View tasks
* Delete tasks

### 🛡️ Security

* Input validation using Zod
* Protected routes using middleware
* Secure JWT handling

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Prisma ORM
* Zod

### Frontend

* React (TypeScript)
* Axios
* Tailwind CSS

---

## ⚙️ Project Structure

```id="1o7k2d"
backend-task/
frontend/
```

---

## 🚀 Quick Start (Run Locally in 2 Minutes)

### 🔧 Backend Setup

```bash id="v3qz8h"
cd backend-task
npm install
```

Create `.env` file:

```id="n1ljc3"
DATABASE_URL=postgresql://postgres:password@localhost:5432/taskdb
JWT_SECRET=your_secret
PORT=5000
```

Run:

```bash id="j3b7n4"
npx prisma db push
npm run dev
```

---

### 💻 Frontend Setup

```bash id="6oxh6n"
cd frontend
npm install
npm run dev
```

---

### 🌐 App URLs

```id="ypr7vt"
Frontend: http://localhost:5173
Backend: http://localhost:5000
```

---

## 🔑 API Endpoints

### Auth

```id="zcc0dj"
POST /auth/register
POST /auth/login
```

### Tasks (Protected)

```id="lf6z7r"
POST /tasks
GET /tasks
DELETE /tasks/:id
```

---

## 🔐 Authorization

Include JWT token in headers:

```id="gqk7ye"
Authorization: <your_token>
```

---

## 📊 Demo Flow

1. Register a new user
2. Login to receive JWT token
3. Create tasks
4. View tasks
5. Delete tasks

---

## 📦 Postman Collection
## 📸 Screenshots

### 🔐 Login Page
![Login](./screenshots/primelogin.png)

### 📝 Register Page
![Register](./screenshots/primeregister.png)



### 📦 Tasks
![get Tasks](./screenshots/gettasks.png)

![Tasks creation](./screenshots/primetaskcreation.png)

Included in repository for API testing.

---

## 📈 Scalability Notes

* Stateless JWT authentication enables horizontal scaling
* Modular architecture (routes, middleware, services)
* Prisma ORM allows easy database scaling
* Can be extended into microservices architecture

---

## ✅ Status

✔️ Fully functional full-stack application
✔️ Authentication + Authorization implemented
✔️ CRUD APIs working
✔️ Frontend integrated with backend

---

## 🙌 Author

Ashutosh
