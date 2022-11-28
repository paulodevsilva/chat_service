import { BaseEntity } from './base.entity';

export class Channel extends BaseEntity {
  public title: string;
  public status: ChannelStatus;
  public type: ChannelType;
  public token: string;
}

export enum ChannelStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum ChannelType {
  WHATSAPP = 'whatsapp',
  WHATSAPP_WEB = 'whatsapp_web',
  TELEGRAM = 'telegram',
}
