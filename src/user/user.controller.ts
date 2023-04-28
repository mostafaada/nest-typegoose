import { Body, Controller, Get, Post } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Get()
  async getUsers(): Promise<User[] | null> {
    return await this.userService.getAll();
  }

  @Get("/:_id")
  async getUser(@Param("_id") _id: string): Promise<User | null> {
    return await this.userService.getOne(_id);
  }
}
