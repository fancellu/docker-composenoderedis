# A nodejs express web app talking to Redis inside Docker, via docker-compose 

You need to have Docker installed

## To run/build

`docker-compose up --build`

In the background

`docker-compose up --build -d`

To stop in background

`docker-compose down`  

## Browser

Point browser at localhost:8081/visit

You should see the number of visits, as stored in redis.

To crash the node server goto localhost:8081/crash

You'll see that is crashes, but recovers, localhost:8081 still works fine

 