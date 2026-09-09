import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service.js';

@Controller('database')
export class DatabaseController {
  constructor(private dbService: DatabaseService) {}

  @Get('status')
  getStatus() {
    return {
      status: this.dbService.getStatus(),
    };
  }
}
