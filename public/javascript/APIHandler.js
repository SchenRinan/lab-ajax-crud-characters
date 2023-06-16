class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL})
  }

  async getFullList () {
    try {
      const response = await this.api.get(`/characters`);
      const todoItems = response.data;
      // console.log(todoItems[0].name);
      return todoItems;
    } catch (errors) {
      console.error(errors);
    }
  }

  async getOneRegister (id) {
    try {
      const response = await this.api.get(`/characters/${id}`);
      const todoItems = response.data;
      // console.log(todoItems[0].name);
      return todoItems;
    } catch (errors) {
      console.error(errors);
    }
  }

  async createOneRegister (item) {
    try {
      const response = await this.api.post(`/characters`, item);
      // const todoItems = response.data;
      // // console.log(todoItems[0].name);
      // return todoItems;
    } catch (errors) {
      console.error(errors);
    }
  }

  async updateOneRegister (item) {
    try {
      await this.api.put(`/characters/${item.id}`, item);
      // const todoItems = response.data;
      // // console.log(todoItems[0].name);
      // return todoItems;
    } catch (errors) {
      console.error(errors);
    }
  }

  deleteOneRegister () {

  }
}