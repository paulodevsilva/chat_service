import { Injectable } from '@nestjs/common';
import * as Telegram from 'node-telegram-bot-api';
import { IGenericChannel } from 'src/domain';

@Injectable()
export class TelegramAdapter implements IGenericChannel {
  _telegram: Telegram;

  constructor(token) {
    this._telegram = new Telegram(token, { polling: true });

    this.on('polling_error', (error) => {
      throw new Error(error?.message);
    });

    // this.on('message', (msg) => {
    //   const chatId = msg.chat.id;

    //   this.sendMessage(chatId, 'hello world');
    // });
  }

  on(event: any, callback: any): void | Promise<void> {
    this._telegram.on(event, callback);
  }
  sendMessage(chat_id: string, message: string): void | Promise<void> {
    this._telegram.sendMessage(chat_id, message);
  }
}
