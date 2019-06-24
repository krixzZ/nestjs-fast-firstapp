import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTask(): string {
    return 'get all task';
  }
}
