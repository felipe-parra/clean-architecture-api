import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";

export class CreateBook {
  constructor(private readonly bookRepository: BookRepository){}

  async execute(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }
}