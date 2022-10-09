 import {knex} from './database/connection.js'

// console.log(process.argv)
 const restaurants = await knex( process.argv[2] ?? 'orders').leftJoin('users',{'orders.user_id': 'users.id'})
 console.log(restaurants)
 


 await knex.destroy()