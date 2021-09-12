[docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

# follow these steps to deploy node js application

1. What it assume you have already
2. Installing heroku CLI
3. prepare your application
4. deploy your application
5. view logs and scale it.
6. pushing the local changes

## 1. What it assume you have already

The tutorial assumes that you have a free Heroku account with Node.js, npm and git installed locally, check version to confirm them.

```go
node --version
```

```go
npm --version\
```

```go
git --version
```

## 2. install heroku cli by

This is heroku CLI tool help use to do everything like push, login, view log etc it will make sense first install heroku.

```go
sudo snap install heroku --classic
```

Now login by following command

```go
heroku login
```

## 3. prepare your application

1. application repo
2. buid the proc file
3. declare app dependencies

#### application repo

i recomend you to use this dummy and follow the step. at first don't risk your application. so clone and start the application.

```go
git clone https://github.com/wizzenalum/deploy.learn
```

```go
cd deploy.learn/heroku/nodejs-express-mongodb-project/
```

```go
npm install
```

```go
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/)

#### build proc file

Procfile is a text file in the root directory of your application, to explicitly declare what command should be executed to start your app.
you already have it look at it.
[more](https://devcenter.heroku.com/articles/procfile)

#### Declare app dependencies

Heroku recognizes an app as Node.js by the existence of a package.json file in the root directory. For your own apps, you can create one by running...

```go
npm init --yes
```

#### run app locally

before deploy we can check will this app work or not on heroku by running it locally

```go
heroku local web
```

terminalte by CTL+C

## deploy your application

1. make git repository by following commands

```go
git init
git add .
git commit -m "initial commit"
```

2. create heroku app using following command or you can create from dashbord.

```go
heroku create <app name>
```

3. clone git source code. follow this step if you created app from dashbord else it will be created automatically

```go
heroku git:clone -a <app name>
```

4. build the applicaiton

```go
git push heroku master
```

5. The application is now deployed. Ensure that at least one instance of the app is running:

```go
heroku ps:scale web=1
```

6. start application at heroku.

```go
heroku open
```

## view logs and scale it

#### view logs

Heroku treats logs as streams of time-ordered events aggregated from the output streams of all your app and Heroku components.[more](https://devcenter.heroku.com/articles/logging)

```sh
heroku logs --tail
```

terminate by CTL+C

#### scalling the app

```sh
heroku ps
heroku ps:scale web=0
heroku ps:scale web=1
```

## pushing the local changes

1. make changes and commit the code in git.

```sh
git add .
git commit -m "msg"
```

2. push the code to the heroku by main remote

```sh
git push heroku main
```

[hero](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
