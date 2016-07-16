# Install

That app use Docker and Docker Compose

# Run

```
docker-compose up -d
```

or

```
nodemon -x docker-compose up
```

Restart container when a files has changed.

# Test

```
docker exec -it server_web_1 npm run test
```
