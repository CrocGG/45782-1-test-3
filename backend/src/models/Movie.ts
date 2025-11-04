import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Cinema from "./Cinema";

@Table({
    underscored: true
})
export default class Movie extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Cinema)
    @AllowNull(false)
    @Column(DataType.UUID)
    cinemaId: string 

    @AllowNull(false)
    @Column(DataType.STRING)
    movieName: string

    @AllowNull(false)
    @Column(DataType.DATE)
    movieTime: Date

    @AllowNull(false)
    @Column(DataType.INTEGER)
    movieLength: number

    @BelongsTo(() => Cinema)
    cinema: Cinema
}
