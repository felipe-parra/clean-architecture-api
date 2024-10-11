import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";

export class InMemoryBookRepository implements BookRepository {
  private readonly books: Book[] = [];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return await this.books.find((book) => book.id === id) || null;
  }

  async save(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async update(book: Book): Promise<Book> { 
    const index = this.books.findIndex((b) => b.id === book.id);
    this.books[index] = book;
    return book;
  }

  async delete(id: string): Promise<void> {
    const index = this.books.findIndex((b) => b.id === id);
    this.books.splice(index, 1);
  }
}