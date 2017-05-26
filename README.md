# Rubyles

## Running Locally
As long as Docker and Docker Compose are already setup, all you have to do is:

```
docker-compose up

# Run migrations
docker-compose exec api db-migrate up

# Insert test data
docker-compose exec db psql -U uname -d rubyles

INSERT INTO "transactions" ("payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount") values('Livingoods', '1234', '2017-05-25', true, 1299, 0);
INSERT INTO "transactions" ("payee", "referenceNumber", "date", "cleared", "paymentAmount", "depositAmount") values('Bazzanos', '1235', '2017-05-26', false, 0, 2500);
```

WEB: http://127.0.0.1:3001
API: http://127.0.0.1:8080
