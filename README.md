# nodejs-cicd-pipeline

A simple CI/CD pipeline for a Node.js app using GitHub Actions and Docker.

Every push to `main` automatically:
1. Builds a Docker image
2. Scans the image for vulnerabilities with Trivy
3. Pushes the image to Docker Hub

## Tech Stack

Node.js, Express, Jest, Docker, GitHub Actions, Trivy, Docker Hub

## Run Locally

```bash
npm install
npm test
npm start
```

Or with Docker:

```bash
docker build -t nodejs-cicd-pipeline .
docker run -p 3000:3000 nodejs-cicd-pipeline
```

Open http://localhost:3000

## Endpoints

- `GET /` : welcome message
- `GET /health` : health check
- `GET /add/:a/:b` : adds two numbers

## Pipeline Setup

Add these secrets in GitHub under **Settings → Secrets and variables → Actions**:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
