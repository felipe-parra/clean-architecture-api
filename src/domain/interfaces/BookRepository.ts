import { Book } from "../entities/Book";

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book|null>;
  save(book: Book): Promise<Book>;
  update(book: Book): Promise<Book>;
  delete(id: string): Promise<void>;
}