/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

//grrouped middleware
Route.group(() => {
  Route.get('/', 'DevicesController.index').as('home').middleware('auth')
  Route.get('/devices', 'DevicesController.index').as('devices.index').middleware('auth')
  Route.get('/devices/create', 'DevicesController.create').as('devices.add').middleware('auth')
}).middleware(['auth'])

Route.get('/login', 'AuthController.login')
Route.post('/login', 'AuthController.login')
