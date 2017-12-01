<template>
  <div class="measure">
    <label for="borderRadius" class="f6 b db mb2">{{ label }}</label>
    <select id="borderRadius" class="ba b--black-20 pa2 mb2 db w-100" @change="updateValue" :value="value">
      <option v-for="(val, key) in data" :key="key">
        {{ val }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'dropdownlist',
  props: ['label', 'data', 'value'],
  methods: {
    updateValue({ target: { value } }) {
      this.$emit('update:value', value);
    },
  },
};
</script>
