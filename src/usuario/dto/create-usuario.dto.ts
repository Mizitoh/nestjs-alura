import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    nome: string;

    @IsEmail({}, { message: 'Email inválido' })
    email!: string;

    @IsString()
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    senha!: string;
}
