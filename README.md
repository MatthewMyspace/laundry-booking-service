# 🧺 Laundry Booking Service

> A web application that allows customers to book laundry services online — built with a modern full-stack setup and automated deployment on AWS.

---

## 🌟 What is this project?

Laundry Booking Service is a full-stack web application developed as part of **IFN636 - Software Life Cycle Management** at **Queensland University of Technology (QUT)**.

The application allows users to:
- Book laundry services online without calling or visiting a store
- Choose from different service types, collection, and return methods
- Track the status of their bookings in real time

Admins can:
- View all bookings from all users
- Update booking statuses as laundry progresses
- Delete bookings when necessary

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🔐 Authentication | Secure login and registration using JWT tokens |
| 📦 Create Booking | Book a laundry service with automatic price calculation |
| 📋 View Bookings | See all your current and past bookings |
| ❌ Cancel Booking | Cancel a booking you no longer need |
| 🛠️ Admin Panel | Manage all bookings and update their status |
| 💰 Auto Pricing | Price is calculated automatically based on service type and delivery options |

---

## 💰 Pricing Guide

### Service Types
| Service | Price |
|---------|-------|
| Wash & Fold | $4 per kg |
| Wash & Ironing | $6 per item |
| Dry Cleaning | $8 per item |
| Ironing Only | $3 per item |

### Collection & Return Options
| Option | Fee |
|--------|-----|
| Drop off at store | Free |
| Pickup from home | +$10 |
| Pick up at store | Free |
| Home delivery | +$10 |

---

## 🛠️ Tech Stack

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Web framework for building REST APIs
- **MongoDB Atlas** — Cloud database
- **Mongoose** — MongoDB object modeling
- **JWT** — Secure user authentication
- **bcrypt** — Password hashing

### Frontend
- **React.js** — User interface library
- **React Router** — Page navigation
- **Axios** — API communication
- **Tailwind CSS** — Styling

### DevOps
- **GitHub** — Version control with branching strategy
- **GitHub Actions** — CI/CD pipeline automation
- **AWS EC2** — Cloud server for deployment
- **PM2** — Process manager to keep the app running
- **Mocha + Chai + Sinon** — Unit testing

---

## 📁 Project Structure
```
laundry-booking-service/
├── backend/
│   ├── controllers/
│   │   └── bookingController.js   # CRUD logic for bookings
│   ├── models/
│   │   └── Booking.js             # MongoDB schema + price rules
│   ├── routes/
│   │   └── bookingRoutes.js       # API endpoints
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication
│   ├── tests/
│   │   └── booking.test.js        # Unit tests (10 tests)
│   └── server.js                  # Entry point
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── bookings.jsx        # Create booking page
│       │   ├── MyBooking.jsx       # View & cancel bookings
│       │   └── AdminBooking.jsx    # Admin management page
│       ├── components/
│       │   └── Navbar.jsx          # Navigation bar
│       └── context/
│           └── AuthContext.js      # User authentication state
└── .github/
    └── workflows/
        └── ci.yml                  # GitHub Actions CI/CD pipeline
```

---

## ⚙️ How to Run Locally

### Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [Git](https://git-scm.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account

### Step 1 — Clone the repository
```bash
git clone https://github.com/MatthewMyspace/laundry-booking-service.git
cd laundry-booking-service
```

### Step 2 — Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5001
```

Start the backend server:
```bash
npm start
```
Backend will run at: `http://localhost:5001`

### Step 3 — Set up the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm start
```
Frontend will run at: `http://localhost:3000`

---

## 🧪 Running Tests
```bash
cd backend
npm test
```

**Expected result:**
```
10 passing (5ms)
```

Tests cover all 4 CRUD operations:
- ✅ createBooking (2 tests)
- ✅ getBookings (2 tests)
- ✅ updateBooking (3 tests)
- ✅ deleteBooking (3 tests)

---

## 🚀 CI/CD Pipeline

This project uses **GitHub Actions** with a **self-hosted runner on AWS EC2**.

Every time code is pushed to the `main` branch, the pipeline automatically:

1. Checks out the latest code
2. Sets up Node.js environment
3. Installs backend and frontend dependencies
4. Builds the frontend for production
5. Runs all unit tests
6. Deploys the backend to EC2 using PM2

---

## 👤 Author

**Watcharapong Mahamonton**  
Student ID: N11937483  
Queensland University of Technology (QUT)  
IFN636 — Software Life Cycle Management
