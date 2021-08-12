// Project Type
export enum Projectstatus {
  Active,
  Finished,
}
export class Project {
  constructor(
    public id: string,
    public title: string,
    public decription: string,
    public people: number,
    public status: Projectstatus
  ) {}
}
