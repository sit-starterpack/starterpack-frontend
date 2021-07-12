<template>
  <div id="Container" class="flex flex-col">
    <h1 id="heading" class="text-5xl font-bold mb-10 lg:text-7xl">CODE</h1>

    <div
      id="input"
      class="border-4 border-black py-5 px-8 lg:py-8 lg:px-24 rounded-full"
    >
      <form @submit.prevent="login()">
        <input v-model="code" type="text" class="text-2xl outline-none" />
      </form>
    </div>
    <span class="mt-5 text-lg font-bold">
      ใส่รหัสนักศึกษา 3 ตัวท้ายเพื่อเข้าใช้งาน
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: '',
    };
  },
  methods: {
    async login() {
      const payloads = {
        std_id: this.code,
      };
      try {
        await this.$auth.loginWith('local', { data: payloads });
        this.$router.push('/feedbackpage');
      } catch (e) {
        // this.router.push('/');
      }
    },
  },
};
</script>
<style>
#Container {
  overflow-x: visible;
}
#input {
  background: linear-gradient(90deg, #ffffff 80%, #000000 20%);
}
input {
  background: linear-gradient(90deg, #ffffff 86.7%, #000000 14%);
}
@media (min-width: 1024px) {
  #input {
    background: linear-gradient(90deg, #ffffff 80%, #000000 20%);
  }
  input {
    background: linear-gradient(90deg, #ffffff 100%, #ffffff 14%);
  }
}
</style>
