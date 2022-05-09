import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ name: 'first_name', type: 'varchar', length: 120 })
  public firstName!: string;

  @Column({ name: 'last_name', type: 'varchar', length: 120 })
  public lastName!: string;

  @Column({ type: 'varchar', length: 120 })
  public email!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @Column({ type: 'boolean', default: false })
  public isAdmin: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
