import axios from "axios";

export const BASE_URL = "http://localhost:3000/";

export class CharactersService {
  getAllCharacters(endPoint, page) {
    const param = "?page=" + page;

    return axios.get(BASE_URL + endPoint + param)
      .then((response) => response)
      .catch((error) => error);
  }
}
