# dokku-getting-started

A simple React + Vite application served via an Express server

## Installation

`pnpm install`

## Development

To run the app in development mode (hot reload with Vite):

`pnpm dev`

## Dokku Deployment

1. Create a Dokku app:
`dokku apps:create <your-dokku-app>`

2. Push your code to Dokku
```
git remote add dokku dokku@<your-dokku-server>:<your-dokku-app>
git push dokku master
```
