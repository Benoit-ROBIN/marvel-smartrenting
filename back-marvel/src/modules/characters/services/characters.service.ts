import { Injectable } from '@nestjs/common';
import { ApiService } from '../../../providers/api';

@Injectable()
export class CharactersService {
  BASE_URL = 'https://gateway.marvel.com/v1/public/';

  constructor(private api: ApiService) {}

  public async getAllCharacters(page?: string) {
    const params = {
      offset: page !== undefined ? this.computeOffset(parseInt(page, 10)) : 0,
    };
    const { data } = await this.api.get(this.BASE_URL + 'characters', params);
    data.results = this.formatdata(data.results);
    return data;
  }

  private formatdata(data) {
    return data.map(item => {
      delete item.comics;
      delete item.series;
      delete item.stories;
      delete item.events;
      delete item.urls;
      return item;
    });
  }

  private computeOffset(page: number) {
    return page * 20 - 20;
  }
}
