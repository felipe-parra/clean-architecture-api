import { Book } from "../../domain/entities/Book";
import { BookRepository } from "../../domain/interfaces/BookRepository";
import { BookModel } from "../models/BookModel";

export class MongoBookRepository implements BookRepository {
  async findAll(): Promise<Book[]> {
    return await BookModel.find()
  }

  async findById(id: string): Promise<Book|null> {
    return await BookModel.findById(id);
  }

  async save(book: Book): Promise<Book> {
    const newBook = new BookModel(book);
    await newBook.save();
    return book;
  }

  async update(book: Book): Promise<Book> {
    const updatedBook = await BookModel.findByIdAndUpdate(book.id, book) as Book;
    return updatedBook;
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}