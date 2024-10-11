import { model, Schema } from "mongoose";

interface IBook extends Document {
  title: string;
  author: string;
  year: number;
  price: number;
  isbn: string;
  publisher: string;
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  isbn: { type: String, required: true },
  publisher: { type: String, required: true },
});

export const BookModel = model<IBook>('Book', BookSchema);