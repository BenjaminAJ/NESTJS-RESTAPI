import { IsEmail, IsEnum, IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsEnum(["ENGINEER", "INTERN" , "ADMIN"], {
        message: "Valid role required"
    })
    role: "ENGINEER" | "INTERN" | "ADMIN";
}