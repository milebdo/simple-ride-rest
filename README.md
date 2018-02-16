# simple-ride-rest api design
** This API can be access under `/api` after base url with port `3000` eg: `localhost:3000/api`

## more detail about structure and design
1. Sourcecode File Structure
   - configs
     - config.js -> this file for store the secret key
     - db.js -> this file for database configuration, for this case using mongodb as database
     - VerifyToken.js -> this file use for verify token request
   - models -> for implementing database structure
   - controllers -> for store controller file, basically this file routed from main application
   - app.js -> main application
   - package.json -> npm depedencies and other settings

2. API Endpoint
   a. Authentication, basically this api for register and login purpose
      - `POST /api/auth/register` to register new user, and will return the `token`
      - `GET /api/auth/login` to handle the login process, and will return `token`
      - `GET /api/auth/logout` to logout and reset the token
   b. User, this api for view, update data, and delete the registered user*
      - `GET /api/user/` to get all users
      - `GET /api/user/:id` to get specific user
      - `PUT /api/user/:id` to update user data
      - `DELETE /api/user/:id` to delete user
   c. Ride, this api for crud (regiter new ride, update, delete and view) ride*
      - `GET /api/ride/` to get all rides
      - `GET /api/ride/:id` to get specific ride
      - `PUT /api/ride/:id` to update ride data
      - `DELETE /api/ride/:id` to delete ride
   d. Transaction, this api for log every request or transaction between customer and rider*
      - `GET /api/transaction/` to get all transactions
      - `GET /api/transaction/:id` to get specific transaction
      - `PUT /api/transaction/:id` to update transaction data (status)

   *( note : put `x-access-token` into header for send the token

### this code can be run and test:

`npm start`
access `localhost:3000/api`

