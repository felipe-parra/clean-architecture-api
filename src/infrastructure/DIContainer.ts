import { CreateBook } from "../use-cases/books/CreateBook";
import { GetAllBooks } from "../use-cases/books/GetAllBooks";
import { MongoBookRepository } from "./repositories/MongoBookRepository";

class DIContainer {
  private static readonly _bookRepository = new MongoBookRepository();

  static getBookRepository(): MongoBookRepository {
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