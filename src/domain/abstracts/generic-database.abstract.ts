import { Channel } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IGenericDatabase {
  abstract channels: IGenericRepository<Channel>;
}
