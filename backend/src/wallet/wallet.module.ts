import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';

@Module({
  providers: [WalletService], // Registra el servicio
  controllers: [WalletController], // Registra el controlador
})
export class WalletModule {}