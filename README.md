# Rubyles

## Running Locally
As long as Docker and Docker Compose are already setup, all you have to do is:

```
docker-compose up

# Run migrations
docker-compose exec api db-migrate up
```

WEB: http://127.0.0.1:3001
API: http://127.0.0.1:8080
