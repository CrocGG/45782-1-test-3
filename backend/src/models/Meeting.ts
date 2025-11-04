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
    @Column(DataType.DATE)
    meetingStart: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    meetingFinish: Date

    @AllowNull(false)
    @Column(DataType.TEXT)
    meetingDescription: string

    @AllowNull(false)
    @Column(DataType.STRING)
    meetingRoom: string

    @BelongsTo(() => Group)
    group: Group
}
