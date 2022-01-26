# NLP Project

##Overview
This project requires you to create a NLP project uses various webpack features, 
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

Instructions
- to run with webpack dev server, type "npm run build-dev-server"
- to run in production mode, type "npm run start"
- to run in dev mode, type "npm run build-dev" (if for some reason you do not want to trigger the dev server)

## Special Installation notes:
- Since this project uses some webpack 4 features which are depreciated, 
to ensure it works for you, you should use "npm i --leacy-peer-deps".
- Also, I have a git ignore .env file which I stored my API key. You should
go to www.meaningcloud.com to grab your own API key.
- Once you get your API key, replace the key value in .env.example and rename it to
.env

##Technology Used
Javascript, html, css, webpack

##Author
Tsai-Ting Wang

##Credits
Base Version is provided by Udacity

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. 

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
