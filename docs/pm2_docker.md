# Docker using PM2

## Setup
- Install PM2 inside the container (put a command inside Dockerfile that downloads and install PM2)
- docker-compose then run the command to run pm2 inside the docker container

## Other Details
- PM2 also comes with its own monitor tool. The monitor tool of PM2 reports the memory usage of the given instance and CPU usage of it
- PM2 can be integrated easily with Keymetrics to observe our node processes

## References
- [PM2 Documentation](http://pm2.keymetrics.io/)
- [How to dockerize JS Application](https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application)
- [Using pm2/forever in docker](http://stackoverflow.com/questions/28942614/should-i-use-forever-pm2-within-a-docker-container)
