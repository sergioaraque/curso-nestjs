import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RutasController } from './rutas/rutas.controller';
import { PatronesController } from './patrones/patrones.controller';
import { PayloadController } from './payload/payload.controller';

@Module({
  imports: [],
  controllers: [AppController, RutasController, PatronesController, PayloadController],
  providers: [AppService],
})
export class AppModule {}
