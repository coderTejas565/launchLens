# LaunchLens

## Overview

LaunchLens is a full-stack project feedback platform built with Next.js. It allows makers to submit their projects, share them publicly, and collect structured feedback from other builders.

The platform is designed to help developers receive actionable insights on their projects through ratings, strengths, and improvement suggestions.

This project was built to demonstrate core full-stack Next.js concepts including App Router, Server Actions, API Routes, SSR, ISR, database integration, and CRUD operations.

---

## Features

### Project Management

- Create a new project
- View all projects
- View individual project details
- Edit project information
- Delete projects

### Feedback System

- Submit feedback for any project
- Rate projects from 1–5
- Provide strengths and improvement suggestions
- View all feedback for a project
- Calculate and display average project rating

### Rendering Strategies

- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Server Side Rendering (SSR)

### API Features

- RESTful API routes
- Structured JSON responses
- GET, POST, PATCH, and DELETE operations
- Error handling

### Server Actions

- Create Project
- Update Project
- Delete Project
- Submit Feedback

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend

- Next.js Server Actions
- Next.js Route Handlers

### Database

- PostgreSQL
- Prisma ORM
- Neon Database

### Validation

- Zod

---

## Project Structure

```text
src
├── actions
│   ├── project.actions.ts
│   └── feedback.actions.ts
│
├── app
│   ├── (public)
│   │   ├── page.tsx
│   │   └── projects
│   │       ├── page.tsx
│   │       └── [id]
│   │           └── page.tsx
│   │
│   ├── dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── new
│   │   │   └── page.tsx
│   │   └── edit
│   │       └── [id]
│   │           └── page.tsx
│   │
│   ├── api
│   │   ├── projects
│   │   └── feedback
│   │
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components
│
├── lib
│   ├── db
│   │   └── prisma.ts
│   │
│   └── schemas
│       ├── project.schema.ts
│       └── feedback.schema.ts
│
└── prisma
    └── schema.prisma
```

---

## Database Schema

### Project

| Field | Type |
|---------|---------|
| id | String |
| name | String |
| description | String |
| url | String |
| category | Enum |
| createdAt | DateTime |
| updatedAt | DateTime |

### Feedback

| Field | Type |
|---------|---------|
| id | String |
| rating | Int |
| strengths | String |
| improvements | String |
| projectId | String |
| createdAt | DateTime |

Relationship:

```text
Project
   |
   └── Feedback[]
```

One project can have multiple feedback entries.

---

## Routes

### Public Routes

| Route | Description |
|---------|---------|
| / | Landing page |
| /projects | Project listing page |
| /projects/[id] | Project details and feedback page |

### Dashboard Routes

| Route | Description |
|---------|---------|
| /dashboard | Dashboard overview |
| /dashboard/new | Create project |
| /dashboard/edit/[id] | Edit project |

---

## API Routes

### Projects

| Method | Endpoint |
|---------|---------|
| GET | /api/projects |
| POST | /api/projects |
| GET | /api/projects/[id] |
| PATCH | /api/projects/[id] |
| DELETE | /api/projects/[id] |

### Feedback

| Method | Endpoint |
|---------|---------|
| GET | /api/feedback |
| POST | /api/feedback |

---

## Server Actions Used

### Project Actions

- createProject()
- updateProject()
- deleteProject()

### Feedback Actions

- createFeedback()

### Why Server Actions?

Server Actions are used for form submissions and direct server-side mutations without creating additional API calls from the client.

Examples:

- Creating projects
- Updating projects
- Deleting projects
- Submitting feedback

---

## Rendering Strategies

### Static Site Generation (SSG)

Route:

```text
/
```

Reason:

The landing page content is static and does not require request-time data.

---

### Incremental Static Regeneration (ISR)

Route:

```text
/projects
```

Configuration:

```ts
export const revalidate = 60;
```

Reason:

Projects update periodically, but not on every request. ISR provides better performance while keeping content fresh.

---

### Server Side Rendering (SSR)

Route:

```text
/projects/[id]
```

Reason:

Project details and feedback data should always be fetched at request time to ensure users see the latest information.

---

## Error Handling

The application includes:

### Route Error Boundaries

```text
app/error.tsx
```

Handles unexpected runtime errors.

### Not Found Page

```text
app/not-found.tsx
```

Handles invalid or missing routes.

### Validation

Zod schemas are used to validate:

- Project data
- Feedback data

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL="YOUR_DATABASE_URL"
```

---

## Database Setup

### Install Dependencies

```bash
pnpm install
```

### Generate Prisma Client

```bash
pnpm prisma generate
```

### Run Database Migration

```bash
pnpm prisma migrate dev
```

---

## Running Locally

### Install Dependencies

```bash
pnpm install
```

### Start Development Server

```bash
pnpm dev
```

Application will run at:

```text
http://localhost:3000
```

---

## Build for Production

```bash
pnpm build
```

```bash
pnpm start
```

---

## Concepts Covered

This project demonstrates:

- Next.js App Router
- File-Based Routing
- Nested Layouts
- Dynamic Routes
- Server Components
- Server Actions
- API Routes
- Prisma ORM
- PostgreSQL Integration
- CRUD Operations
- Zod Validation
- SSR
- SSG
- ISR
- Error Handling
- Cache Revalidation

---

## Assumptions and Limitations

- Authentication is not implemented.
- Project ownership is not enforced.
- Feedback submissions are public.
- Dashboard currently displays all projects.
- The application focuses on demonstrating full-stack Next.js concepts rather than multi-user functionality.

---

## Deployment

Live URL:

```text
Add deployment link here
```

Repository:

```text
https://github.com/coderTejas565/launchLens.git
```