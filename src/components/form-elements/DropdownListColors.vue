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
// TODO: `dropdownlistcolors` differs from the regular dropdownlist in that it should
//       show the color preview somewhere in the list.
import { fontColors, bgColors, borderColors } from '@/tachyons-utils/colors';

const colorForMap = {
  fonts: fontColors,
  background: bgColors,
  border: borderColors,
};

export default {
  name: 'dropdownlistcolors',
  props: {
    colorsFor: String,
    label: String,
    value: [String, Number],
  },
  data() {
    return {
      data: colorForMap[this.colorsFor] || fontColors,
    };
  },
  methods: {
    updateValue({ target: { value } }) {
      this.$emit('update:value', value);
    },
  },
};
</script>
