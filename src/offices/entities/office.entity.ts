import {
  Table,
  BelongsTo,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { City } from '../../cities/entities/city.entity';
import { Company } from '../../companies/entities/company.entity';

@Table
export class Office extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
  @ForeignKey(() => City)
  @Column
  cityId: number;
  @BelongsTo(() => City)
  city: City;
  @ForeignKey(() => Company)
  @Column
  companyId: number;
  @BelongsTo(() => Company)
  company: Company;
}
