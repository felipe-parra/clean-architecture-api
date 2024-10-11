import { Book } from "../domain/entities/Book";
import { CreateBook } from "../use-cases/books/CreateBook";
import { GetAllBooks } from "../use-cases/books/GetAllBooks";
import { InMemoryBookRepository } from "./repositories/InMemoryBookRepository";

class DIContainer {
  private static readonly _bookRepository = new InMemoryBookRepository();

  static getBookRepository(): InMemoryBookRepository {
    return this._bookRepository;
  }

  static getAllBooksUseCase(){
    return new GetAllBooks(this.getBookRepository());
  }
  static createBookUseCase(){
    return new CreateBook(this.getBookRepository());
  }
}

export { DIContainer };