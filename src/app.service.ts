import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`Backend running at port${3000}`);
    return 'Hello World!';

  }
}
