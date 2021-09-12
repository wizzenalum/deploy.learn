# Deploy react application

you can deploy your react application on any serviece even it is supports only static websites only.

## Github

Steps to be followed:

- Push your code on Github.
- In package.json add after “name”

```go
  "homepage": "https://{github-username}.github.io/{repo-name}",
```

- In terminal type this command

```go
  npm install --save gh-pages
```

- In package.json file add following line at script section.

```go
  "predeploy" : "npm run build",
  "deploy" : "gh-pages -d build”
```

Note: if you want to deploy user page instead of the project page
"deploy" : "gh-pages -b master -d build"

- At the end you type following command
  ```go
  npm run deploy
  ```
- repository setting -> GitHub pages and the deployed link would be available. or the link will be same as homepage defined above.

```sh
https://{github-username}.github.io/{repo-name}
```

## Heroku

Steps to be followed:

1. Push your code on Github.
2. Login to Heroku and go on this [link](https://dashboard.heroku.com/apps)
3. Click on New -> Create New App -> Give the app name ->
   Choose a Region (Europe) -> Click on Create App
4. Then Go in the settings tab and scroll a bit down there will
   be build packs, click on add build pack then paste this link:

```go
https://github.com/mars/create-react-app-buildpack
```

5. Go in Deploy tab -> select deployment method as Github
   -> Select the GitHub repo -> Choose the branch as main -> Deploy
   Branch.
6. It will create some logs and give the link after the
   successful deployment.

# Netlify

Steps to be followed:

1. Push your code on Github.
2. Login to Netlify and go on this [link](https://app.netlify.com/start)
3. Select Github -> Select your GitHub repo -> Branch to
   deploy should be master -> Click on Deploy site
   Note: If there are any environment variables then click on show
   advanced before Deploy site and set variables.
4. Then in vs code terminal type this command

```go
npm run build
```

5. Then in Netlify go in Deploys tab -> On right Click on
   Trigger Deploy -> Deploy Site
6. Some logs will be generated and then a successful
   message comes and then go in the Site Overview tab and there
   you will get the deployed URL.

# Firebase

Steps to be followed:

1. Create a project in ​ Firebase console​ and you will get a firebase
   config, create a firebase.js file and paste that in your project.
2. Now open the vscode terminal and run these commands

```go
npm i -g firebase-tools
npm i firebase
firebase login
```

```go
firebase init
```

- provide info during this operation
  - Hosting (space & enter)
  - Use an existing project (enter)
  - firebase db select that
  - build
  - Yes

```go
npm run build
```

```go
firebase deploy
```
