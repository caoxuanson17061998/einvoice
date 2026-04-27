import { BadRequestException, Injectable } from '@nestjs/common';
import { PORT } from '@common/constants/common.constant';

@Injectable()
export class AppService {
  getData(): { message: string } {
    throw new BadRequestException('Bad request exception');
    return { message: `Hello API on port ${PORT}` };
  }
}
