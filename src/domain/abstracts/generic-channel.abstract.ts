export abstract class IGenericChannel {
  abstract on(event: any, callback: any): Promise<void> | void;

  abstract sendMessage(chat_id: string, message: string): Promise<void> | void;
}
