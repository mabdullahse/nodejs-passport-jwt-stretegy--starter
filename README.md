
# PassportSessionAuth: Express-Passport-authentication-starter

NodeJS application Passport Local Strategy Usage (Node + Passport + Express + Mongoose + bcrypt).


"PassportSessionAuth" is a Node.js backend application that provides secure user authentication using Passport Local Strategy, Express-session, and MongoDB integration. The application allows users to register with a username and password, and uses bcrypt to securely hash and store the password in the database.

The authentication process is powered by Passport Local Strategy, which provides a simple and flexible way to authenticate users using a username and password. Express-session is used to store the session data in the server-side memory or in MongoDB, ensuring that user sessions remain secure.

Overall, PassportSessionAuth is a robust and secure authentication system that provides a simple and user-friendly way for users to securely register and login, while ensuring that their information remains private and secure.


## How to use 

First call to register router to create a new user.
then just simple login

### API's

 
**POST**

http://localhost:3000/register
```
//Reuest Payload
{
    "username" : "username",
    "password": "password"
}
```

http://localhost:3000/login
```
//Reuest Payload
{
    "username" : "username",
    "password": "password"
}
```


 **GET**

- http://localhost:3000/login-success
- http://localhost:3000/login-failure
- http://localhost:3000/dashboard-route-protected
- http://localhost:3000/dashboard-route
- http://localhost:3000/logout 

## 🛠 Technologies
- bcrypt
- connect-mongo
- dotenv
- express
- express-session
- mongoose
- passport
- passport-local


## Features

- Passport Local Strategy using Express-session
- Register User using bcrypt to Hash Password
- Login 
- MongoDB integration
- using Environment Variables
- Hanldling Error and Not-Found routes


## 🔗 Links
[![portfolio](https://img.shields.io/badge/mabdullah.se-685EA9?style=for-the-badge&logo=viber&logoColor=white)](https://mabdullahse.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mabdullahse/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mabdullahse)


