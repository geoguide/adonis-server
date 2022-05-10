import uuid from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeCreate, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Study from './Study'

export default class Organization extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static assignUuid (org: Organization) {
    org.id = uuid()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public auth0_org_id: string

  @column()
  public slug: string

  @hasMany(() => Study, { foreignKey: 'organization_id' })
  public studies: HasMany<typeof Study>
}
