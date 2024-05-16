import { Controller, Get, Req } from '@nestjs/common';

@Controller('bill') //this is URL path
export class BillController {
  // constructor dependency injection of BillService
  //constructor(private readonly BillService: BillService) { }

  @Get() // default GET response on /bill
  findAll(@Req() req: Request): string {
    console.log(req);
    return 'This action return all bills in the system';
  }
}