# next-exam-clock
## docker

build image
```
docker build -t next-exam-clock .
docker compose run --rm app sh -c 'npx create-next-app . --typescript'
```

run container
```
docker compose up
```

enter container
```
docker exec -it <CONTAINER ID> sh
```
