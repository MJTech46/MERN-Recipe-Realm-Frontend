# MERN-Recipe-Realm

Welcome to **MERN-Recipe-Realm**! This project is being developed as part of my free internship provided by **EY GDS NextGen**. The goal of this project is to build a full-stack recipe management application using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack.

## 🌟 Project Overview
MERN-Recipe-Realm is a Recipe Sharing Platform that allows users to create, share, and manage various recipes, with real-time updates across all views. You’ll gain experience with user authentication, document management, and implementing collaborative, real-time features through MongoDB, Express.js, React.js, and Node.js.

## 🚀 Tech Stack
- **Frontend:** React.js (with Tailwind CSS/Bootstrap)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** Redux (if applicable)
- **Authentication:** JWT (JSON Web Tokens)

## 📌 Features
- User authentication (Signup/Login)
- CRUD operations for recipes
- Recipe search functionality
- Image upload for recipes
- User-friendly UI/UX
- Real-time updates using WebSockets
- Collaborative recipe editing
- Responsive design

## ✅ To-Do List
### Phase 1: Project Setup
- [x] Initialize GitHub repository
- [ ] Set up backend with Express.js and MongoDB
- [ ] Configure environment variables
- [ ] Set up frontend with React.js
- [ ] Install required dependencies

### Phase 2: Authentication
- [ ] Implement user signup and login
- [ ] Secure routes with JWT authentication
- [ ] Create authentication middleware

### Phase 3: Recipe Management
- [ ] Design recipe schema in MongoDB
- [ ] Implement CRUD operations for recipes
- [ ] Enable image uploads for recipes
- [ ] Develop frontend UI for recipe creation and viewing

### Phase 4: Real-Time Features
- [ ] Implement WebSockets for live updates
- [ ] Enable collaborative recipe editing

### Phase 5: Optimization & Deployment
- [ ] Optimize API responses and database queries
- [ ] Improve UI/UX based on feedback
- [ ] Deploy frontend and backend to a hosting service

## 🔧 Installation & Setup
To run the project locally, follow these steps:

### Prerequisites
- Node.js installed
- MongoDB installed or use MongoDB Atlas

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/MJTech46/MERN-Recipe-Realm.git
   cd MERN-Recipe-Realm
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Set up environment variables in a `.env` file inside the backend directory:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the development servers:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm start`

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## 📬 Contact
If you have any questions or suggestions, feel free to reach out to me!

---
Happy Coding! 🎯🚀

