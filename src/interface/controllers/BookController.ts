import { Request, Response } from "express";
import { DIContainer } from "../../infrastructure/DIContainer";
import { CreateBookDto } from "../dto/CreateBookDto";
import { validate } from "class-validator";

export class BookController{
  private readonly getAllBooks = DIContainer.getAllBooksUseCase();
  private createBook = DIContainer.createBookUseCase();

  async getAll(req:Request, res:Response){
    const books = await this.getAllBooks.execute();
    res.json(books);
  }

  async create(req:Request, res:Response){
    const dto = Object.assign(new CreateBookDto(), req.body);
    const errors = await validate(dto);
  
    if(errors.length > 0){
      return res.status(400).json(errors);
    }
  
    const book = await this.createBook.execute(dto);
  
    res.json(book);
  }
}