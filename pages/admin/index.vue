<template>
  <div class="flex flex-col w-full justify-center px-5">
    <h1 class="flex justify-center mt-5 text-2xl font-extrabold">
      Who are you?
    </h1>
    <CardStyle class="w-full p-5 mt-5">
      <h2>Total Student: {{ totalUser }}</h2>
    </CardStyle>
    <div class="flex flex-col justify-center items-center mt-5">
      <Card
        v-for="(admin, index) in admins"
        :key="admin._id"
        :name="admin.nickname"
        class="m-3 w-full"
        :user-number="getUserNumber"
        :index="index"
        @decreaseToTalUser="decreaseTempTotalUser(index)"
      ></Card>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'checkrole'],
  data() {
    return {
      totalUser: 0,
      admins: null,
      tempTotalUser: 0,
      userNumber: {},
    };
  },
  computed: {
    getUserNumber() {
      return this.userNumber;
    },
  },
  async created() {
    const resUser = await this.callApi('get', '/api/user');
    const resAdmin = await this.callApi('get', '/api/user/admin');
    this.totalUser = resUser.data.length;
    this.admins = resAdmin.data;
    this.tempTotalUser = this.totalUser;
  },
  methods: {
    decreaseTempTotalUser(index) {
      const decreaseEach = Math.ceil(this.totalUser / this.admins.length);
      this.userNumber[index] =
        this.tempTotalUser - decreaseEach >= 0
          ? decreaseEach
          : this.tempTotalUser;
      this.tempTotalUser -= decreaseEach;
    },
  },
};
</script>
