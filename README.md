# module-federation-platform
## A simple example of a platform built with webppack 5 module federation

This projects shows a simple example to built the base of a platform using module federation and react

## Structure

This project has two react projects one is the platform, that is the main project that will be the base for other applications to integrate. And we have the example-application that is an example of an application that will be integrate to the platform 

## Installation

Go to the platform project and run npm install and npm run the platform

```bash
cd platform
npm i
npm start
```

Now in another shell go to example-application, install the dependencies, build the project and run serve to emulate a bucket

```bash
cd example-application
npm i
npm run build
npm run serve
```

## How this project works

The platform is the base of the project that will render another front-ends inside of the platform. This is the only front-end that will be running. The example-application run serve to simulate a bundle published on a bucket like Amazon S3. Also the example is hard coded with an id, but the concept is to create an api to create an id for each application that will be integrate. With this api the platform will be able to provide an api to create a dynamic menus with route to each application. Using this concepts the platform will be able to add many applications to the platform without rebuild or editing code, just saving menus and applications to api and deploying application`s bundle to a bucket.
