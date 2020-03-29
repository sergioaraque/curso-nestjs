import { Controller, Post } from '@nestjs/common';

@Controller('rutas')
export class RutasController {
  @Post()
  postSimple(): string {
    return 'post /rutas';
  }
}
