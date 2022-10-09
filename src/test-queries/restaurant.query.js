import {knex} from '../src/database/connection.js'

// console.log(process.argv)
 const restaurants = await knex( 'restaurants').where({id:1}).first()
 console.log(restaurants)
 


 await knex.destroy()