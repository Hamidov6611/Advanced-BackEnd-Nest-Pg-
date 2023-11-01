import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.models';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'JohnDoe@gmail.com', description: 'Email adress' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;


  @ApiProperty({ example: 'true', description: 'Banned or unbanned' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Ban Reason', description: 'Block' })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  banReason: string;


  @BelongsToMany(() => Role, () =>  UserRoles)
  roles: Role[]
}
