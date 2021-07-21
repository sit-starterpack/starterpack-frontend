<template>
  <div id="Container" class="flex flex-col">
    <h1 id="heading" class="text-5xl font-bold mb-10 lg:text-7xl">CODE</h1>

    <div
      id="input"
      class="
        border-4 border-black
        py-5
        px-8
        rounded-full
        flex flex-row
        lg:py-8 lg:px-24
      "
    >
      <form @submit.prevent="login">
        <input v-model="code" type="text" class="text-2xl outline-none" />
      </form>
      <button
        id="button"
        class="rounded-full absolute p-4 ml-60 -mt-3 lg:ml-72 bg-black"
        @click="login"
      >
        click
      </button>
    </div>
    <div v-if="errors" class="text-red-500">รหัสนี้ไม่อยู่ในระบบ</div>

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
      errors: false,
    };
  },
  methods: {
    async login() {
      const payloads = {
        std_id: this.code,
      };
      try {
        const logIn = await this.$auth.loginWith('local', { data: payloads });
        console.log(logIn);
        this.$router.push('/feedback');
      } catch (e) {
        if (e) {
          this.errors = true;
        }
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
  background: #ffffff;
}
button {
  background-color: #000000;
}
@media (max-width: 1024px) {
  #input {
    background: linear-gradient(90deg, #ffffff 78%, #000000 22%);
  }
  input {
    background: linear-gradient(90deg, #ffffff 84.4%, #000000 16%);
  }
}
</style>
