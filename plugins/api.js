import Vue from 'vue';
// import ViewUI from 'view-design';

Vue.mixin({
  methods: {
    async callApi(method, url, dataObj) {
      try {
        const data = await this.$axios({
          method,
          url,
          data: dataObj,
        });
        return data;
      } catch (e) {}
    },
  },
});
