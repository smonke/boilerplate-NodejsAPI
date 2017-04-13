## Boilerplate for Nodejs API

### Description
Boilerplate to create an API within 5 mins

### How to start

````
#build
npm build
#devMode
npm run dev
````
### rename
1. package.json
	- name
	- author
2. model/example.js
3. controller/example.js
4. config/index.js
5. routes/index.js
6. change drc/config/index.js mongoUrl to 'localhost' if dockers not used


### Todo
- [ ] python scripts for renaming
- [x] dockerfile
- [x] dockerize mongodb
- [ ] env variable

### Docker 
````
docker build -t test:01 .
docker run -p 8080:8080 -it test:0.1
# start new mongodb
docker run --name database -d -p 27017:27017 mongo --noauth --bind_ip=0.0.0.0
#run image
docker run -p 27017:27017 -it mongo
````


