# Nutcache Employee CRUD Application

This project consists of a Web application providing basic **C**reate, **R**ead, **U**pdate, and **D**elete operations to store and manipulate a list of employees.

## Project Design

- **`Web App`** with React and Redux.
  - A Home page that fetches and sends data to the Api.
- **`Api`** with ExpressJS and Mongoose.
  - A `/nutemployee` endpoint that supports:
    - `POST` to create a new employee.
    - `GET` to fetch all employees.
    - `GET` `<id>` to fetch a single employee.
    - `PUT` `<id>` to update an already registered employee.
    - `DELETE` `<id>` to delete an employee.
- **`Database`** with MongoDB.
  - providing a `employee` database to persist the data.
- **`Reverse Proxy`** with Nginx.
  - mapping `localhost` to the `Web App` port.
  - mapping `localhost/api` to the `Api` port.
  - mapping `/sockjs-node` to the `Web App` port to keep the Webpack Dev Server working.

Each service is containerized with docker compose.

## Dependencies

- Docker
- Docker compose

## Setup

```sh
$ git clone https://github.com/viniciusrsouza/nutcache-challenge-viniciussouza.git
$ cd nutcache-challenge-viniciussouza
$ docker-compose up --build
```

Nginx will listen to `localhost:80` and redirect to the application.

## Details of the solution

To store most of the state and handle its changes, Redux was used. Besides [React Icons](https://react-icons.github.io/react-icons "React Icons"), [React Redux](https://react-redux.js.org "React Redux") and [React Router](https://reactrouter.com "React Router"), no 3rd party React component was used. React Router was used to route all requisitions to `/Home`.

The state structure was divided in three main branches, the `dialogs` state is used to show and hide dialogs. It also triggers events when a dialog operation is finished and it is hidden and passes arguments before displaying it. The `employees` state stores the list of employees received from the Api. Every time a change is made this state is updated and the list of employees in the home page is refreshed. Finally, the `form` state stores a single employee that will be filled (and also read, if it's an edition) by the employee's form dialog.

As the backend, a simple RESTful Api was made using Express. It only provides the basic operations and data validation to manipulate the single data consumed and sent by the app, an employee. It also connects with the `MongoDB` database through mongoose and persists in it all the operations made.
