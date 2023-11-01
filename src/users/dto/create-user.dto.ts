import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'JohnDoe@gmail.com', description: 'Email adress' })
    readonly email: string;

    @ApiProperty({ example: '12345678', description: 'Password' })
    readonly password: string
}