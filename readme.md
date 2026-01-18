# hungert

An app that makes suggestions for meals, taking the stress out of weekly meal planning and shopping list creation.

Pages are:
- `/meals/generate` which suggests meals along with their ingredients
- `/meals/new` which allows users to add meals to the db via a form

## Stack

- Next.js
- Neon
- Prisma
- Vercel
- Typescript

## Installation

- Pull down the repo
- Run `npm install`
- Copy .env.example and rename as .env
- Get Neon Postgres connection string and replace in .env

## Getting Started

Run the development server with `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployments

Pushing to main will kick off the deployment job through Vercel. Changes should be quickly visible on https://hungert.vercel.app/
