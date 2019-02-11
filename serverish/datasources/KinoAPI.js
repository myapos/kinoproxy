import { RESTDataSource } from 'apollo-datasource-rest';

class KinoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://applications.opap.gr/DrawsRestServices/kino/drawDate/';
  }

  async getSingleDate() {
    const response = await this.get(`2-2-2019.json`);
    return response.draws.draw;
  }

  async getDate(date) {
    const response = await this.get(`${date}.json`);
     return response.draws.draw;
  }


}

export default KinoAPI;