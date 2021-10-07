import { WebPlugin } from '@capacitor/core';

// TODO lvb, maybe implement a safe mock web plugin for development
import type { UDPPlugin } from './definitions';

export class UDPWeb extends WebPlugin implements UDPPlugin {
  create(options?: {
    properties?: {
      name?: string;
      bufferSize?: number;
    } ;
  }): Promise<{ socketId: number; ipv4: string; ipv6: string; }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
}
