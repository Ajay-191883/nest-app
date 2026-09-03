import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return 'User data fetched successfully!!';
  }

  @Post()
  postUser() {}
}
