export class BaseEntity {
  public created_at: Date;
  public updated_at: Date;

  constructor() {
    this.created_at = new Date();
  }
}
