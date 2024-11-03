import { CreateUserDto } from './create-user.dto';
import {
  IsOptional,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(['INTERNS', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role?: 'INTERNS' | 'ENGINEER' | 'ADMIN';
}
