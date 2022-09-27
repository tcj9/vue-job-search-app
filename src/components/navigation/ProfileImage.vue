<!-- eslint-disable prettier/prettier -->
<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "/profile.png",
    };
  },
};
</script>
