import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {
  }
  @Get(':name')
  public create(@Param('name') name: string) {
    return this.userService.create(name);
  }
  @Get()
  public getUsers() {
    return this.userService.getUsers();
  }
}
