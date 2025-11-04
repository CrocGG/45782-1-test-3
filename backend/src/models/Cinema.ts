import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Meeting from "./Meeting";

@Table({
    underscored: true
})
export default class Group extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    groupName: string

    @HasMany(() => Meeting, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    meetings: Meeting[]
}