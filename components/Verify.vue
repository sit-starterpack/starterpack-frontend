<template>
  <div id="Container" class="flex flex-col">
    <h1 id="heading" class="text-5xl font-bold mb-10 lg:text-7xl">CODE</h1>

    <div
      id="input"
      class="
        relative
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

        <button
          id="button"
          class="
            rounded-r-full
            absolute
            w-20
            h-full
            right-0
            top-0
            bottom-0
            bg-black
          "
          @click="login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            class="absolute right-4 top-5 bottom-0 lg:top-8 bounce"
          >
            <path d="M24 12l-10-10v7h-14v6h14v7z" />
          </svg>
        </button>
      </form>
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
  /* background: linear-gradient(90deg, #ffffff 80%, #000000 20%); */
}
input {
  background: #ffffff;
}
button {
  background-color: #000000;
}
/* @media (max-width: 1024px) {
  #input {
    background: linear-gradient(90deg, #ffffff 78%, #000000 22%);
  }
  input {
    background: linear-gradient(90deg, #ffffff 84.4%, #000000 16%);
  }
} */
svg {
  fill: #ffffff;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
