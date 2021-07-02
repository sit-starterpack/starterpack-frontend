export default {
  async getUser(url) {
    try {
      const data = await this.$axios.$get(url);
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async postUser(url, data, id) {
    try {
      return await this.$axios.$post(url + id, data);
    } catch (e) {
      console.error(e);
    }
  },
  async putUser(url, data, id) {
    try {
      return await this.$axios.$put(url + id, data);
    } catch (e) {
      console.error(e);
    }
  },
  async deleteUser(url, id) {
    return await this.$axios.$put(url + id);
  },
};
