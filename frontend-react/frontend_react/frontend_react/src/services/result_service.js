import http from "../http-common";

class ResultDataService {
  getAll() {
    return http.get("/results");
  }

  get(id) {
    return http.get(`/results/${id}`);
  }

  create(data) {
    return http.post("/results", data);
  }

  update(id, data) {
    return http.put(`/results/${id}`, data);
  }

  delete(id) {
    return http.delete(`/results/${id}`);
  }

  deleteAll() {
    return http.delete(`/results`);
  }

  findByTitle(title) {
    return http.get(`/results?title=${title}`);
  }
}

export default new ResultDataService();