import { Controller, Get, Query } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  // Endpoint para obtener el balance de una wallet
  @Get('balance')
  async getBalance(@Query('address') address: string): Promise<string> {
    return await this.walletService.getBalance(address);
  }
}
