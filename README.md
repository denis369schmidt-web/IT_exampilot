# ExamPilot

**ExamPilot** is a professional portfolio project for tracking IHK learning progress, exam preparation topics, and personal study performance.

The project demonstrates:

- Full-stack architecture
- REST API design
- Authentication with JWT
- PostgreSQL database modeling
- Prisma ORM
- React + TypeScript frontend
- Backend validation
- Error handling
- Dashboard aggregation
- Docker-based local development
- Test-ready project structure

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT
- bcrypt
- Zod

### DevOps

- Docker Compose
- GitHub Actions
- Environment-based configuration

---

## Project Structure

```text
exampilot/
|-- backend/
|-- frontend/
|-- docker-compose.yml
`-- README.md
```

---

## Local Development

### 1. Start PostgreSQL

```bash
docker compose up -d
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

Health check:

```text
GET /health
```

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Overview

### Auth

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Topics

```http
GET    /api/topics
POST   /api/topics
GET    /api/topics/:id
PUT    /api/topics/:id
DELETE /api/topics/:id
```

### Dashboard

```http
GET /api/dashboard/summary
```

---

## Portfolio Value

This project is suitable for a junior developer portfolio because it demonstrates a realistic full-stack application with authentication, relational data modeling, API design, and clean modular architecture.

---

## Planned Enhancements

- Swagger/OpenAPI documentation
- Refresh tokens
- E2E tests with Playwright
- PDF export
- Spaced repetition planner
- Admin dashboard for training providers
