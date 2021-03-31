import http from "../http-common";

class ArtistDataService {
    getAll() {
        return http.get("/users/artistinterests");
    }

    get(id) {
        return http.get(`/users/artistinterests/${id}`);
    }

    create(data) {
        return http.post("/users/artistinterests", data);
    }

    update(id, data) {
        return http.put(`/users/artistinterests/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/artistinterests/${id}`);
    }

    deleteAll() {
        return http.delete(`/users/artistinterests`);
    }
}

export default new ArtistDataService();