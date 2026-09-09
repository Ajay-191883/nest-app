import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard.js';
import { Role } from '../guards/roles/roles.enums.js';
import { Roles } from '../guards/roles/roles.decorator.js';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return {
      message: 'Only Admin can access',
    };
  }

  @Get('user-data')
  getUserData() {
    return {
      message: 'Anyone can access',
    };
  }
}
