import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider, formatEther } from 'ethers';


@Injectable()
export class WalletService {
  private provider: JsonRpcProvider;

  constructor() {
    // Configura el proveedor con un nodo RPC público o privado
    this.provider = new JsonRpcProvider('https://sepolia.infura.io/v3/7e851c68e046408d9e11f6a5c0cf5542');
  }

  async getBalance(walletAddress: string): Promise<string> {
    // Obtén el balance en Wei y conviértelo a ETH
    const balance = await this.provider.getBalance(walletAddress);
    return formatEther(balance); // Devuelve el balance en ETH
  }
}
