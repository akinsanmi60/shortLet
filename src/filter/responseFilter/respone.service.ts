import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response {
  status: boolean;
  statusCode: number;
  path?: string;
  message: string;
  data: any;
}

export type ResponseObject = Pick<Response, 'message' | 'data'>;

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }

  errorHandler(
    exception: HttpException,
    context: ExecutionContext,
  ): Observable<unknown> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      status: false,
      statusCode: status,
      message: exception.message,
    });

    // You should return an observable here, so let's return an observable with a default response
    return new Observable<unknown>();
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;

    return {
      status: true,
      statusCode,
      message: res.message,
      data: res.data,
    };
  }
}
