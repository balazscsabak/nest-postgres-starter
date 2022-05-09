import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsString()
  @MinLength(8)
  public password!: string;
}
