# Rubyles

## Running Locally
As long as Docker and Docker Compose are already setup, all you have to do is:

```
docker-compose up -d

# Start API and frontend
docker-compose exec api npm start
docker-compose exec web npm start

# Run tests
npm test
```

WEB: http://127.0.0.1:3001
API: http://127.0.0.1:8080
