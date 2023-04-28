import { Injectable } from "@nestjs/common";
import { ReturnModelType } from "@typegoose/typegoose";
import { InjectModel } from "nestjs-typegoose";
import { User } from "./user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async create(createUserDto: { name: string }): Promise<User> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async getAll(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async getOne(_id): Promise<User | null> {
    return await this.userModel.findById(_id).exec();
  }
}
