import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.addCustomer(body);
  }
}
