export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public type: string,
    public gender: string,
    public origin: string,
    public location: string,
    public image: string,
    public created: string,
    public episode: Array<any>
  ) {}
}
