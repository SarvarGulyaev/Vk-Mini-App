import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const PORT = process.env.PORT || 3001

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true
  })
  app.use(cookieParser())
  try {
    await app.listen(PORT,
        () => console.log(`Server has been started on port ${PORT}`)
    )
  } catch (e) {
    console.log(e)
  }
}
bootstrap();
