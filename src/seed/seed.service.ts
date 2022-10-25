import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeapiResponse } from './interfaces/pokeapi-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeapiResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      console.log({ name, no });
    });

    return data.results;
  }
}
