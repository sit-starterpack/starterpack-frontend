<template>
  <div>
    <div class="flex flex-col w-full items-center">
      <h1 class="text-2xl font-bold">Admin</h1>
      <h2 class="text-xl font-semibold my-3">{{ name }}</h2>
    </div>
    <h1 v-if="userInResponsibilty.length === 0">No user for give feedback</h1>
    <AdminFeedbackForm
      v-for="user in userInResponsibilty"
      :key="user._id"
      :name="user.name"
      :nickname="user.nickname"
      :feedbacks="user.feedbacks"
      :user-id="user._id"
      @sendfeedback="postFeedbackToServer"
    ></AdminFeedbackForm>
  </div>
</template>

<script>
export default {
  props: {
    userInResponsibility: { type: Array, default: null },
  },
};
</script>

<style></style>
