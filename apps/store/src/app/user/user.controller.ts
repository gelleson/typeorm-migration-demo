import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '@bsx/store';

@Controller('users2')
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
