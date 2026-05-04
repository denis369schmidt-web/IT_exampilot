# ExamPilot Learning Path

Use this project as your practical full-stack learning project. The goal is not to memorize every file, but to understand how one real feature travels through frontend, API, validation, business logic, database, tests, and Git.

The running app also has a `Lernen` page. Use it as your AP1/AP2 checklist while you work through this file.

## How To Learn With This App

Work in small loops:

1. Read the listed files.
2. Explain in your own words what they do.
3. Change one small thing.
4. Run the app or tests.
5. Commit the change with a clear message.

If you get stuck, ask: "Explain lesson X using my code."

---

## Lesson 1: Project Structure

Goal: Understand what belongs where.

Read:

- `README.md`
- `docker-compose.yml`
- `backend/package.json`
- `frontend/package.json`

Learn:

- The backend is the API.
- The frontend is the browser app.
- The database stores users and topics.
- Docker normally runs PostgreSQL, but your local no-admin setup can use SQLite.

Practice:

- Find where the backend starts.
- Find where the frontend starts.
- Find the npm scripts for dev, build, and test.

You understand this lesson when you can answer:

- What does `npm run dev` do in backend?
- What does `npm run dev` do in frontend?
- Why does the project have two `package.json` files?

---

## Lesson 2: Backend Entry Point

Goal: Understand how an Express API starts.

Read:

- `backend/src/server.ts`
- `backend/src/app.ts`
- `backend/src/config/env.ts`

Learn:

- `server.ts` starts the HTTP server.
- `app.ts` creates the Express app and registers middleware/routes.
- `env.ts` loads environment variables.

Practice:

- Change the `/health` message.
- Restart the backend.
- Open `http://localhost:5000/health`.

You understand this lesson when you can explain:

- What middleware is.
- Why CORS is needed.
- Why environment variables are not hardcoded.

---

## Lesson 3: Authentication

Goal: Understand register, login, JWT, and password hashing.

Read:

- `backend/src/modules/auth/auth.routes.ts`
- `backend/src/modules/auth/auth.controller.ts`
- `backend/src/modules/auth/auth.validation.ts`
- `backend/src/modules/auth/auth.service.ts`
- `backend/src/middleware/auth.middleware.ts`

Learn the request flow:

```text
Browser form
-> POST /api/auth/register
-> route
-> controller
-> Zod validation
-> service
-> Prisma database query
-> JWT response
```

Practice:

- Register a user in the app.
- Try registering the same email twice.
- Find where the duplicate email error is created.

You understand this lesson when you can answer:

- Why passwords are hashed.
- What a JWT token is used for.
- How `/api/auth/me` knows who the user is.

---

## Lesson 4: Database And Prisma

Goal: Understand how TypeScript talks to the database.

Read:

- `backend/prisma/schema.prisma`
- `backend/src/prisma/client.ts`
- `backend/prisma/schema.sqlite.prisma` if you use the no-admin local setup

Learn:

- `User` stores accounts.
- `Topic` stores learning topics.
- A user can have many topics.
- Prisma generates a typed database client.

Practice:

- Add a new field idea on paper first, for example `targetDate`.
- Decide whether it belongs on `User` or `Topic`.
- Ask Codex to help implement it after you can explain why.

You understand this lesson when you can explain:

- What a relation is.
- Why `Topic` has `userId`.
- What `onDelete: Cascade` means.

---

## Lesson 5: Topic CRUD

Goal: Understand create, read, update, delete.

Read:

- `backend/src/modules/topics/topic.routes.ts`
- `backend/src/modules/topics/topic.controller.ts`
- `backend/src/modules/topics/topic.validation.ts`
- `backend/src/modules/topics/topic.service.ts`

Learn:

- CRUD means create, read, update, delete.
- Validation protects the API from bad input.
- Services contain the main business/database logic.

Practice:

- Create a topic in the app.
- Delete it.
- Find the backend function that deleted it.
- Change the maximum title length from 120 to 160.

You understand this lesson when you can trace:

```text
Click "Thema speichern"
-> frontend API call
-> backend route
-> validation
-> database create
-> dashboard reload
```

---

## Lesson 6: Dashboard Aggregation

Goal: Understand how raw database rows become useful UI numbers.

Read:

- `backend/src/modules/dashboard/dashboard.routes.ts`
- `backend/src/modules/dashboard/dashboard.controller.ts`
- `backend/src/modules/dashboard/dashboard.service.ts`
- `frontend/src/pages/DashboardPage.tsx`
- `frontend/src/components/StatCard.tsx`

Learn:

- The backend calculates summary numbers.
- The frontend displays those numbers.
- `StatCard` is a reusable component.

Practice:

- Add a few topics with different progress values.
- Check whether the average changes.
- Add one hard topic and see `hardOpenTopics` change.

You understand this lesson when you can explain:

- Why summary calculation is in the backend.
- Why `StatCard` exists instead of repeating the same JSX.

---

## Lesson 7: Frontend Basics

Goal: Understand React state, forms, routes, and API calls.

Read:

- `frontend/src/main.tsx`
- `frontend/src/App.tsx`
- `frontend/src/api/client.ts`
- `frontend/src/api/auth.ts`
- `frontend/src/api/topics.ts`
- `frontend/src/pages/LoginPage.tsx`
- `frontend/src/pages/RegisterPage.tsx`
- `frontend/src/pages/DashboardPage.tsx`

Learn:

- React Router chooses the page.
- Axios sends requests to the backend.
- `localStorage` stores the JWT token.
- State controls form fields and dashboard data.

Practice:

- Change a button label.
- Add a loading text while topics are loading.
- Add an error message if topic creation fails.

You understand this lesson when you can answer:

- What `useState` stores.
- What `useEffect` does on the dashboard.
- How the token reaches the backend.

---

## Lesson 8: Tests

Goal: Understand automated checks.

Read:

- `backend/jest.config.js`
- `backend/src/tests/setup.ts`
- `backend/src/tests/health.test.ts`

Run:

```bash
cd backend
npm test
```

Practice:

- Add a test that checks the health message.
- Break the health endpoint intentionally.
- Run the test and watch it fail.
- Fix it again.

You understand this lesson when you can explain:

- Why tests are useful.
- What `supertest` does.
- Why test env variables are separate from production env variables.

---

## Lesson 9: Git And Portfolio Workflow

Goal: Learn how to work like a developer.

Use this loop:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Practice commit ideas:

- `Add dashboard loading state`
- `Improve topic validation`
- `Add auth error test`
- `Document local SQLite setup`

You understand this lesson when you can explain:

- What changed files are.
- What a commit is.
- Why small commits are better than one huge commit.

---

## Suggested Feature Exercises

Do these in order:

1. Add a loading state to the dashboard.
2. Add frontend error handling when topic creation fails.
3. Add an edit button for topics.
4. Add `lastPracticed` input in the topic form.
5. Add a backend test for duplicate email registration.
6. Add a dashboard card for completed percentage.
7. Add README screenshots.
8. Add deployment notes.

Each feature teaches one real developer skill without making the project too chaotic.

---

## Questions To Ask Codex

Good prompts:

- "Explain Lesson 3 using my auth files."
- "Give me a small exercise for React state in this app."
- "Quiz me on the topic service."
- "Review my change before I commit."
- "Show me the request flow for creating a topic."
- "Help me implement exercise 1, but explain every step."

Bad prompts:

- "Make everything better."
- "Teach me coding."
- "Fix it."

Specific questions get specific learning.
