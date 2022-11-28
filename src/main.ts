import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramAdapter } from './infrastruture/channels';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  new TelegramAdapter('5723899138:AAEn_kwZ1fbGX4sIhd6JJ2ThRb8BT_93Gjw');

  await app.listen(3000);
}
bootstrap();
