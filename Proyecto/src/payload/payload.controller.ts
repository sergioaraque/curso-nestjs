import { Body, Controller, Post} from '@nestjs/common';
import { EjemploDto } from '../ejemplo-dto';

@Controller('payload')
export class PayloadController {
  @Post()
  async create(@Body() createDto: EjemploDto) {
    // this.objects.push(createDto);
    //return `Nombre del objeto: ${createDto.age}`;
    return createDto;
  }
}