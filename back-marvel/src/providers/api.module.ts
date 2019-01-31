import { Module, HttpModule } from '@nestjs/common';
import { ApiService } from './api';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
})
export class ApiModule {}
