import { RESTDataSource } from 'apollo-datasource-rest';

class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.co/api/';
  }

  async getPeople() {
    const response = await this.get(`people`);
    return response.results;
  }

  async getFilm(id) {
    return this.get(`films/${id}`);
  }

}

export default StarWarsAPI;