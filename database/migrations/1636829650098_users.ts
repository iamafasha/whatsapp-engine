import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Hash from '@ioc:Adonis/Core/Hash'
import Env from '@ioc:Adonis/Core/Env'


export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })

    this.defer(async (db)=>{
      await db.table(this.tableName).insert([
        {
          email: Env.get('ADMIN_EMAIL'),
          password: await Hash.make(Env.get('ADMIN_PASSWORD')),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ])
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
