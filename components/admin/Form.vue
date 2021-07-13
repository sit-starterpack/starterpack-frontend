<template>
  <form
    class="p-3 flex flex-col justify-between lg:w-1/4"
    @submit.prevent="addUser"
  >
    <label for="name">Name:</label>
    <input id="name" v-model="name" type="text" />
    <span v-if="errors.name" class="text-red-500">Name is Empty</span>
    <label for="nickname">NickName:</label>
    <input id="nickname" v-model="nickname" type="text" />
    <span v-if="errors.nickname" class="text-red-500">NickName is Empty</span>
    <label for="std_id">Student ID:</label>
    <input id="std_id" v-model="std_id" type="text" />
    <span v-if="errors.std_id" class="text-red-500">Student Id is Empty</span>
    <label for="role">Role:</label>
    <select id="role" v-model="role" name="role">
      <option value="user" selected>user</option>
      <option value="admin">admin</option>
    </select>
    <br />
    <input type="submit" class="p-3 cursor-pointer" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nickname: '',
      std_id: '',
      role: 'user',
      errors: {
        name: false,
        nickname: false,
        std_id: false,
      },
    };
  },
  methods: {
    addUser() {
      const payload = {
        name: this.name,
        nickname: this.nickname,
        std_id: this.std_id,
        role: this.role,
      };
      this.validate();
      const isError = Object.values(this.errors).includes(true);
      if (!isError) {
        this.$emit('adduser', payload);
        this.name = '';
        this.nickname = '';
        this.std_id = '';
        this.role = 'user';
      } else {
        this.$emit('adduser', null);
      }
    },
    validate() {
      if (this.name) this.errors.name = false;
      else this.errors.name = true;
      if (this.nickname) this.errors.nickname = false;
      else this.errors.nickname = true;
      if (this.std_id) this.errors.std_id = false;
      else this.errors.std_id = true;
    },
  },
};
</script>

<style scoped>
input {
  border: solid 1px black;
}
</style>
