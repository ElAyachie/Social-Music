import http from "../http-common";

class SongDataService {
    getAll() {
        return http.get("/users/songinterests");
    }

    get(id) {
        return http.get(`/users/songinterests/${id}`);
    }

    create(data) {
        return http.post("/users/songinterests", data);
    }

    update(id, data) {
        return http.put(`/users/songinterests/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/songinterests/${id}`);
    }

    deleteAll() {
        return http.delete(`/users/songinterests`);
    }
}

export default new SongDataService();