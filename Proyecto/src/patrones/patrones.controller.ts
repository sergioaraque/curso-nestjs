import { Controller, Get } from '@nestjs/common';

@Controller('patrones')
export class PatronesController {
  @Get('ab*cd')
  findAll() {
    return 'get /rutas/abcd';
  }
}
