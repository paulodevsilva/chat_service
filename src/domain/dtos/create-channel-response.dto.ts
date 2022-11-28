import { Channel } from '../entities';

export class CreateChannelResponseDto {
  success: boolean;

  createdChannel: Channel;
}
