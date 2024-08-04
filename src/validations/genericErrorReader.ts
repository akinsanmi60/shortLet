import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ZodError, ZodIssue } from 'zod';

export const readZodInputError = (err: ZodError) => {
  const issues = err.issues.map((issue: ZodIssue) => issue.message).join(', ');
  // throw new BadRequestException(`Error in input: ${issues}`);
  return new BadRequestException(`Error in input: ${issues}`);
};

export const readStatusCodeError = (status: number) => {
  const val = [200, 201, 202].indexOf(status) === -1;
  return val;
};

export const determineErrorCode = (err: number, message: string) => {
  switch (err) {
    case 400 | 422 | 401 | 403 | 405 | 409:
      throw new BadRequestException(message);
    case 404:
      throw new NotFoundException(message);
    default:
      return new Error(message);
  }
};
