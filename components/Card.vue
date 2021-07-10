<template>
  <div
    class="
      bg-white
      p-2
      w-72
      h-40
      rounded-2xl
      shadow-lg
      flex
      justify-center
      gap-5
      select-none
      font-bold
      text-2xl
    "
  >
    <div>
      <p>
        {{ name }}
      </p>
      <p class="ml-5">
        {{ total }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'pond' },
    total: { type: Number, default: 0 },
  },
};
</script>
