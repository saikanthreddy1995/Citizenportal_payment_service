# 🧾 Citizen Portal – Payment Microservice with React + Node.js + MongoDB

This project is a real-world citizen-facing **payment microservice** built using:
- React + Tailwind (Frontend)
- Node.js + Express + Mongoose (Backend)
- MongoDB (Database)
- Docker + Docker Compose (Containerized)
- [✔️ Coming soon] GitHub Actions for CI/CD

---

## 📦 Tech Stack

| Layer      | Tech                 |
|------------|----------------------|
| Frontend   | React, Tailwind CSS  |
| Backend    | Node.js, Express     |
| Database   | MongoDB              |
| Container  | Docker, Docker Compose |
| Registry   | Docker Hub           |

---

## 📊 Architecture Flow



                  ┌──────────────┐
                  │   React UI  │
                  │  (Tailwind) │
                  └──────┬──────┘
                         │
                  HTTP (Port 3000)
                         │
                  ┌──────▼──────┐
                  │  Node.js    │
                  │  Express API│
                  └──────┬──────┘
                         │
                  Mongoose (ODM)
                         │
                  ┌──────▼──────┐
                  │  MongoDB    │
                  └─────────────┘



---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/citizen-portal.git
cd citizen-portal



2️⃣ Build Docker Images
Make sure you’re in the root project folder with the docker-compose.yml.

bash
Copy
Edit
docker-compose up -d
```


Access:

Frontend: http://localhost:3000

Backend: http://localhost:5000/api/payments

MongoDB: internal via mongo:27017

Github Actions: https://github.com/your-username/citizen-portal/actions

Lets push the code and the code will be deployed to the server.




