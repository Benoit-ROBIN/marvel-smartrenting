import { Module } from '@nestjs/common';
import { CharactersController } from './controllers/characters.controller';
import { CharactersService } from './services/characters.service';
import { ApiModule } from '../../providers/api.module';
import { ApiService } from '../../providers/api';

@Module({
  imports: [ApiModule],
  controllers: [CharactersController],
  providers: [CharactersService, ApiService],
})
export class CharactersModule {}
