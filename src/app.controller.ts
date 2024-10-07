import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    //Handle getting information about request
    //getting params
    //getting headers
    //getting stuff related to the request itshelf
    //validation of the data that is comming back from client
    //return back status and error codes stuff
    //handle or at least call authentication to see the user who is making the request
    return this.bookService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book {
    const bookId = +id;
    return this.bookService.findById(bookId);
  }

  //Post
  @Post()
  create(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;

    return this.bookService.create(bookData);
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    const bookId = +id;
    return this.bookService.update(bookId, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book[] {
    return this.bookService.delete(+id);
  }
}
