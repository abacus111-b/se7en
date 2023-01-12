This is a mini project (A tour API) that performs the basic CRUD operations on http requests.
There are middlewares, both in-built like the body parser, and the static middleware that enable us to send in a request in a format that would be understood, 
and also give us access to static files respectively.
We also added and modified our own middlewares to achieve some unique features as needed.
We used the mongoDB database for this project, utilising the mongoose ORM (Object Relational Mapper) to create models for our project. the model is the the structure
of how we would like to receive our requests from the user. Some of the fields of the model were made required, and others were not, as needed.
For this project, we also made use of the MVC architecture for structuring and organizing our codes.
All our handlers(functions that controlled the CRUD operations) were housed under the controller directory.
Our API can create a tour, read all tour(s), update a tour, and delete a tour(s)
Our models for both the users and the tours were housed under the model directory.
Our routers, which are like the endpoints the user inputs into his browser were housed in the router directory.
Considering this mini project is for practice, our data in the database were imported from a json file and re not real time data.
This is still a work in progress, currently, the user operations that is, create user, update user, delete user have not been implemented yet. The users functionaities would
require authentication, security and authorization
