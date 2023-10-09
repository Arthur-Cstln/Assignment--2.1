import { development } from './knexfile.js'
import knew from 'knex'

const configuredknex = knex(development);

export default configuredknex;