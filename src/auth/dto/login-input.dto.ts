import { IsNotEmpty, IsString } from 'class-validator';

export class LoginInputDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}