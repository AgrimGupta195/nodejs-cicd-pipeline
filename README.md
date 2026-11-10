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

The local server uses the `PORT` value in `.env` and defaults to `3000` when
that file is not present. For example, set `PORT=5000` in `.env` and open
http://localhost:5000.

Or with Docker:

```bash
docker build -t nodejs-cicd-pipeline .
docker run -p 3000:3000 nodejs-cicd-pipeline
```

The Docker image listens on port `3000`. Open http://localhost:3000.

## Endpoints

- `GET /` : welcome message
- `GET /health` : health check
- `GET /add/:a/:b` : adds two numbers

## Pipeline Setup

Add these secrets in GitHub under **Settings → Secrets and variables → Actions**:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

The workflow runs tests for pushes and pull requests. The Docker build, Trivy
scan, and Docker Hub push run only for pushes to `main`. View the latest run
from the repository's **Actions** tab rather than saving a link to an older run.
