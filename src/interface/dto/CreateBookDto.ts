import { IsString, IsNumber } from "class-validator";

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsNumber()
  year!: number;

  @IsNumber()
  price!: number;

  @IsString()
  isbn!: string;

  @IsString()
  publisher!: string;
}