import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from '../services/characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  async getAllCharacters(@Query() query) {
    const data = await this.charactersService.getAllCharacters(query.page);
    return data;
  }
}
