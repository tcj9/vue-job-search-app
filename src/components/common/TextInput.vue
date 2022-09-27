<!-- eslint-disable prettier/prettier -->
<template>
  <input
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
  />
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
