# PLMAT API
**Maintain and Manage Tour users.**

### Contains 1 micro service:
- PLMAT API

### Instructions:
#### Step 1: Install missing node modules
```
npm install
```
#### Step 2: Start docker container and build app
```
npm start
```
(the server might need 30s for initialising before the tests can run)
- Base API URL: `http://0.0.0.0:3050/api`
- API Explorer: `http://0.0.0.0:3050/explorer`

#### Step 3: API Tests
```
npm test
```
#### Step 4: Stop docker container
```
npm stop
```
#### Step 5: Check docker container logs (optional)
```
npm run logs
```
#### Step 6: API Test Coverage (optional)
```
[For Linux]
npm run test:coverage:linux
```
```
[For Mac]
npm run test:coverage:mac
```
#### Step 7: Run development environment
```
npm run start:dev
```
# Windows User - Read this to get LF END OF LINE. 
### This is important, otherwise, you won't start the services. 

#### Approach one:
*  run following two cmds:
  * git config --global core.eol lf
  * git config --global core.autocrlf input
* re-clone again from git

#### Approach two:
* git config --global core.eol lf
* git config --global core.autocrlf input
* git rm -rf --cached .
* git reset --hard HEAD

Then *.js and *.sh ends with LF now.

Refer to http://stackoverflow.com/questions/2517190/how-do-i-force-git-to-use-lf-instead-of-crlf-under-windows

