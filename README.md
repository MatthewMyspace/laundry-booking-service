<p align="center">
    <img src="images/background.png" width="1000" />
</p>

# 🧺 Laundry Booking Service

> A full-stack web application that allows customers to book laundry services online — built with a modern tech stack and automated deployment on AWS.

---

## 🌟 What is this project?

Laundry Booking Service is a full-stack web application developed as part of **IFN636 - Software Life Cycle Management** at **Queensland University of Technology (QUT)**.

The application allows users to:
- Book laundry services online without calling or visiting a store
- Choose from different service types, collection, and return methods
- Save and manage payment methods
- Track the status of their bookings in real time
- Receive in-app notifications when booking status is updated

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
| 💳 Payment Methods | Save, manage, and set default payment cards |
| 💰 Process Payment | Pay for bookings using saved cards or Apple Pay |
| 🔔 Notifications | Receive in-app notifications on booking status updates |
| 🛠️ Admin Panel | Manage all bookings and update their status |

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
- **react-icons** — SVG icon library

### DevOps
- **GitHub** — Version control with branching strategy
- **GitHub Actions** — CI/CD pipeline automation
- **AWS EC2** — Cloud server for deployment
- **AWS Application Load Balancer** — Load balancing across two EC2 instances
- **PM2** — Process manager to keep the app running
- **Apache Benchmark** — Load testing
- **Mocha + Chai + Sinon** — Unit testing

---

## 📁 Project Structure
```
laundry-booking-service/
├── .github/
│   └── workflows/
│       └── ci.yml                        # GitHub Actions CI/CD pipeline
├── backend/
│   ├── config/
│   │   └── db.js                         # MongoDB connection (Singleton pattern)
│   ├── controllers/
│   │   ├── authController.js             # Register, login, profile
│   │   ├── bookingController.js          # Booking CRUD
│   │   ├── notificationController.js     # Notification management
│   │   ├── paymentController.js          # Payment processing (Facade pattern)
│   │   └── paymentMethodController.js    # Payment method management
│   ├── middleware/
│   │   └── authMiddleware.js             # JWT authentication (Middleware pattern)
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Notification.js
│   │   ├── Payment.js
│   │   ├── PaymentMethod.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── notificationRoutes.js
│   │   ├── paymentMethodRoutes.js
│   │   └── paymentRoutes.js
│   ├── services/
│   │   ├── BaseService.js                # Base service class (MVC pattern)
│   │   ├── BookingService.js
│   │   ├── NotificationService.js
│   │   ├── PaymentFacade.js              # Payment facade (Facade pattern)
│   │   └── PaymentService.js
│   ├── tests/
│   │   └── booking.test.js               # Unit tests (Mocha + Chai + Sinon)
│   ├── utils/
│   │   └── NotificationFactory.js        # Notification factory (Factory pattern)
│   └── server.js                         # Entry point
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx                # Navigation bar
│       │   └── PaymentForm.jsx           # Payment form component
│       ├── context/
│       │   └── AuthContext.js            # User authentication state
│       ├── images/
│       │   └── background.png
│       ├── pages/
│       │   ├── AdminBooking.jsx          # Admin management page
│       │   ├── bookings.jsx              # Create booking page
│       │   ├── Login.jsx                 # Login page
│       │   ├── MyBooking.jsx             # View & cancel bookings
│       │   ├── Notifications.jsx         # Notifications page
│       │   ├── Payment.jsx               # Payment page
│       │   ├── PaymentMethodSettings.jsx # Payment method management
│       │   ├── PaymentSuccess.jsx        # Payment success page
│       │   ├── Profile.jsx               # User profile page
│       │   └── Register.jsx              # Register page
│       ├── App.js                        # Main app component
│       └── axiosConfig.jsx               # Axios configuration
└── README.md
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
git clone https://github.com/LaundryBooking-Team/laundry-booking-service.git
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

## 👥 Team

| Name | Student ID | Role |
|------|-----------|------|
| Watcharapong Mahamonton | N11937483 | Tech Lead / Overall project management / Payment method implementation |
| Elle Koedduang | N12232327 | Notification system / SRS documentation / API Testing / UI improvements |
| Jaejun Lee | N12218278 | Jira / Documentation / OOP implementation / Design patterns |

**Queensland University of Technology (QUT)**
IFN636 — Software Life Cycle Management