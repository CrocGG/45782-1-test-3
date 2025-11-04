import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Group from "./Group";

@Table({
    underscored: true
})
export default class Meeting extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Group)
    @AllowNull(false)
    @Column(DataType.UUID)
    groupId: string 

    @AllowNull(false)
    @Column(DataType.STRING)
    meetingName: string

    @AllowNull(false)
    @Column(DataType.DATE)
    meetingTime: Date

    @AllowNull(false)
    @Column(DataType.INTEGER)
    meetingLength: number

    @BelongsTo(() => Group)
    group: Group
}
