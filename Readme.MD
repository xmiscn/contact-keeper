Server: uses MongoDB in the cloud version of Atlas, express, mongoose, express-validator, bcryptjs and jwt for the authentication and hashing part.

Application is part of the Brad Traversy's Udemy course: "Modern React 16.8+ Including Hooks, Context API, Full Stack MERN & Redux By Building Real Life Projects", Final Code Repo:https://github.com/bradtraversy/contact-keeper, Express API Repo, with Documented Endpoints:
https://github.com/bradtraversy/contact_keeper_api

Tool Usage:
MongoDB Atlas: https://www.mongodb.com/

Postman Download: https://www.getpostman.com/
Usage of Postman:
Header: two parameter - x-auth-token mit dem aktuellen token und - Content-Type : application/json

Body: raw json

Data Structure:
/_ [
/_ {
id: 1,
name: 'Jill Johnson',
email: 'jill@gmail.com',
phone: '111-111-1111',
type: 'personal'
},
{
id: 2,
name: 'Sara Watson',
email: 'sara@gmail.com',
phone: '222-222-2222',
type: 'personal'
},
{
id: 3,
name: 'Harry White',
email: 'harry@gmail.com',
phone: '333-333-3333',
type: 'professional'
},
{
id: 4,
name: 'Mike Cronin',
email: 'mc@gmail.com',
phone: '444-444-4444',
type: 'personal'
} _/
], _/
