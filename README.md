# Basic Message
This project is an example of how create a messaging app using React and Redux.

It uses the principes of Create React App but some parts are more NextJS inspired.
## Installation
After cloning the repository, you just need to install the dependencies :
```
npm install
```
or using yarn
```
yarn install
```
## Folders structure
The projet source code is located in the `/src` folder.
### Components
All the visual components are in the `/src/components/` folder.

This folder contains a `/core` folder that contains the basic visual components used through the project as a UI kit. These components **cannot** interact with any outer context except an upcoming theming context.

The others components are more complexe and can interact with redux.

## Middlewares
This folder contains middlewares for librairies such as `axios`, `redux`, etc.

## Pages
This folder contains all pages related to a route even tough there is no routing for the moment. This could allow an easier transition to NextJS.

## Resources
This folder contains all files related to third party api (REST, GraphQL, etc.). It contains the `axios` config file, the `/messages` endpoints manager and a `/mock` folder.

The `/mock` folder allows you to work without any api, while keeping your code clean from testing workaround.

## Store
This folder contains `redux store` related files (reducer and selector)

## Utils
This folder contains test and redux configuration files and could contain helpers as well.