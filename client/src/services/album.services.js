import http from "../http-common";

class AlbumDataService {
    getAll() {
        return http.get(`/users/albuminterests`);
    }

    get(id) {
        return http.get(`/users/albuminterests${id}`);
    }

    create(data) {
        return http.post("/users/albuminterests", data);
    }

    update(id, data) {
        return http.put(`/users/albuminterests/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/albuminterests/${id}`);
    }

    deleteAll() {
        return http.delete(`/users/albuminterests`);
    }
}

export default new AlbumDataService();