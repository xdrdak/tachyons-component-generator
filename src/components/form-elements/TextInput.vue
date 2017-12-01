<template>
  <div class="measure">
    <label class="f6 b db mb2">{{ label }}</label>
    <input
      class="input-reset ba b--black-20 pa2 mb2 db w-100"
      type="text"
      v-model="inputValue"
    >
  </div>
</template>

<script>
export default {
  name: 'textinput',
  data() {
    return {
      inputValue: this.value,
    };
  },
  props: {
    label: String,
    value: String,
  },
  watch: {
    inputValue(value) {
      this.$emit('update:value', value);
    },
  },
};
</script>
