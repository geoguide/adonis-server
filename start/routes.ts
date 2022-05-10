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
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import Organization from '../app/Models/Organization'
import Study from '../app/Models/Study'

Route.get('/studies', async () => {
  console.log('hi')
  return await Study.query().preload('organization')
})

Route.get('/:id', async ({ params }) => {
  const org = await Organization.find(params.id)
  return await org?.auth0_org_id
})

Route.get('/', async () => {
  return await Organization.query().preload('studies')
})
