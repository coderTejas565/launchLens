# LaunchLens

Live Demo: https://launch-lens-five.vercel.app/

Repository: https://github.com/coderTejas565/launchLens

---

## Overview

LaunchLens is a full-stack project feedback platform built with Next.js.

It allows makers to submit their projects, share them publicly, and receive structured feedback from other builders through ratings, strengths, and improvement suggestions.

The platform is designed around a simple feedback loop:

```text
Submit Project
      ↓
Receive Feedback
      ↓
Improve Project
      ↓
Share Again
```

This project was built to demonstrate core full-stack Next.js concepts including App Router, Route Groups, Server Actions, API Routes, SSR, ISR, database integration, CRUD operations, and modern SaaS architecture patterns.

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
- Share strengths and improvement suggestions
- View feedback history
- Calculate and display average ratings

### Rendering Strategies

- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Server Side Rendering (SSR)

### API Features

- RESTful API Routes
- Structured JSON responses
- GET, POST, PATCH, and DELETE operations
- Proper error handling

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

### Deployment

- Vercel

---

## Project Structure

```text
src
├── actions
│   ├── project.actions.ts
│   └── feedback.actions.ts
│
├── app
│   ├── (marketing)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── (app)
│   │   ├── layout.tsx
│   │
│   │   ├── projects
│   │   │   ├── page.tsx
│   │   │   └── [id]
│   │   │       └── page.tsx
│   │   │
│   │   └── dashboard
│   │       ├── page.tsx
│   │       ├── new
│   │       │   └── page.tsx
│   │       └── edit
│   │           └── [id]
│   │               └── page.tsx
│   │
│   ├── api
│   │   ├── projects
│   │   │   ├── route.ts
│   │   │   └── [id]
│   │   │       └── route.ts
│   │   │
│   │   └── feedback
│   │       └── route.ts
│   │
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components
│   ├── shared
│   ├── project
│   └── feedback
│
├── lib
│   ├── db
│   │   └── prisma.ts
│   │
│   └── schemas
│       ├── project.schema.ts
│       └── feedback.schema.ts
│
├── types
│
└── prisma
    └── schema.prisma
```

---

## Database Schema

### Category Enum

```prisma
enum Category {
  SAAS
  AI
  WEB
  MOBILE
  TOOL
  OTHER
}
```

### Project

| Field | Type |
|---------|---------|
| id | String |
| name | String |
| description | String |
| url | String |
| category | Category |
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

Server Actions are used for direct form submissions and server-side mutations without requiring client-side API requests.

Examples:

- Creating projects
- Updating projects
- Deleting projects
- Submitting feedback

### API Routes vs Server Actions

#### API Routes

Used for:

- External access
- Postman testing
- Future mobile applications
- Public API consumption

#### Server Actions

Used for:

- Form submissions
- Database mutations
- Direct server communication

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

```ts
/projects
```

Configuration:

```ts
export const revalidate = 60;
```

Reason:

Projects update periodically but do not require rendering on every request.

---

### Server Side Rendering (SSR)

Route:

```text
/projects/[id]
```

Reason:

Project details and feedback should always display the latest available data.

---

## Error Handling

### Global Error Boundary

```text
app/error.tsx
```

Handles unexpected runtime errors.

### Not Found Page

```text
app/not-found.tsx
```

Handles invalid routes and missing projects.

### Validation

Zod schemas validate:

- Project submissions
- Feedback submissions

---

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your_database_url"
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

Application runs on:

```text
http://localhost:3000
```

---

## Production Build

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
- Dynamic Routes
- Route Groups
- Nested Layouts
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
- Cache Revalidation
- Error Boundaries
- Not Found Handling
- Full-Stack Next.js Architecture

---

## Assumptions and Limitations

- Authentication is not implemented
- Project ownership is not enforced
- Feedback submissions are public
- Dashboard currently displays all projects
- No user accounts or roles exist
- Focus is on demonstrating Next.js full-stack concepts rather than multi-user functionality

---

## Deployment

Production:

https://launch-lens-five.vercel.app/

Repository:

https://github.com/coderTejas565/launchLens

---

## What This Project Demonstrates

LaunchLens was built to showcase a complete full-stack Next.js application using modern App Router architecture.

The project demonstrates:

- Route Groups for separating marketing and application experiences
- Server Actions for direct server-side mutations
- API Routes for external access and REST operations
- Prisma ORM with PostgreSQL
- Multiple rendering strategies (SSG, ISR, SSR)
- Full CRUD functionality
- Validation and error handling
- Production deployment on Vercel

The implementation prioritizes clean architecture, maintainable code structure, and proper use of Next.js features taught throughout the course.