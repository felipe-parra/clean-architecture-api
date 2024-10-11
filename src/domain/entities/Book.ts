
export class Book {
  constructor(
    public readonly id: string,
    public title: string,
    public author: string,
    public year: number,
    public price: number,
    public isbn: string,
    public publisher: string,
  ){}
}