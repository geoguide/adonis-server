import uuid from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasOne, beforeCreate, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Organization from './Organization'

export default class Study extends BaseModel {
  @belongsTo(() => Organization, {
    foreignKey: 'organization_id',
  })
  public organization: BelongsTo<typeof Organization>

  @column()
  public organization_id: string

  @column({ isPrimary: true })
  public id: string

  @beforeCreate()
  public static assignUuid (study: Study) {
    study.id = uuid()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public condition_slug: string

  @column()
  public snowflake_cohort_id: string

  @column.dateTime()
  public startDate: DateTime

  @column()
  public status: string

  @column()
  public type: string
}
