import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";

export class GetAllBooks {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }
}