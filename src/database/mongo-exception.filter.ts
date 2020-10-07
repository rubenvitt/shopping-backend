import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { Error } from 'mongoose';

export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    switch (exception.code) {

    }
  }
}

export class ValidationExceptionFilter implements ExceptionFilter {
  catch(error: Error.ValidationError, host: ArgumentsHost) {
    host.switchToHttp().getResponse().status(HttpStatus.BAD_REQUEST).send(error.message);
  }
}