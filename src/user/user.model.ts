import { prop } from "@typegoose/typegoose";
import { IsString } from "class-validator";


export class User {
    @IsString()
    @prop({ required: true })
    name: string;
}